// SPDX-License-Identifier: Apache-2.0
pragma solidity >=0.8.4;

import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {UniswapBridge} from "../../bridges/uniswap/UniswapBridge.sol";
import {AztecTypes} from "rollup-encoder/libraries/AztecTypes.sol";
import {ISubsidy} from "../../aztec/interfaces/ISubsidy.sol";
import {IWETH} from "../../interfaces/IWETH.sol";

import {UniswapDeployment, BaseDeployment} from "../../deployment/uniswap/UniswapDeployment.s.sol";
import {GasBase} from "../base/GasBase.sol";

interface IRead {
    function defiBridgeProxy() external view returns (address);
}

contract UniswapMeasure is UniswapDeployment {
    ISubsidy private constant SUBSIDY = ISubsidy(0xABc30E831B5Cc173A9Ed5941714A7845c909e7fA);
    address private constant BENEFICIARY = address(uint160(uint256(keccak256(abi.encodePacked("_BENEFICIARY")))));
    address private constant WETH = 0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2;

    uint256 private constant SUBSIDY_AMOUNT = 1e17; // 0.1 ETH for subsidy
    uint256 private constant GAS_LIMIT_1_SPLIT = 300000;
    uint256 private constant GAS_LIMIT_MAX_COMPLEX = 660000;

    address public constant USDC = 0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48;
    address public constant USDT = 0xdAC17F958D2ee523a2206206994597C13D831ec7;
    address public constant FRAX = 0x853d955aCEf822Db058eb8505911ED77F175b99e;

    GasBase internal gasBase;
    UniswapBridge internal bridge;

    AztecTypes.AztecAsset internal emptyAsset;
    AztecTypes.AztecAsset internal ethAsset;
    AztecTypes.AztecAsset internal wethAsset;
    AztecTypes.AztecAsset internal daiAsset;

    UniswapBridge.SplitPath internal emptySplitPath;

    function setUp() public override(BaseDeployment) {
        super.setUp();

        // Initialize defiProxy
        address defiProxy = IRead(ROLLUP_PROCESSOR).defiBridgeProxy();
        vm.label(defiProxy, "DefiProxy");

        vm.broadcast();
        gasBase = new GasBase(defiProxy);

        // Deploy the UniswapBridge contract
        address temp = ROLLUP_PROCESSOR;
        ROLLUP_PROCESSOR = address(gasBase);
        bridge = UniswapBridge(payable(deploy()));
        ROLLUP_PROCESSOR = temp;

        // Initialize assets
        ethAsset = AztecTypes.AztecAsset({id: 0, erc20Address: address(0), assetType: AztecTypes.AztecAssetType.ETH});
        wethAsset = AztecTypes.AztecAsset({id: 2, erc20Address: WETH, assetType: AztecTypes.AztecAssetType.ERC20});
        daiAsset = AztecTypes.AztecAsset({
            id: 1,
            erc20Address: 0x6B175474E89094C44Da98b954EedeAC495271d0F,
            assetType: AztecTypes.AztecAssetType.ERC20
        });

        // Register vaults and fund subsidies
        vm.startBroadcast();
        bridge.registerSubsidyCriteria(ethAsset.erc20Address, daiAsset.erc20Address);
        bridge.registerSubsidyCriteria(daiAsset.erc20Address, ethAsset.erc20Address);

        SUBSIDY.subsidize{value: SUBSIDY_AMOUNT}(
            address(bridge), bridge.computeCriteria(ethAsset, emptyAsset, daiAsset, emptyAsset, 0), 500
        );
        SUBSIDY.subsidize{value: SUBSIDY_AMOUNT}(
            address(bridge), bridge.computeCriteria(daiAsset, emptyAsset, ethAsset, emptyAsset, 0), 500
        );
        SUBSIDY.registerBeneficiary(BENEFICIARY);
        vm.stopBroadcast();

        // Increase time to allow subsidy accumulation
        vm.warp(block.timestamp + 10 days);
    }

    function measure1SplitPathSwap() public {
        // Encode path
        uint64 path = bridge.encodePath(
            1 ether, 1e20, WETH, UniswapBridge.SplitPath(100, 500, USDC, 100, address(0), 100), emptySplitPath
        );

        // Transfer ETH
        (bool success, ) = address(gasBase).call{value: 2 ether}("");
        require(success, "ETH transfer failed");
        emit log_named_uint("ETH balance of gasBase", address(gasBase).balance);

        // Perform the swap
        vm.broadcast();
        gasBase.convert(
            address(bridge),
            ethAsset,
            emptyAsset,
            daiAsset,
            emptyAsset,
            1 ether,
            0,
            path,
            BENEFICIARY,
            GAS_LIMIT_1_SPLIT
        );

        uint256 claimableSubsidyAfterDeposit = SUBSIDY.claimableAmount(BENEFICIARY);
        require(claimableSubsidyAfterDeposit > 0, "Subsidy was not claimed during deposit");
        emit log_named_uint("Claimable subsidy after deposit", claimableSubsidyAfterDeposit);
    }

    function measureMaxComplexPath() public {
        // Encode complex path
        uint64 path = bridge.encodePath(
            1 ether,
            1e20,
            WETH,
            UniswapBridge.SplitPath(50, 500, USDC, 100, FRAX, 500),
            UniswapBridge.SplitPath(50, 3000, USDT, 100, USDC, 500)
        );

        // Transfer ETH
        (bool success, ) = address(gasBase).call{value: 2 ether}("");
        require(success, "ETH transfer failed");
        emit log_named_uint("ETH balance of gasBase", address(gasBase).balance);

        // Perform the complex swap
        vm.broadcast();
        gasBase.convert(
            address(bridge),
            ethAsset,
            emptyAsset,
            daiAsset,
            emptyAsset,
            1 ether,
            0,
            path,
            BENEFICIARY,
            GAS_LIMIT_MAX_COMPLEX
        );

        uint256 claimableSubsidyAfterDeposit = SUBSIDY.claimableAmount(BENEFICIARY);
        require(claimableSubsidyAfterDeposit > 0, "Subsidy was not claimed during deposit");
        emit log_named_uint("Claimable subsidy after deposit", claimableSubsidyAfterDeposit);
    }
}
