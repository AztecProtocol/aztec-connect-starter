/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common.js";
import type { YearnBridge, YearnBridgeInterface } from "../YearnBridge.js";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_rollupProcessor",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "AsyncDisabled",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidAuxData",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidCaller",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidInputA",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidOutputA",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidOutputANotLatest",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidOutputVault",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidVault",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidWETHAmount",
    type: "error",
  },
  {
    inputs: [],
    name: "MissingImplementation",
    type: "error",
  },
  {
    inputs: [],
    name: "ROLLUP_PROCESSOR",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "SUBSIDY",
    outputs: [
      {
        internalType: "contract ISubsidy",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "WETH",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "YEARN_REGISTRY",
    outputs: [
      {
        internalType: "contract IYearnRegistry",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "erc20Address",
            type: "address",
          },
          {
            internalType: "enum AztecTypes.AztecAssetType",
            name: "assetType",
            type: "uint8",
          },
        ],
        internalType: "struct AztecTypes.AztecAsset",
        name: "",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "erc20Address",
            type: "address",
          },
          {
            internalType: "enum AztecTypes.AztecAssetType",
            name: "assetType",
            type: "uint8",
          },
        ],
        internalType: "struct AztecTypes.AztecAsset",
        name: "",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "erc20Address",
            type: "address",
          },
          {
            internalType: "enum AztecTypes.AztecAssetType",
            name: "assetType",
            type: "uint8",
          },
        ],
        internalType: "struct AztecTypes.AztecAsset",
        name: "",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "erc20Address",
            type: "address",
          },
          {
            internalType: "enum AztecTypes.AztecAssetType",
            name: "assetType",
            type: "uint8",
          },
        ],
        internalType: "struct AztecTypes.AztecAsset",
        name: "",
        type: "tuple",
      },
      {
        internalType: "uint64",
        name: "_auxData",
        type: "uint64",
      },
    ],
    name: "computeCriteria",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "erc20Address",
            type: "address",
          },
          {
            internalType: "enum AztecTypes.AztecAssetType",
            name: "assetType",
            type: "uint8",
          },
        ],
        internalType: "struct AztecTypes.AztecAsset",
        name: "_inputAssetA",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "erc20Address",
            type: "address",
          },
          {
            internalType: "enum AztecTypes.AztecAssetType",
            name: "assetType",
            type: "uint8",
          },
        ],
        internalType: "struct AztecTypes.AztecAsset",
        name: "",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "erc20Address",
            type: "address",
          },
          {
            internalType: "enum AztecTypes.AztecAssetType",
            name: "assetType",
            type: "uint8",
          },
        ],
        internalType: "struct AztecTypes.AztecAsset",
        name: "_outputAssetA",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "erc20Address",
            type: "address",
          },
          {
            internalType: "enum AztecTypes.AztecAssetType",
            name: "assetType",
            type: "uint8",
          },
        ],
        internalType: "struct AztecTypes.AztecAsset",
        name: "",
        type: "tuple",
      },
      {
        internalType: "uint256",
        name: "_inputValue",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_interactionNonce",
        type: "uint256",
      },
      {
        internalType: "uint64",
        name: "_auxData",
        type: "uint64",
      },
      {
        internalType: "address",
        name: "_rollupBeneficiary",
        type: "address",
      },
    ],
    name: "convert",
    outputs: [
      {
        internalType: "uint256",
        name: "outputValueA",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "erc20Address",
            type: "address",
          },
          {
            internalType: "enum AztecTypes.AztecAssetType",
            name: "assetType",
            type: "uint8",
          },
        ],
        internalType: "struct AztecTypes.AztecAsset",
        name: "",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "erc20Address",
            type: "address",
          },
          {
            internalType: "enum AztecTypes.AztecAssetType",
            name: "assetType",
            type: "uint8",
          },
        ],
        internalType: "struct AztecTypes.AztecAsset",
        name: "",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "erc20Address",
            type: "address",
          },
          {
            internalType: "enum AztecTypes.AztecAssetType",
            name: "assetType",
            type: "uint8",
          },
        ],
        internalType: "struct AztecTypes.AztecAsset",
        name: "",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "erc20Address",
            type: "address",
          },
          {
            internalType: "enum AztecTypes.AztecAssetType",
            name: "assetType",
            type: "uint8",
          },
        ],
        internalType: "struct AztecTypes.AztecAsset",
        name: "",
        type: "tuple",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
    ],
    name: "finalise",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_vault",
        type: "address",
      },
    ],
    name: "preApprove",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "preApproveAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x60a06040523480156200001157600080fd5b5060405162001edb38038062001edb833981016040819052620000349162000234565b6001600160a01b038116608052604080516002808252606082018352600092602083019080368337505060408051600280825260608201835293945060009390925090602083019080368337505060408051600280825260608201835293945060009390925090602083019080368337019050509050600083600081518110620000c257620000c262000266565b602002602001018181525050600183600181518110620000e657620000e662000266565b60200260200101818152505062030d40826000815181106200010c576200010c62000266565b602002602001019063ffffffff16908163ffffffff168152505062030d408260018151811062000140576200014062000266565b602002602001019063ffffffff16908163ffffffff1681525050608c8160008151811062000172576200017262000266565b602002602001019063ffffffff16908163ffffffff1681525050608c81600181518110620001a457620001a462000266565b63ffffffff909216602092830291909101909101526040516338d8461360e11b815273abc30e831b5cc173a9ed5941714a7845c909e7fa906371b08c2690620001f690869086908690600401620002bf565b600060405180830381600087803b1580156200021157600080fd5b505af115801562000226573d6000803e3d6000fd5b505050505050505062000331565b6000602082840312156200024757600080fd5b81516001600160a01b03811681146200025f57600080fd5b9392505050565b634e487b7160e01b600052603260045260246000fd5b600081518084526020808501945080840160005b83811015620002b457815163ffffffff168752958201959082019060010162000290565b509495945050505050565b606080825284519082018190526000906020906080840190828801845b82811015620002fa57815184529284019290840190600101620002dc565b505050838103828501526200031081876200027c565b91505082810360408401526200032781856200027c565b9695505050505050565b608051611b6462000377600039600081816101d40152818161024001528181610e520152818161105c015281816111140152818161115601526111d80152611b646000f3fe60806040526004361061009a5760003560e01c80636508156e11610069578063ad5c46481161004e578063ad5c46481461019a578063ae9467b5146101c2578063dbeacd54146101f657600080fd5b80636508156e1461015f5780639b07d3421461018757600080fd5b806326c3b515146100a65780632fa8cf13146100db5780633c77284c146100fd5780634215d9151461011257600080fd5b366100a157005b600080fd5b6100b96100b4366004611824565b610224565b6040805193845260208401929092521515908201526060015b60405180910390f35b3480156100e757600080fd5b506100fb6100f63660046118ba565b6105eb565b005b34801561010957600080fd5b506100fb610840565b34801561011e57600080fd5b5061013a7350c1a2ea0a861a967d9d0ffe2ae4012c2e05380481565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016100d2565b34801561016b57600080fd5b5061013a73abc30e831b5cc173a9ed5941714a7845c909e7fa81565b6100b96101953660046118ef565b610a24565b3480156101a657600080fd5b5061013a73c02aaa39b223fe8d0a0e5c4f27ead9083c756cc281565b3480156101ce57600080fd5b5061013a7f000000000000000000000000000000000000000000000000000000000000000081565b34801561020257600080fd5b50610216610211366004611964565b610a5b565b6040519081526020016100d2565b600080803373ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001614610297576040517f48f5c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b67ffffffffffffffff85166103bc576002896040015160038111156102be576102be6119d0565b146102f5576040517f6c98dcaf00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018b60400151600381111561030d5761030d6119d0565b141561031d5761031d348a610ab5565b60208901516040517fb6b55f250000000000000000000000000000000000000000000000000000000081526004810189905273ffffffffffffffffffffffffffffffffffffffff9091169063b6b55f25906024015b6020604051808303816000875af1158015610391573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103b591906119ff565b9250610522565b8467ffffffffffffffff16600114156104f05760028b6040015160038111156103e7576103e76119d0565b1461041e576040517fc582880b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600189604001516003811115610436576104366119d0565b1415610447576103b587878d610c0f565b60028960400151600381111561045f5761045f6119d0565b14156104be5760208b01516040517f2e1a7d4d0000000000000000000000000000000000000000000000000000000081526004810189905273ffffffffffffffffffffffffffffffffffffffff90911690632e1a7d4d90602401610372565b6040517f6c98dcaf00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdbb791da00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f0d3b205200000000000000000000000000000000000000000000000000000000815267ffffffffffffffff8616600482015273ffffffffffffffffffffffffffffffffffffffff8516602482015273abc30e831b5cc173a9ed5941714a7845c909e7fa90630d3b2052906044016020604051808303816000875af11580156105b2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105d691906119ff565b50919a60009a508a9950975050505050505050565b60008173ffffffffffffffffffffffffffffffffffffffff1663fc0c546a6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610638573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061065c9190611a18565b6040517ff9c7bba500000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff821660048201529091506000907350c1a2ea0a861a967d9d0ffe2ae4012c2e0538049063f9c7bba590602401602060405180830381865afa1580156106e0573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061070491906119ff565b905060005b8181101561080d576040517f7bbfc69e00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff84166004820152602481018290526000907350c1a2ea0a861a967d9d0ffe2ae4012c2e05380490637bbfc69e90604401602060405180830381865afa158015610799573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107bd9190611a18565b90508473ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610804576107fd8185610ef3565b5050505050565b50600101610709565b506040517fd03a632000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60007350c1a2ea0a861a967d9d0ffe2ae4012c2e05380473ffffffffffffffffffffffffffffffffffffffff16638e499bcf6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156108a1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108c591906119ff565b905060005b81811015610a20576040517f4f64b2be000000000000000000000000000000000000000000000000000000008152600481018290526000907350c1a2ea0a861a967d9d0ffe2ae4012c2e05380490634f64b2be90602401602060405180830381865afa15801561093e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109629190611a18565b6040517fe177dc7000000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff821660048201529091506000907350c1a2ea0a861a967d9d0ffe2ae4012c2e0538049063e177dc7090602401602060405180830381865afa1580156109e6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a0a9190611a18565b9050610a168183610ef3565b50506001016108ca565b5050565b60008060006040517f26d18eab00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600060018267ffffffffffffffff161115610aa2576040517fdbb791da00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5067ffffffffffffffff16949350505050565b60008160200151905060008173ffffffffffffffffffffffffffffffffffffffff1663fc0c546a6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610b0b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b2f9190611a18565b905073ffffffffffffffffffffffffffffffffffffffff811673c02aaa39b223fe8d0a0e5c4f27ead9083c756cc214610b94576040517f6c98dcaf00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73c02aaa39b223fe8d0a0e5c4f27ead9083c756cc273ffffffffffffffffffffffffffffffffffffffff1663d0e30db0856040518263ffffffff1660e01b81526004016000604051808303818588803b158015610bf057600080fd5b505af1158015610c04573d6000803e3d6000fd5b505050505050505050565b6000808260200151905073c02aaa39b223fe8d0a0e5c4f27ead9083c756cc273ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1663fc0c546a6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610c8f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cb39190611a18565b73ffffffffffffffffffffffffffffffffffffffff1614610d00576040517fc582880b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f2e1a7d4d0000000000000000000000000000000000000000000000000000000081526004810186905260009073ffffffffffffffffffffffffffffffffffffffff831690632e1a7d4d906024016020604051808303816000875af1158015610d70573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d9491906119ff565b905080610dcd576040517f93116e7100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f2e1a7d4d00000000000000000000000000000000000000000000000000000000815260048101829052479073c02aaa39b223fe8d0a0e5c4f27ead9083c756cc290632e1a7d4d90602401600060405180830381600087803b158015610e3557600080fd5b505af1158015610e49573d6000803e3d6000fd5b505050504793507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166312a536238286610e989190611a35565b886040518363ffffffff1660e01b8152600401610eb791815260200190565b6000604051808303818588803b158015610ed057600080fd5b505af1158015610ee4573d6000803e3d6000fd5b50505050505050509392505050565b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff83811660248301526000919083169063dd62ed3e90604401602060405180830381865afa158015610f69573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f8d91906119ff565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff811461101957610fd873ffffffffffffffffffffffffffffffffffffffff8316846000611279565b61101973ffffffffffffffffffffffffffffffffffffffff8316847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611279565b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000008116602483015283169063dd62ed3e90604401602060405180830381865afa1580156110ab573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110cf91906119ff565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff811461119b5761113a73ffffffffffffffffffffffffffffffffffffffff83167f00000000000000000000000000000000000000000000000000000000000000006000611279565b61119b73ffffffffffffffffffffffffffffffffffffffff83167f00000000000000000000000000000000000000000000000000000000000000007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611279565b6040517f095ea7b300000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000811660048301527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff602483015284169063095ea7b3906044016020604051808303816000875af115801561124f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112739190611a73565b50505050565b80158061131957506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa1580156112f3573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061131791906119ff565b155b6113aa576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e63650000000000000000000060648201526084015b60405180910390fd5b6040805173ffffffffffffffffffffffffffffffffffffffff8416602482015260448082018490528251808303909101815260649091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f095ea7b30000000000000000000000000000000000000000000000000000000017905261143790849061143c565b505050565b600061149e826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166115489092919063ffffffff16565b80519091501561143757808060200190518101906114bc9190611a73565b611437576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f7420737563636565640000000000000000000000000000000000000000000060648201526084016113a1565b60606115578484600085611561565b90505b9392505050565b6060824710156115f3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c000000000000000000000000000000000000000000000000000060648201526084016113a1565b73ffffffffffffffffffffffffffffffffffffffff85163b611671576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016113a1565b6000808673ffffffffffffffffffffffffffffffffffffffff16858760405161169a9190611ac1565b60006040518083038185875af1925050503d80600081146116d7576040519150601f19603f3d011682016040523d82523d6000602084013e6116dc565b606091505b50915091506116ec8282866116f7565b979650505050505050565b6060831561170657508161155a565b8251156117165782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113a19190611add565b73ffffffffffffffffffffffffffffffffffffffff8116811461176c57600080fd5b50565b60006060828403121561178157600080fd5b6040516060810181811067ffffffffffffffff821117156117cb577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040528235815290508060208301356117e38161174a565b60208201526040830135600481106117fa57600080fd5b6040919091015292915050565b803567ffffffffffffffff8116811461181f57600080fd5b919050565b600080600080600080600080610200898b03121561184157600080fd5b61184b8a8a61176f565b975061185a8a60608b0161176f565b96506118698a60c08b0161176f565b95506118798a6101208b0161176f565b945061018089013593506101a089013592506118986101c08a01611807565b91506101e08901356118a98161174a565b809150509295985092959890939650565b6000602082840312156118cc57600080fd5b813561155a8161174a565b6000606082840312156118e957600080fd5b50919050565b6000806000806000806101c0878903121561190957600080fd5b61191388886118d7565b955061192288606089016118d7565b94506119318860c089016118d7565b93506119418861012089016118d7565b925061018087013591506119586101a08801611807565b90509295509295509295565b60008060008060006101a0868803121561197d57600080fd5b61198787876118d7565b945061199687606088016118d7565b93506119a58760c088016118d7565b92506119b58761012088016118d7565b91506119c46101808701611807565b90509295509295909350565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b600060208284031215611a1157600080fd5b5051919050565b600060208284031215611a2a57600080fd5b815161155a8161174a565b600082821015611a6e577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b500390565b600060208284031215611a8557600080fd5b8151801515811461155a57600080fd5b60005b83811015611ab0578181015183820152602001611a98565b838111156112735750506000910152565b60008251611ad3818460208701611a95565b9190910192915050565b6020815260008251806020840152611afc816040850160208701611a95565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016919091016040019291505056fea2646970667358221220aa208c22544e7270371f31fb82c783026699e94464d47b94dea066efa523f68764736f6c634300080a0033";

type YearnBridgeConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: YearnBridgeConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class YearnBridge__factory extends ContractFactory {
  constructor(...args: YearnBridgeConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _rollupProcessor: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<YearnBridge> {
    return super.deploy(
      _rollupProcessor,
      overrides || {}
    ) as Promise<YearnBridge>;
  }
  override getDeployTransaction(
    _rollupProcessor: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_rollupProcessor, overrides || {});
  }
  override attach(address: string): YearnBridge {
    return super.attach(address) as YearnBridge;
  }
  override connect(signer: Signer): YearnBridge__factory {
    return super.connect(signer) as YearnBridge__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): YearnBridgeInterface {
    return new utils.Interface(_abi) as YearnBridgeInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): YearnBridge {
    return new Contract(address, _abi, signerOrProvider) as YearnBridge;
  }
}
