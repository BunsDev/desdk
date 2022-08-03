/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  CrossChainIncrementor,
  CrossChainIncrementorInterface,
} from "../../contracts/CrossChainIncrementor";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IDeBridgeGate",
        name: "deBridgeGate_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "crossChainCounterResidenceChainID_",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "crossChainCounterResidenceAddress_",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "deBridgeGate",
    outputs: [
      {
        internalType: "contract IDeBridgeGate",
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
        internalType: "uint8",
        name: "_amount",
        type: "uint8",
      },
    ],
    name: "increment",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8[]",
        name: "_amounts",
        type: "uint8[]",
      },
    ],
    name: "incrementMulti",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "_amount",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "_executionFee",
        type: "uint256",
      },
    ],
    name: "incrementWithIncludedGas",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162000d0938038062000d0983398181016040528101906200003791906200010d565b826000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508160018190555080600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050506200020e565b600081519050620000d981620001c0565b92915050565b600081519050620000f081620001da565b92915050565b6000815190506200010781620001f4565b92915050565b600080600060608486031215620001295762000128620001bb565b5b60006200013986828701620000df565b93505060206200014c86828701620000f6565b92505060406200015f86828701620000c8565b9150509250925092565b6000620001768262000191565b9050919050565b60006200018a8262000169565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600080fd5b620001cb8162000169565b8114620001d757600080fd5b50565b620001e5816200017d565b8114620001f157600080fd5b50565b620001ff81620001b1565b81146200020b57600080fd5b50565b610aeb806200021e6000396000f3fe6080604052600436106100435760003560e01c8063973897791461004f578063a78730a51461006b578063ca777fbf14610087578063d6b46330146100b25761004a565b3661004a57005b600080fd5b610069600480360381019061006491906104a1565b6100ce565b005b61008560048036038101906100809190610517565b610131565b005b34801561009357600080fd5b5061009c61014e565b6040516100a99190610782565b60405180910390f35b6100cc60048036038101906100c791906104ea565b610172565b005b60005b81518160ff16101561012d576000828260ff16815181106100f5576100f46109f4565b5b60200260200101519050600061010b823361018f565b9050610118816000610211565b5050808061012590610977565b9150506100d1565b5050565b600061013d833361018f565b90506101498183610211565b505050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600061017e823361018f565b905061018b816000610211565b5050565b606063cca5afd460e01b83836040516024016101ac9291906107bf565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050905092915050565b6102196103b1565b81816000018181525050610234816020015160026001610389565b81602001818152505061024d8160200151600180610389565b8160200181815250508281606001819052503360405160200161027091906106d6565b604051602081830303815290604052816040018190525060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663be29747634600034600154600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166040516020016102fd91906106d6565b6040516020818303038152906040526001600089604051602001610321919061079d565b6040516020818303038152906040526040518963ffffffff1660e01b815260040161035297969594939291906106f1565b6000604051808303818588803b15801561036b57600080fd5b505af115801561037f573d6000803e3d6000fd5b5050505050505050565b6000811561039f57826001901b841790506103aa565b826001901b19841690505b9392505050565b6040518060800160405280600081526020016000815260200160608152602001606081525090565b60006103ec6103e78461080d565b6107e8565b9050808382526020820190508285602086028201111561040f5761040e610a57565b5b60005b8581101561043f5781610425888261048c565b845260208401935060208301925050600181019050610412565b5050509392505050565b600082601f83011261045e5761045d610a52565b5b813561046e8482602086016103d9565b91505092915050565b60008135905061048681610a87565b92915050565b60008135905061049b81610a9e565b92915050565b6000602082840312156104b7576104b6610a61565b5b600082013567ffffffffffffffff8111156104d5576104d4610a5c565b5b6104e184828501610449565b91505092915050565b600060208284031215610500576104ff610a61565b5b600061050e8482850161048c565b91505092915050565b6000806040838503121561052e5761052d610a61565b5b600061053c8582860161048c565b925050602061054d85828601610477565b9150509250929050565b61056081610866565b82525050565b61057761057282610866565b6109a1565b82525050565b61058681610878565b82525050565b600061059782610839565b6105a18185610844565b93506105b1818560208601610913565b6105ba81610a66565b840191505092915050565b60006105d082610839565b6105da8185610855565b93506105ea818560208601610913565b6105f381610a66565b840191505092915050565b610607816108cb565b82525050565b610616816108dd565b82525050565b6000610629600083610855565b915061063482610a84565b600082019050919050565b600060808301600083015161065760008601826106a9565b50602083015161066a60208601826106a9565b5060408301518482036040860152610682828261058c565b9150506060830151848203606086015261069c828261058c565b9150508091505092915050565b6106b2816108a4565b82525050565b6106c1816108a4565b82525050565b6106d0816108be565b82525050565b60006106e28284610566565b60148201915081905092915050565b600061010082019050610707600083018a610557565b61071460208301896106b8565b61072160408301886106b8565b818103606083015261073381876105c5565b905081810360808301526107468161061c565b905061075560a083018661057d565b61076260c083018561060d565b81810360e083015261077481846105c5565b905098975050505050505050565b600060208201905061079760008301846105fe565b92915050565b600060208201905081810360008301526107b7818461063f565b905092915050565b60006040820190506107d460008301856106c7565b6107e16020830184610557565b9392505050565b60006107f2610803565b90506107fe8282610946565b919050565b6000604051905090565b600067ffffffffffffffff82111561082857610827610a23565b5b602082029050602081019050919050565b600081519050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600061087182610884565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600063ffffffff82169050919050565b600060ff82169050919050565b60006108d6826108ef565b9050919050565b60006108e8826108ae565b9050919050565b60006108fa82610901565b9050919050565b600061090c82610884565b9050919050565b60005b83811015610931578082015181840152602081019050610916565b83811115610940576000848401525b50505050565b61094f82610a66565b810181811067ffffffffffffffff8211171561096e5761096d610a23565b5b80604052505050565b6000610982826108be565b915060ff821415610996576109956109c5565b5b600182019050919050565b60006109ac826109b3565b9050919050565b60006109be82610a77565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b60008160601b9050919050565b50565b610a90816108a4565b8114610a9b57600080fd5b50565b610aa7816108be565b8114610ab257600080fd5b5056fea26469706673582212201b6f879d257a1f26f87e36e720f7a3b48fa1b95f11c20cd5fa6a8d304d4ebf0864736f6c63430008070033";

type CrossChainIncrementorConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CrossChainIncrementorConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CrossChainIncrementor__factory extends ContractFactory {
  constructor(...args: CrossChainIncrementorConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    deBridgeGate_: PromiseOrValue<string>,
    crossChainCounterResidenceChainID_: PromiseOrValue<BigNumberish>,
    crossChainCounterResidenceAddress_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<CrossChainIncrementor> {
    return super.deploy(
      deBridgeGate_,
      crossChainCounterResidenceChainID_,
      crossChainCounterResidenceAddress_,
      overrides || {}
    ) as Promise<CrossChainIncrementor>;
  }
  override getDeployTransaction(
    deBridgeGate_: PromiseOrValue<string>,
    crossChainCounterResidenceChainID_: PromiseOrValue<BigNumberish>,
    crossChainCounterResidenceAddress_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      deBridgeGate_,
      crossChainCounterResidenceChainID_,
      crossChainCounterResidenceAddress_,
      overrides || {}
    );
  }
  override attach(address: string): CrossChainIncrementor {
    return super.attach(address) as CrossChainIncrementor;
  }
  override connect(signer: Signer): CrossChainIncrementor__factory {
    return super.connect(signer) as CrossChainIncrementor__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CrossChainIncrementorInterface {
    return new utils.Interface(_abi) as CrossChainIncrementorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CrossChainIncrementor {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as CrossChainIncrementor;
  }
}
