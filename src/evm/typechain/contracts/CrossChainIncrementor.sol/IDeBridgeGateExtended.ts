/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export declare namespace IDeBridgeGate {
  export type ChainSupportInfoStruct = {
    fixedNativeFee: PromiseOrValue<BigNumberish>;
    isSupported: PromiseOrValue<boolean>;
    transferFeeBps: PromiseOrValue<BigNumberish>;
  };

  export type ChainSupportInfoStructOutput = [BigNumber, boolean, number] & {
    fixedNativeFee: BigNumber;
    isSupported: boolean;
    transferFeeBps: number;
  };

  export type FeeParamsStruct = {
    receivedAmount: PromiseOrValue<BigNumberish>;
    fixFee: PromiseOrValue<BigNumberish>;
    transferFee: PromiseOrValue<BigNumberish>;
    useAssetFee: PromiseOrValue<boolean>;
    isNativeToken: PromiseOrValue<boolean>;
  };

  export type FeeParamsStructOutput = [
    BigNumber,
    BigNumber,
    BigNumber,
    boolean,
    boolean
  ] & {
    receivedAmount: BigNumber;
    fixFee: BigNumber;
    transferFee: BigNumber;
    useAssetFee: boolean;
    isNativeToken: boolean;
  };
}

export interface IDeBridgeGateExtendedInterface extends utils.Interface {
  functions: {
    "claim(bytes32,uint256,uint256,address,uint256,bytes,bytes)": FunctionFragment;
    "flash(address,address,uint256,bytes)": FunctionFragment;
    "getDebridgeChainAssetFixedFee(bytes32,uint256)": FunctionFragment;
    "getDefiAvaliableReserves(address)": FunctionFragment;
    "getNativeInfo(address)": FunctionFragment;
    "globalFixedNativeFee()": FunctionFragment;
    "isSubmissionUsed(bytes32)": FunctionFragment;
    "requestReserves(address,uint256)": FunctionFragment;
    "returnReserves(address,uint256)": FunctionFragment;
    "send(address,uint256,uint256,bytes,bytes,bool,uint32,bytes)": FunctionFragment;
    "withdrawFee(bytes32)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "claim"
      | "flash"
      | "getDebridgeChainAssetFixedFee"
      | "getDefiAvaliableReserves"
      | "getNativeInfo"
      | "globalFixedNativeFee"
      | "isSubmissionUsed"
      | "requestReserves"
      | "returnReserves"
      | "send"
      | "withdrawFee"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "claim",
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "flash",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getDebridgeChainAssetFixedFee",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getDefiAvaliableReserves",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getNativeInfo",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "globalFixedNativeFee",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "isSubmissionUsed",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "requestReserves",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "returnReserves",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "send",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<boolean>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawFee",
    values: [PromiseOrValue<BytesLike>]
  ): string;

  decodeFunctionResult(functionFragment: "claim", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "flash", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getDebridgeChainAssetFixedFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getDefiAvaliableReserves",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getNativeInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "globalFixedNativeFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isSubmissionUsed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "requestReserves",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "returnReserves",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "send", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdrawFee",
    data: BytesLike
  ): Result;

  events: {
    "AutoRequestExecuted(bytes32,bool,address)": EventFragment;
    "Blocked(bytes32)": EventFragment;
    "CallProxyUpdated(address)": EventFragment;
    "ChainSupportUpdated(uint256,bool,bool)": EventFragment;
    "ChainsSupportUpdated(uint256,tuple,bool)": EventFragment;
    "Claimed(bytes32,bytes32,uint256,address,uint256,uint256,bytes,bool)": EventFragment;
    "FixedNativeFeeAutoUpdated(uint256)": EventFragment;
    "FixedNativeFeeUpdated(uint256,uint256)": EventFragment;
    "Flash(address,address,address,uint256,uint256)": EventFragment;
    "MonitoringClaimEvent(bytes32,uint256,uint256)": EventFragment;
    "MonitoringSendEvent(bytes32,uint256,uint256,uint256)": EventFragment;
    "PairAdded(bytes32,address,bytes,uint256,uint256,uint16)": EventFragment;
    "Sent(bytes32,bytes32,uint256,bytes,uint256,uint256,uint32,tuple,bytes,address)": EventFragment;
    "Unblocked(bytes32)": EventFragment;
    "WithdrawnFee(bytes32,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AutoRequestExecuted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Blocked"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "CallProxyUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ChainSupportUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ChainsSupportUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Claimed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "FixedNativeFeeAutoUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "FixedNativeFeeUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Flash"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MonitoringClaimEvent"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MonitoringSendEvent"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PairAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Sent"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Unblocked"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "WithdrawnFee"): EventFragment;
}

export interface AutoRequestExecutedEventObject {
  submissionId: string;
  success: boolean;
  callProxy: string;
}
export type AutoRequestExecutedEvent = TypedEvent<
  [string, boolean, string],
  AutoRequestExecutedEventObject
>;

export type AutoRequestExecutedEventFilter =
  TypedEventFilter<AutoRequestExecutedEvent>;

export interface BlockedEventObject {
  submissionId: string;
}
export type BlockedEvent = TypedEvent<[string], BlockedEventObject>;

export type BlockedEventFilter = TypedEventFilter<BlockedEvent>;

export interface CallProxyUpdatedEventObject {
  callProxy: string;
}
export type CallProxyUpdatedEvent = TypedEvent<
  [string],
  CallProxyUpdatedEventObject
>;

export type CallProxyUpdatedEventFilter =
  TypedEventFilter<CallProxyUpdatedEvent>;

export interface ChainSupportUpdatedEventObject {
  chainId: BigNumber;
  isSupported: boolean;
  isChainFrom: boolean;
}
export type ChainSupportUpdatedEvent = TypedEvent<
  [BigNumber, boolean, boolean],
  ChainSupportUpdatedEventObject
>;

export type ChainSupportUpdatedEventFilter =
  TypedEventFilter<ChainSupportUpdatedEvent>;

export interface ChainsSupportUpdatedEventObject {
  chainIds: BigNumber;
  chainSupportInfo: IDeBridgeGate.ChainSupportInfoStructOutput;
  isChainFrom: boolean;
}
export type ChainsSupportUpdatedEvent = TypedEvent<
  [BigNumber, IDeBridgeGate.ChainSupportInfoStructOutput, boolean],
  ChainsSupportUpdatedEventObject
>;

export type ChainsSupportUpdatedEventFilter =
  TypedEventFilter<ChainsSupportUpdatedEvent>;

export interface ClaimedEventObject {
  submissionId: string;
  debridgeId: string;
  amount: BigNumber;
  receiver: string;
  nonce: BigNumber;
  chainIdFrom: BigNumber;
  autoParams: string;
  isNativeToken: boolean;
}
export type ClaimedEvent = TypedEvent<
  [string, string, BigNumber, string, BigNumber, BigNumber, string, boolean],
  ClaimedEventObject
>;

export type ClaimedEventFilter = TypedEventFilter<ClaimedEvent>;

export interface FixedNativeFeeAutoUpdatedEventObject {
  globalFixedNativeFee: BigNumber;
}
export type FixedNativeFeeAutoUpdatedEvent = TypedEvent<
  [BigNumber],
  FixedNativeFeeAutoUpdatedEventObject
>;

export type FixedNativeFeeAutoUpdatedEventFilter =
  TypedEventFilter<FixedNativeFeeAutoUpdatedEvent>;

export interface FixedNativeFeeUpdatedEventObject {
  globalFixedNativeFee: BigNumber;
  globalTransferFeeBps: BigNumber;
}
export type FixedNativeFeeUpdatedEvent = TypedEvent<
  [BigNumber, BigNumber],
  FixedNativeFeeUpdatedEventObject
>;

export type FixedNativeFeeUpdatedEventFilter =
  TypedEventFilter<FixedNativeFeeUpdatedEvent>;

export interface FlashEventObject {
  sender: string;
  tokenAddress: string;
  receiver: string;
  amount: BigNumber;
  paid: BigNumber;
}
export type FlashEvent = TypedEvent<
  [string, string, string, BigNumber, BigNumber],
  FlashEventObject
>;

export type FlashEventFilter = TypedEventFilter<FlashEvent>;

export interface MonitoringClaimEventEventObject {
  submissionId: string;
  lockedOrMintedAmount: BigNumber;
  totalSupply: BigNumber;
}
export type MonitoringClaimEventEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  MonitoringClaimEventEventObject
>;

export type MonitoringClaimEventEventFilter =
  TypedEventFilter<MonitoringClaimEventEvent>;

export interface MonitoringSendEventEventObject {
  submissionId: string;
  nonce: BigNumber;
  lockedOrMintedAmount: BigNumber;
  totalSupply: BigNumber;
}
export type MonitoringSendEventEvent = TypedEvent<
  [string, BigNumber, BigNumber, BigNumber],
  MonitoringSendEventEventObject
>;

export type MonitoringSendEventEventFilter =
  TypedEventFilter<MonitoringSendEventEvent>;

export interface PairAddedEventObject {
  debridgeId: string;
  tokenAddress: string;
  nativeAddress: string;
  nativeChainId: BigNumber;
  maxAmount: BigNumber;
  minReservesBps: number;
}
export type PairAddedEvent = TypedEvent<
  [string, string, string, BigNumber, BigNumber, number],
  PairAddedEventObject
>;

export type PairAddedEventFilter = TypedEventFilter<PairAddedEvent>;

export interface SentEventObject {
  submissionId: string;
  debridgeId: string;
  amount: BigNumber;
  receiver: string;
  nonce: BigNumber;
  chainIdTo: BigNumber;
  referralCode: number;
  feeParams: IDeBridgeGate.FeeParamsStructOutput;
  autoParams: string;
  nativeSender: string;
}
export type SentEvent = TypedEvent<
  [
    string,
    string,
    BigNumber,
    string,
    BigNumber,
    BigNumber,
    number,
    IDeBridgeGate.FeeParamsStructOutput,
    string,
    string
  ],
  SentEventObject
>;

export type SentEventFilter = TypedEventFilter<SentEvent>;

export interface UnblockedEventObject {
  submissionId: string;
}
export type UnblockedEvent = TypedEvent<[string], UnblockedEventObject>;

export type UnblockedEventFilter = TypedEventFilter<UnblockedEvent>;

export interface WithdrawnFeeEventObject {
  debridgeId: string;
  fee: BigNumber;
}
export type WithdrawnFeeEvent = TypedEvent<
  [string, BigNumber],
  WithdrawnFeeEventObject
>;

export type WithdrawnFeeEventFilter = TypedEventFilter<WithdrawnFeeEvent>;

export interface IDeBridgeGateExtended extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IDeBridgeGateExtendedInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    claim(
      _debridgeId: PromiseOrValue<BytesLike>,
      _amount: PromiseOrValue<BigNumberish>,
      _chainIdFrom: PromiseOrValue<BigNumberish>,
      _receiver: PromiseOrValue<string>,
      _nonce: PromiseOrValue<BigNumberish>,
      _signatures: PromiseOrValue<BytesLike>,
      _autoParams: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    flash(
      _tokenAddress: PromiseOrValue<string>,
      _receiver: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      _data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getDebridgeChainAssetFixedFee(
      _debridgeId: PromiseOrValue<BytesLike>,
      _chainId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getDefiAvaliableReserves(
      _tokenAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getNativeInfo(
      token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    globalFixedNativeFee(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    isSubmissionUsed(
      submissionId: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    requestReserves(
      _tokenAddress: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    returnReserves(
      _tokenAddress: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    send(
      _tokenAddress: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      _chainIdTo: PromiseOrValue<BigNumberish>,
      _receiver: PromiseOrValue<BytesLike>,
      _permit: PromiseOrValue<BytesLike>,
      _useAssetFee: PromiseOrValue<boolean>,
      _referralCode: PromiseOrValue<BigNumberish>,
      _autoParams: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    withdrawFee(
      _debridgeId: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  claim(
    _debridgeId: PromiseOrValue<BytesLike>,
    _amount: PromiseOrValue<BigNumberish>,
    _chainIdFrom: PromiseOrValue<BigNumberish>,
    _receiver: PromiseOrValue<string>,
    _nonce: PromiseOrValue<BigNumberish>,
    _signatures: PromiseOrValue<BytesLike>,
    _autoParams: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  flash(
    _tokenAddress: PromiseOrValue<string>,
    _receiver: PromiseOrValue<string>,
    _amount: PromiseOrValue<BigNumberish>,
    _data: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getDebridgeChainAssetFixedFee(
    _debridgeId: PromiseOrValue<BytesLike>,
    _chainId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getDefiAvaliableReserves(
    _tokenAddress: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getNativeInfo(
    token: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  globalFixedNativeFee(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  isSubmissionUsed(
    submissionId: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  requestReserves(
    _tokenAddress: PromiseOrValue<string>,
    _amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  returnReserves(
    _tokenAddress: PromiseOrValue<string>,
    _amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  send(
    _tokenAddress: PromiseOrValue<string>,
    _amount: PromiseOrValue<BigNumberish>,
    _chainIdTo: PromiseOrValue<BigNumberish>,
    _receiver: PromiseOrValue<BytesLike>,
    _permit: PromiseOrValue<BytesLike>,
    _useAssetFee: PromiseOrValue<boolean>,
    _referralCode: PromiseOrValue<BigNumberish>,
    _autoParams: PromiseOrValue<BytesLike>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  withdrawFee(
    _debridgeId: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    claim(
      _debridgeId: PromiseOrValue<BytesLike>,
      _amount: PromiseOrValue<BigNumberish>,
      _chainIdFrom: PromiseOrValue<BigNumberish>,
      _receiver: PromiseOrValue<string>,
      _nonce: PromiseOrValue<BigNumberish>,
      _signatures: PromiseOrValue<BytesLike>,
      _autoParams: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    flash(
      _tokenAddress: PromiseOrValue<string>,
      _receiver: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      _data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    getDebridgeChainAssetFixedFee(
      _debridgeId: PromiseOrValue<BytesLike>,
      _chainId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getDefiAvaliableReserves(
      _tokenAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getNativeInfo(
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string] & { nativeChainId: BigNumber; nativeAddress: string }
    >;

    globalFixedNativeFee(overrides?: CallOverrides): Promise<BigNumber>;

    isSubmissionUsed(
      submissionId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    requestReserves(
      _tokenAddress: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    returnReserves(
      _tokenAddress: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    send(
      _tokenAddress: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      _chainIdTo: PromiseOrValue<BigNumberish>,
      _receiver: PromiseOrValue<BytesLike>,
      _permit: PromiseOrValue<BytesLike>,
      _useAssetFee: PromiseOrValue<boolean>,
      _referralCode: PromiseOrValue<BigNumberish>,
      _autoParams: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    withdrawFee(
      _debridgeId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "AutoRequestExecuted(bytes32,bool,address)"(
      submissionId?: null,
      success?: PromiseOrValue<boolean> | null,
      callProxy?: null
    ): AutoRequestExecutedEventFilter;
    AutoRequestExecuted(
      submissionId?: null,
      success?: PromiseOrValue<boolean> | null,
      callProxy?: null
    ): AutoRequestExecutedEventFilter;

    "Blocked(bytes32)"(submissionId?: null): BlockedEventFilter;
    Blocked(submissionId?: null): BlockedEventFilter;

    "CallProxyUpdated(address)"(callProxy?: null): CallProxyUpdatedEventFilter;
    CallProxyUpdated(callProxy?: null): CallProxyUpdatedEventFilter;

    "ChainSupportUpdated(uint256,bool,bool)"(
      chainId?: null,
      isSupported?: null,
      isChainFrom?: null
    ): ChainSupportUpdatedEventFilter;
    ChainSupportUpdated(
      chainId?: null,
      isSupported?: null,
      isChainFrom?: null
    ): ChainSupportUpdatedEventFilter;

    "ChainsSupportUpdated(uint256,tuple,bool)"(
      chainIds?: null,
      chainSupportInfo?: null,
      isChainFrom?: null
    ): ChainsSupportUpdatedEventFilter;
    ChainsSupportUpdated(
      chainIds?: null,
      chainSupportInfo?: null,
      isChainFrom?: null
    ): ChainsSupportUpdatedEventFilter;

    "Claimed(bytes32,bytes32,uint256,address,uint256,uint256,bytes,bool)"(
      submissionId?: null,
      debridgeId?: PromiseOrValue<BytesLike> | null,
      amount?: null,
      receiver?: PromiseOrValue<string> | null,
      nonce?: null,
      chainIdFrom?: PromiseOrValue<BigNumberish> | null,
      autoParams?: null,
      isNativeToken?: null
    ): ClaimedEventFilter;
    Claimed(
      submissionId?: null,
      debridgeId?: PromiseOrValue<BytesLike> | null,
      amount?: null,
      receiver?: PromiseOrValue<string> | null,
      nonce?: null,
      chainIdFrom?: PromiseOrValue<BigNumberish> | null,
      autoParams?: null,
      isNativeToken?: null
    ): ClaimedEventFilter;

    "FixedNativeFeeAutoUpdated(uint256)"(
      globalFixedNativeFee?: null
    ): FixedNativeFeeAutoUpdatedEventFilter;
    FixedNativeFeeAutoUpdated(
      globalFixedNativeFee?: null
    ): FixedNativeFeeAutoUpdatedEventFilter;

    "FixedNativeFeeUpdated(uint256,uint256)"(
      globalFixedNativeFee?: null,
      globalTransferFeeBps?: null
    ): FixedNativeFeeUpdatedEventFilter;
    FixedNativeFeeUpdated(
      globalFixedNativeFee?: null,
      globalTransferFeeBps?: null
    ): FixedNativeFeeUpdatedEventFilter;

    "Flash(address,address,address,uint256,uint256)"(
      sender?: null,
      tokenAddress?: PromiseOrValue<string> | null,
      receiver?: PromiseOrValue<string> | null,
      amount?: null,
      paid?: null
    ): FlashEventFilter;
    Flash(
      sender?: null,
      tokenAddress?: PromiseOrValue<string> | null,
      receiver?: PromiseOrValue<string> | null,
      amount?: null,
      paid?: null
    ): FlashEventFilter;

    "MonitoringClaimEvent(bytes32,uint256,uint256)"(
      submissionId?: null,
      lockedOrMintedAmount?: null,
      totalSupply?: null
    ): MonitoringClaimEventEventFilter;
    MonitoringClaimEvent(
      submissionId?: null,
      lockedOrMintedAmount?: null,
      totalSupply?: null
    ): MonitoringClaimEventEventFilter;

    "MonitoringSendEvent(bytes32,uint256,uint256,uint256)"(
      submissionId?: null,
      nonce?: null,
      lockedOrMintedAmount?: null,
      totalSupply?: null
    ): MonitoringSendEventEventFilter;
    MonitoringSendEvent(
      submissionId?: null,
      nonce?: null,
      lockedOrMintedAmount?: null,
      totalSupply?: null
    ): MonitoringSendEventEventFilter;

    "PairAdded(bytes32,address,bytes,uint256,uint256,uint16)"(
      debridgeId?: null,
      tokenAddress?: null,
      nativeAddress?: null,
      nativeChainId?: PromiseOrValue<BigNumberish> | null,
      maxAmount?: null,
      minReservesBps?: null
    ): PairAddedEventFilter;
    PairAdded(
      debridgeId?: null,
      tokenAddress?: null,
      nativeAddress?: null,
      nativeChainId?: PromiseOrValue<BigNumberish> | null,
      maxAmount?: null,
      minReservesBps?: null
    ): PairAddedEventFilter;

    "Sent(bytes32,bytes32,uint256,bytes,uint256,uint256,uint32,tuple,bytes,address)"(
      submissionId?: null,
      debridgeId?: PromiseOrValue<BytesLike> | null,
      amount?: null,
      receiver?: null,
      nonce?: null,
      chainIdTo?: PromiseOrValue<BigNumberish> | null,
      referralCode?: null,
      feeParams?: null,
      autoParams?: null,
      nativeSender?: null
    ): SentEventFilter;
    Sent(
      submissionId?: null,
      debridgeId?: PromiseOrValue<BytesLike> | null,
      amount?: null,
      receiver?: null,
      nonce?: null,
      chainIdTo?: PromiseOrValue<BigNumberish> | null,
      referralCode?: null,
      feeParams?: null,
      autoParams?: null,
      nativeSender?: null
    ): SentEventFilter;

    "Unblocked(bytes32)"(submissionId?: null): UnblockedEventFilter;
    Unblocked(submissionId?: null): UnblockedEventFilter;

    "WithdrawnFee(bytes32,uint256)"(
      debridgeId?: null,
      fee?: null
    ): WithdrawnFeeEventFilter;
    WithdrawnFee(debridgeId?: null, fee?: null): WithdrawnFeeEventFilter;
  };

  estimateGas: {
    claim(
      _debridgeId: PromiseOrValue<BytesLike>,
      _amount: PromiseOrValue<BigNumberish>,
      _chainIdFrom: PromiseOrValue<BigNumberish>,
      _receiver: PromiseOrValue<string>,
      _nonce: PromiseOrValue<BigNumberish>,
      _signatures: PromiseOrValue<BytesLike>,
      _autoParams: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    flash(
      _tokenAddress: PromiseOrValue<string>,
      _receiver: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      _data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getDebridgeChainAssetFixedFee(
      _debridgeId: PromiseOrValue<BytesLike>,
      _chainId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getDefiAvaliableReserves(
      _tokenAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getNativeInfo(
      token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    globalFixedNativeFee(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    isSubmissionUsed(
      submissionId: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    requestReserves(
      _tokenAddress: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    returnReserves(
      _tokenAddress: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    send(
      _tokenAddress: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      _chainIdTo: PromiseOrValue<BigNumberish>,
      _receiver: PromiseOrValue<BytesLike>,
      _permit: PromiseOrValue<BytesLike>,
      _useAssetFee: PromiseOrValue<boolean>,
      _referralCode: PromiseOrValue<BigNumberish>,
      _autoParams: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    withdrawFee(
      _debridgeId: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    claim(
      _debridgeId: PromiseOrValue<BytesLike>,
      _amount: PromiseOrValue<BigNumberish>,
      _chainIdFrom: PromiseOrValue<BigNumberish>,
      _receiver: PromiseOrValue<string>,
      _nonce: PromiseOrValue<BigNumberish>,
      _signatures: PromiseOrValue<BytesLike>,
      _autoParams: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    flash(
      _tokenAddress: PromiseOrValue<string>,
      _receiver: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      _data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getDebridgeChainAssetFixedFee(
      _debridgeId: PromiseOrValue<BytesLike>,
      _chainId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getDefiAvaliableReserves(
      _tokenAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getNativeInfo(
      token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    globalFixedNativeFee(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    isSubmissionUsed(
      submissionId: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    requestReserves(
      _tokenAddress: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    returnReserves(
      _tokenAddress: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    send(
      _tokenAddress: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      _chainIdTo: PromiseOrValue<BigNumberish>,
      _receiver: PromiseOrValue<BytesLike>,
      _permit: PromiseOrValue<BytesLike>,
      _useAssetFee: PromiseOrValue<boolean>,
      _referralCode: PromiseOrValue<BigNumberish>,
      _autoParams: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    withdrawFee(
      _debridgeId: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
