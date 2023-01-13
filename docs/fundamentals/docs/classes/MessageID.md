[Streamr Client - v7.2.1](../README.md) / MessageID

# Class: MessageID

## Table of contents

### Constructors

- [constructor](MessageID.md#constructor)

### Properties

- [msgChainId](MessageID.md#msgchainid)
- [publisherId](MessageID.md#publisherid)
- [sequenceNumber](MessageID.md#sequencenumber)
- [streamId](MessageID.md#streamid)
- [streamPartition](MessageID.md#streampartition)
- [timestamp](MessageID.md#timestamp)

### Methods

- [clone](MessageID.md#clone)
- [getStreamPartID](MessageID.md#getstreampartid)
- [serialize](MessageID.md#serialize)
- [toArray](MessageID.md#toarray)
- [toMessageRef](MessageID.md#tomessageref)
- [fromArray](MessageID.md#fromarray)

## Constructors

### constructor

• **new MessageID**(`streamId`, `streamPartition`, `timestamp`, `sequenceNumber`, `publisherId`, `msgChainId`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `streamId` | [`StreamID`](../README.md#streamid) |
| `streamPartition` | `number` |
| `timestamp` | `number` |
| `sequenceNumber` | `number` |
| `publisherId` | [`EthereumAddress`](../README.md#ethereumaddress) |
| `msgChainId` | `string` |

## Properties

### msgChainId

• **msgChainId**: `string`

___

### publisherId

• **publisherId**: [`EthereumAddress`](../README.md#ethereumaddress)

___

### sequenceNumber

• **sequenceNumber**: `number`

___

### streamId

• **streamId**: [`StreamID`](../README.md#streamid)

___

### streamPartition

• **streamPartition**: `number`

___

### timestamp

• **timestamp**: `number`

## Methods

### clone

▸ **clone**(): [`MessageID`](MessageID.md)

#### Returns

[`MessageID`](MessageID.md)

___

### getStreamPartID

▸ **getStreamPartID**(): [`StreamPartID`](../README.md#streampartid)

#### Returns

[`StreamPartID`](../README.md#streampartid)

___

### serialize

▸ **serialize**(): `string`

#### Returns

`string`

___

### toArray

▸ **toArray**(): `MessageIDArray`

#### Returns

`MessageIDArray`

___

### toMessageRef

▸ **toMessageRef**(): [`MessageRef`](MessageRef.md)

#### Returns

[`MessageRef`](MessageRef.md)

___

### fromArray

▸ `Static` **fromArray**(`arr`): [`MessageID`](MessageID.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `arr` | `MessageIDArray` |

#### Returns

[`MessageID`](MessageID.md)
