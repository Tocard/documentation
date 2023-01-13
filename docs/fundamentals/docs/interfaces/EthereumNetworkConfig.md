[Streamr Client - v7.2.1](../README.md) / EthereumNetworkConfig

# Interface: EthereumNetworkConfig

## Table of contents

### Properties

- [chainId](EthereumNetworkConfig.md#chainid)
- [gasPriceStrategy](EthereumNetworkConfig.md#gaspricestrategy)
- [highGasPriceStrategy](EthereumNetworkConfig.md#highgaspricestrategy)
- [overrides](EthereumNetworkConfig.md#overrides)

## Properties

### chainId

• **chainId**: `number`

___

### gasPriceStrategy

• `Optional` **gasPriceStrategy**: (`estimatedGasPrice`: [`BigNumber`](../classes/BigNumber.md)) => [`BigNumber`](../classes/BigNumber.md)

#### Type declaration

▸ (`estimatedGasPrice`): [`BigNumber`](../classes/BigNumber.md)

**`Deprecated`**

##### Parameters

| Name | Type |
| :------ | :------ |
| `estimatedGasPrice` | [`BigNumber`](../classes/BigNumber.md) |

##### Returns

[`BigNumber`](../classes/BigNumber.md)

___

### highGasPriceStrategy

• `Optional` **highGasPriceStrategy**: `boolean`

___

### overrides

• `Optional` **overrides**: `Overrides`
