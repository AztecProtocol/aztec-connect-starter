// SPDX-License-Identifier: Apache-2.0
pragma solidity >=0.8.4;

import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {TroveBridge} from "../../bridges/liquity/TroveBridge.sol";
import {AztecTypes} from "rollup-encoder/libraries/AztecTypes.sol";
import {ISubsidy} from "../../aztec/interfaces/ISubsidy.sol";

import {LiquityTroveDeployment, BaseDeployment} from "../../deployment/liquity/LiquityTroveDeployment.s.sol";
import {GasBase} from "../base/GasBase.sol";

interface IRead {
    function defiBridgeProxy() external view returns (address);
}

contract TroveBridgeMeasure is LiquityTroveDeployment {
    ISubsidy private constant SUBSIDY =
        ISubsidy(0xABc30E831B5Cc173A9Ed5941714A7845c909e7fA);
    address private constant BENEFICIARY =
        address(uint160(uint256(keccak256(abi.encodePacked("_BENEFICIARY")))));
    uint256 private constant MAX_FEE = 1e18; // Set appropriate fee limit.

    GasBase internal gasBase;
    TroveBridge internal bridge;

    AztecTypes.AztecAsset internal emptyAsset;
    AztecTypes.AztecAsset internal ethAsset;
    AztecTypes.AztecAsset internal lusdAsset;
    AztecTypes.AztecAsset internal tbAsset;

    function setUp() public override(BaseDeployment) {
        super.setUp();

        address defiProxy = IRead(ROLLUP_PROCESSOR).defiBridgeProxy();
        vm.label(defiProxy, "DefiProxy");

        gasBase = new GasBase(defiProxy);

        // Deploy TroveBridge
        address temp = ROLLUP_PROCESSOR;
        ROLLUP_PROCESSOR = address(gasBase);
        bridge = TroveBridge(payable(deploy(400)));
        ROLLUP_PROCESSOR = temp;

        // Asset Initialization
        ethAsset = AztecTypes.AztecAsset({
            id: 0,
            erc20Address: address(0),
            assetType: AztecTypes.AztecAssetType.ETH
        });
        lusdAsset = AztecTypes.AztecAsset({
            id: 1,
            erc20Address: 0x5f98805A4E8be255a32880FDeC7F6728C6568bA0,
            assetType: AztecTypes.AztecAssetType.ERC20
        });
        tbAsset = AztecTypes.AztecAsset({
            id: 2,
            erc20Address: address(bridge),
            assetType: AztecTypes.AztecAssetType.ERC20
        });

        vm.label(lusdAsset.erc20Address, "LUSD");
        vm.label(tbAsset.erc20Address, "TB");

        // Fund Subsidy
        vm.startBroadcast();
        SUBSIDY.subsidize{value: 1e17}(address(bridge), 0, 500);
        SUBSIDY.registerBeneficiary(BENEFICIARY);
        SUBSIDY.subsidize{value: 1e17}(address(bridge), 1, 300);
        SUBSIDY.registerBeneficiary(BENEFICIARY);
        vm.stopBroadcast();

        uint256 subsidyBalance = SUBSIDY.claimableAmount(BENEFICIARY);
        require(subsidyBalance > 0, "Subsidy funding failed");

        // Increase Subsidy Time
        vm.warp(block.timestamp + 10 days);
    }

    function measureETH() public {
        openTrove(address(bridge));

        // Transfer ETH
        {
            (bool success, ) = address(gasBase).call{value: 2 ether}("");
            require(success, "ETH transfer failed");
            emit log_named_uint(
                "ETH balance of gasBase",
                address(gasBase).balance
            );
        }

        // Borrow LUSD
        {
            vm.broadcast();
            gasBase.convert(
                address(bridge),
                ethAsset,
                emptyAsset,
                tbAsset,
                lusdAsset,
                1 ether,
                0,
                MAX_FEE,
                BENEFICIARY,
                630000
            );
        }

        uint256 subsidyAfterBorrow = SUBSIDY.claimableAmount(BENEFICIARY);
        require(subsidyAfterBorrow > 0, "Subsidy not claimed during borrow");
        emit log_named_uint(
            "Claimable subsidy after borrow",
            subsidyAfterBorrow
        );

        // Repay Debt
        {
            uint256 lusdBalance = IERC20(lusdAsset.erc20Address).balanceOf(
                address(gasBase)
            );
            uint256 tbBalance = IERC20(tbAsset.erc20Address).balanceOf(
                address(gasBase)
            );

            emit log_named_uint("LUSD balance", lusdBalance);
            emit log_named_uint("TB balance", tbBalance);

            vm.broadcast();
            gasBase.convert(
                address(bridge),
                tbAsset,
                lusdAsset,
                ethAsset,
                lusdAsset,
                lusdBalance / 2,
                0,
                0,
                BENEFICIARY,
                480000
            );
        }

        uint256 subsidyAfterRepay = SUBSIDY.claimableAmount(BENEFICIARY);
        require(
            subsidyAfterRepay > subsidyAfterBorrow,
            "Subsidy not claimed during repay"
        );
        emit log_named_uint("Claimable subsidy after repay", subsidyAfterRepay);
    }
}
