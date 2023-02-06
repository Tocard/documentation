# Class: StreamMessage<T\>

## Type parameters

| Name | Type      |
| :--- | :-------- |
| `T`  | `unknown` |

## Constructors

### constructor

• **new StreamMessage**<`T`\>(`«destructured»`)

#### Type parameters

| Name | Type      |
| :--- | :-------- |
| `T`  | `unknown` |

#### Parameters

| Name             | Type                         |
| :--------------- | :--------------------------- |
| `«destructured»` | `StreamMessageOptions`<`T`\> |

## Properties

### contentType

• **contentType**: `JSON`

---

### encryptionType

• **encryptionType**: `EncryptionType`

---

### groupKeyId

• **groupKeyId**: `null` \| `string`

---

### messageId

• **messageId**: [`MessageID`](MessageID.md)

---

### messageType

• **messageType**: `StreamMessageType`

---

### newGroupKey

• **newGroupKey**: `null` \| `EncryptedGroupKey`

---

### parsedContent

• `Optional` **parsedContent**: `T`

---

### prevMsgRef

• **prevMsgRef**: `null` \| [`MessageRef`](MessageRef.md)

---

### serializedContent

• **serializedContent**: `string`

---

### signature

• **signature**: `string`

---

### LATEST_VERSION

▪ `Static` **LATEST_VERSION**: `number`

## Methods

### clone

▸ **clone**(): [`StreamMessage`](StreamMessage.md)<`T`\>

Create a new StreamMessage identical to the passed-in streamMessage.

#### Returns

[`StreamMessage`](StreamMessage.md)<`T`\>

---

### getContent

▸ **getContent**(): `string`

#### Returns

`string`

▸ **getContent**(`parsedContent`): `string`

#### Parameters

| Name            | Type    |
| :-------------- | :------ |
| `parsedContent` | `false` |

#### Returns

`string`

▸ **getContent**(`parsedContent`): `T`

#### Parameters

| Name            | Type   |
| :-------------- | :----- |
| `parsedContent` | `true` |

#### Returns

`T`

---

### getMessageID

▸ **getMessageID**(): [`MessageID`](MessageID.md)

#### Returns

[`MessageID`](MessageID.md)

---

### getMessageRef

▸ **getMessageRef**(): [`MessageRef`](MessageRef.md)

#### Returns

[`MessageRef`](MessageRef.md)

---

### getMsgChainId

▸ **getMsgChainId**(): `string`

#### Returns

`string`

---

### getNewGroupKey

▸ **getNewGroupKey**(): `null` \| `EncryptedGroupKey`

#### Returns

`null` \| `EncryptedGroupKey`

---

### getParsedContent

▸ **getParsedContent**(): `T`

Lazily parses the content to JSON

#### Returns

`T`

---

### getPreviousMessageRef

▸ **getPreviousMessageRef**(): `null` \| [`MessageRef`](MessageRef.md)

#### Returns

`null` \| [`MessageRef`](MessageRef.md)

---

### getPublisherId

▸ **getPublisherId**(): [`EthereumAddress`](../API Reference#ethereumaddress)

#### Returns

[`EthereumAddress`](../API Reference#ethereumaddress)

---

### getSequenceNumber

▸ **getSequenceNumber**(): `number`

#### Returns

`number`

---

### getSerializedContent

▸ **getSerializedContent**(): `string`

#### Returns

`string`

---

### getStreamId

▸ **getStreamId**(): [`StreamID`](../API Reference#streamid)

#### Returns

[`StreamID`](../API Reference#streamid)

---

### getStreamPartID

▸ **getStreamPartID**(): [`StreamPartID`](../API Reference#streampartid)

#### Returns

[`StreamPartID`](../API Reference#streampartid)

---

### getStreamPartition

▸ **getStreamPartition**(): `number`

#### Returns

`number`

---

### getTimestamp

▸ **getTimestamp**(): `number`

#### Returns

`number`

---

### serialize

▸ **serialize**(`version?`): `string`

#### Parameters

| Name       | Type     |
| :--------- | :------- |
| `version?` | `number` |

#### Returns

`string`

---

### deserialize

▸ `Static` **deserialize**(`msg`): [`StreamMessage`](StreamMessage.md)<`unknown`\>

Takes a serialized representation (array or string) of a message, and returns a StreamMessage instance.

#### Parameters

| Name  | Type                |
| :---- | :------------------ |
| `msg` | `string` \| `any`[] |

#### Returns

[`StreamMessage`](StreamMessage.md)<`unknown`\>

---

### getSupportedVersions

▸ `Static` **getSupportedVersions**(): `number`[]

#### Returns

`number`[]

---

### isEncrypted

▸ `Static` **isEncrypted**<`T`\>(`msg`): msg is StreamMessageEncrypted<T\>

#### Type parameters

| Name | Type      |
| :--- | :-------- |
| `T`  | `unknown` |

#### Parameters

| Name  | Type                                      |
| :---- | :---------------------------------------- |
| `msg` | [`StreamMessage`](StreamMessage.md)<`T`\> |

#### Returns

msg is StreamMessageEncrypted<T\>

---

### isUnencrypted

▸ `Static` **isUnencrypted**<`T`\>(`msg`): msg is StreamMessageUnencrypted<T\>

#### Type parameters

| Name | Type      |
| :--- | :-------- |
| `T`  | `unknown` |

#### Parameters

| Name  | Type                                      |
| :---- | :---------------------------------------- |
| `msg` | [`StreamMessage`](StreamMessage.md)<`T`\> |

#### Returns

msg is StreamMessageUnencrypted<T\>

---

### validateContentType

▸ `Static` **validateContentType**(`contentType`): `void`

#### Parameters

| Name          | Type   |
| :------------ | :----- |
| `contentType` | `JSON` |

#### Returns

`void`

---

### validateEncryptionType

▸ `Static` **validateEncryptionType**(`encryptionType`): `void`

#### Parameters

| Name             | Type             |
| :--------------- | :--------------- |
| `encryptionType` | `EncryptionType` |

#### Returns

`void`

---

### validateMessageType

▸ `Static` **validateMessageType**(`messageType`): `void`

#### Parameters

| Name          | Type                |
| :------------ | :------------------ |
| `messageType` | `StreamMessageType` |

#### Returns

`void`

---

### validateSequence

▸ `Static` **validateSequence**(`«destructured»`): `void`

#### Parameters

| Name             | Type                                    |
| :--------------- | :-------------------------------------- |
| `«destructured»` | `Object`                                |
| › `messageId`    | [`MessageID`](MessageID.md)             |
| › `prevMsgRef?`  | `null` \| [`MessageRef`](MessageRef.md) |

#### Returns

`void`

---

### versionSupportsEncryption

▸ `Static` **versionSupportsEncryption**(`streamMessageVersion`): `boolean`

#### Parameters

| Name                   | Type     |
| :--------------------- | :------- |
| `streamMessageVersion` | `number` |

#### Returns

`boolean`
