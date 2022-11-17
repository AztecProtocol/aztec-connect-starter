/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common.js";
import type { Deployer, DeployerInterface } from "../Deployer.js";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_bytecode",
        type: "bytes",
      },
    ],
    name: "deploy",
    outputs: [
      {
        internalType: "address",
        name: "deployedAddress",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610232806100206000396000f3fe608060405234801561001057600080fd5b506004361061002a5760003560e01c80627743601461002f575b600080fd5b61004261003d36600461012d565b61006b565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b60008151602083016000f0905073ffffffffffffffffffffffffffffffffffffffff81166100f9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f436f6e7472616374206e6f74206465706c6f7965640000000000000000000000604482015260640160405180910390fd5b919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60006020828403121561013f57600080fd5b813567ffffffffffffffff8082111561015757600080fd5b818401915084601f83011261016b57600080fd5b81358181111561017d5761017d6100fe565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f011681019083821181831017156101c3576101c36100fe565b816040528281528760208487010111156101dc57600080fd5b82602086016020830137600092810160200192909252509594505050505056fea26469706673582212200f0e7368f932337fca4f71d6ea83af635151b13a62b849050195c65a7d29192d64736f6c634300080a0033";

type DeployerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DeployerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Deployer__factory extends ContractFactory {
  constructor(...args: DeployerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Deployer> {
    return super.deploy(overrides || {}) as Promise<Deployer>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Deployer {
    return super.attach(address) as Deployer;
  }
  override connect(signer: Signer): Deployer__factory {
    return super.connect(signer) as Deployer__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DeployerInterface {
    return new utils.Interface(_abi) as DeployerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Deployer {
    return new Contract(address, _abi, signerOrProvider) as Deployer;
  }
}
