// SPDX-License-Identifier: Apache-2.0
// Copyright 2022 Aztec.
pragma solidity >=0.8.4;

import {BridgeTestBase} from "./../../aztec/base/BridgeTestBase.sol";
import {AztecTypes} from "rollup-encoder/libraries/AztecTypes.sol";

// Example-specific imports
import {NftVault} from "../../../bridges/nft-basic/NftVault.sol";
import {AddressRegistry} from "../../../bridges/registry/AddressRegistry.sol";
import {ErrorLib} from "../../../bridges/base/ErrorLib.sol";
import {ERC721PresetMinterPauserAutoId} from
    "@openzeppelin/contracts/token/ERC721/presets/ERC721PresetMinterPauserAutoId.sol";

/**
 * @notice The purpose of this test is to test the bridge in an environment that is as close to the final deployment
 *         as possible without spinning up all the rollup infrastructure (sequencer, proof generator etc.).
 */
contract NftVaultBasicE2ETest is BridgeTestBase {
    NftVault internal bridge;
    AddressRegistry private registry;
    ERC721PresetMinterPauserAutoId private nftContract;

    // To store the id of the bridge after being added
    uint256 private id;
    uint256 private registryBridgeId;
    uint256 private tokenIdToDeposit = 1;
    address private constant registeredAddress = 0x2e782B05290A7fFfA137a81a2bad2446AD0DdFEA;
    address private constant DAI = 0x6B175474E89094C44Da98b954EedeAC495271d0F;
    AztecTypes.AztecAsset private ethAsset;
    AztecTypes.AztecAsset private virtualAsset1 =
        AztecTypes.AztecAsset({id: 1, erc20Address: address(0), assetType: AztecTypes.AztecAssetType.VIRTUAL});
    AztecTypes.AztecAsset private virtualAsset100 =
        AztecTypes.AztecAsset({id: 100, erc20Address: address(0), assetType: AztecTypes.AztecAssetType.VIRTUAL});
    AztecTypes.AztecAsset private erc20InputAsset =
        AztecTypes.AztecAsset({id: 1, erc20Address: DAI, assetType: AztecTypes.AztecAssetType.ERC20});

    function setUp() public {
        registry = new AddressRegistry(address(ROLLUP_PROCESSOR));
        bridge = new NftVault(address(ROLLUP_PROCESSOR), address(registry));
        nftContract = new ERC721PresetMinterPauserAutoId("test", "NFT", "");
        nftContract.mint(address(this));
        nftContract.mint(address(this));
        nftContract.mint(address(this));

        nftContract.approve(address(bridge), 0);
        nftContract.approve(address(bridge), 1);
        nftContract.approve(address(bridge), 2);

        ethAsset = ROLLUP_ENCODER.getRealAztecAsset(address(0));

        vm.label(address(registry), "AddressRegistry Bridge");
        vm.label(address(bridge), "NftVault Bridge");

        // Impersonate the multi-sig to add a new bridge
        vm.startPrank(MULTI_SIG);

        // WARNING: If you set this value too low the interaction will fail for seemingly no reason!
        // OTOH if you se it too high bridge users will pay too much
        ROLLUP_PROCESSOR.setSupportedBridge(address(registry), 120000);
        ROLLUP_PROCESSOR.setSupportedBridge(address(bridge), 120000);

        vm.stopPrank();

        // Fetch the id of the bridges
        registryBridgeId = ROLLUP_PROCESSOR.getSupportedBridgesLength() - 1;
        id = ROLLUP_PROCESSOR.getSupportedBridgesLength();

        // get virutal assets to register an address
        ROLLUP_ENCODER.defiInteractionL2(registryBridgeId, ethAsset, emptyAsset, virtualAsset1, emptyAsset, 0, 1);
        ROLLUP_ENCODER.processRollupAndGetBridgeResult();

        // register an address
        uint160 inputAmount = uint160(registeredAddress);
        ROLLUP_ENCODER.defiInteractionL2(
            registryBridgeId, virtualAsset1, emptyAsset, virtualAsset1, emptyAsset, 0, inputAmount
        );
        ROLLUP_ENCODER.processRollupAndGetBridgeResult();
    }

    function testDeposit() public {
        // get virtual asset before deposit
        ROLLUP_ENCODER.defiInteractionL2(id, ethAsset, emptyAsset, virtualAsset100, emptyAsset, 0, 1);

        (uint256 outputValueA, uint256 outputValueB, bool isAsync) = ROLLUP_ENCODER.processRollupAndGetBridgeResult();

        assertEq(outputValueA, 1, "Output value A doesn't equal 1");
        assertEq(outputValueB, 0, "Output value B is not 0");
        assertTrue(!isAsync, "Bridge is incorrectly in an async mode");

        address collection = address(nftContract);
        bridge.matchDeposit(virtualAsset100.id, collection, tokenIdToDeposit);
        (address returnedCollection, uint256 returnedId) = bridge.tokens(virtualAsset100.id);
        assertEq(returnedId, tokenIdToDeposit, "nft token id does not match input");
        assertEq(returnedCollection, collection, "collection data does not match");
    }

    function testWithdraw() public {
        testDeposit();
        uint64 auxData = registry.addressCount();
        ROLLUP_ENCODER.defiInteractionL2(id, virtualAsset100, emptyAsset, ethAsset, emptyAsset, auxData, 1);

        (uint256 outputValueA, uint256 outputValueB, bool isAsync) = ROLLUP_ENCODER.processRollupAndGetBridgeResult();
        address owner = nftContract.ownerOf(tokenIdToDeposit);
        assertEq(registeredAddress, owner, "registered address is not the owner");
        assertEq(outputValueA, 0, "Output value A is not 0");
        assertEq(outputValueB, 0, "Output value B is not 0");
        assertTrue(!isAsync, "Bridge is incorrectly in an async mode");

        (address _a, uint256 _id) = bridge.tokens(virtualAsset100.id);
        assertEq(_a, address(0), "collection address is not 0");
        assertEq(_id, 0, "token id is not 0");
    }
}
