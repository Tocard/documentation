# Class: MessageID

## Constructors

### constructor

• **new MessageID**(`streamId`, `streamPartition`, `timestamp`, `sequenceNumber`, `publisherId`, `msgChainId`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `streamId` | [`StreamID`](../API Reference#streamid) |
| `streamPartition` | `number` |
| `timestamp` | `number` |
| `sequenceNumber` | `number` |
| `publisherId` | [`EthereumAddress`](../API Reference#ethereumaddress) |
| `msgChainId` | `string` |

## Properties

### msgChainId

• **msgChainId**: `string`

___

### publisherId

• **publisherId**: [`EthereumAddress`](../API Reference#ethereumaddress)

___

### sequenceNumber

• **sequenceNumber**: `number`

___

### streamId

• **streamId**: [`StreamID`](../API Reference#streamid)

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

▸ **getStreamPartID**(): [`StreamPartID`](../API Reference#streampartid)

#### Returns

[`StreamPartID`](../API Reference#streampartid)

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
