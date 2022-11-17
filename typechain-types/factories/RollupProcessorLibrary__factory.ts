/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common.js";
import type {
  RollupProcessorLibrary,
  RollupProcessorLibraryInterface,
} from "../RollupProcessorLibrary.js";

const _abi = [
  {
    inputs: [],
    name: "INVALID_SIGNATURE",
    type: "error",
  },
  {
    inputs: [],
    name: "SIGNATURE_ADDRESS_IS_ZERO",
    type: "error",
  },
  {
    inputs: [],
    name: "SIGNATURE_RECOVERY_FAILED",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "input",
        type: "bytes32",
      },
    ],
    name: "toHexString",
    outputs: [
      {
        internalType: "string",
        name: "result",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x6105d261003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100355760003560e01c8063edb961ff1461003a575b600080fd5b61004d610048366004610510565b610063565b60405161005a9190610529565b60405180910390f35b6060816100cb576040519050604081527f303030303030303030303030303030303030303030303030303030303030303060208201527f3030303030303030303030303030303030303030303030303030303030303030604082015260608101604052919050565b506040517f3030303130323033303430353036303730383039306130623063306430653066607e8201527f3130313131323133313431353136313731383139316131623163316431653166609e8201527f323032313232323332343235323632373238323932613262326332643265326660be8201527f333033313332333333343335333633373338333933613362336333643365336660de8201527f343034313432343334343435343634373438343934613462346334643465346660fe8201527f353035313532353335343535353635373538353935613562356335643565356661011e8201527f363036313632363336343635363636373638363936613662366336643665366661013e8201527f373037313732373337343735373637373738373937613762376337643765376661015e8201527f383038313832383338343835383638373838383938613862386338643865386661017e8201527f393039313932393339343935393639373938393939613962396339643965396661019e8201527f61306131613261336134613561366137613861396161616261636164616561666101be8201527f62306231623262336234623562366237623862396261626262636264626562666101de8201527f63306331633263336334633563366337633863396361636263636364636563666101fe8201527f643064316432643364346435643664376438643964616462646364646465646661021e8201527f653065316532653365346535653665376538653965616562656365646565656661023e8201527f663066316632663366346635663666376638663966616662666366646665666661025e820152606081018260408352600181901b6101fe908116830151601e52600782901c8116830151601c52600f82901c8116830151601a52601782901c8116830151601852601f82901c8116830151601652602782901c8116830151601452602f82901c8116830151601252603782901c8116830151601052603f82901c8116830151600e52604782901c8116830151600c52604f82901c8116830151600a52605782901c8116830151600852605f82901c8116830151600652606782901c8116830151600452606f82901c8116830151600252607782901c16820151600052601e51604084015260801c6104fa82826101fe600182901b8116830151601e52600782901c8116830151601c52600f82901c8116830151601a52601782901c8116830151601852601f82901c8116830151601652602782901c8116830151601452602f82901c8116830151601252603782901c8116830151601052603f82901c8116830151600e52604782901c8116830151600c52604f82901c8116830151600a52605782901c8116830151600852605f82901c8116830151600652606782901c8116830151600452606f82901c811683015160025260779190911c160151600052565b5050601e51602082015260608101604052919050565b60006020828403121561052257600080fd5b5035919050565b600060208083528351808285015260005b818110156105565785810183015185820160400152820161053a565b81811115610568576000604083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01692909201604001939250505056fea2646970667358221220ad0ac65130e734e672de0d23de099e06b5fb45f0f968b8b6693f6cbf9825405064736f6c634300080a0033";

type RollupProcessorLibraryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: RollupProcessorLibraryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class RollupProcessorLibrary__factory extends ContractFactory {
  constructor(...args: RollupProcessorLibraryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<RollupProcessorLibrary> {
    return super.deploy(overrides || {}) as Promise<RollupProcessorLibrary>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): RollupProcessorLibrary {
    return super.attach(address) as RollupProcessorLibrary;
  }
  override connect(signer: Signer): RollupProcessorLibrary__factory {
    return super.connect(signer) as RollupProcessorLibrary__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RollupProcessorLibraryInterface {
    return new utils.Interface(_abi) as RollupProcessorLibraryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RollupProcessorLibrary {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as RollupProcessorLibrary;
  }
}
