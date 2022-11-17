/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { Script, ScriptInterface } from "../Script.js";

const _abi = [
  {
    inputs: [],
    name: "IS_SCRIPT",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class Script__factory {
  static readonly abi = _abi;
  static createInterface(): ScriptInterface {
    return new utils.Interface(_abi) as ScriptInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Script {
    return new Contract(address, _abi, signerOrProvider) as Script;
  }
}
