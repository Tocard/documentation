# Interface: StreamMessageOptions<T\>

## Type parameters

| Name |
| :------ |
| `T` |

## Properties

### content

• **content**: `string` \| `T`

___

### contentType

• `Optional` **contentType**: [`JSON`](../enums/ContentType.md#json)

___

### encryptionType

• `Optional` **encryptionType**: [`EncryptionType`](../enums/EncryptionType.md)

___

### groupKeyId

• `Optional` **groupKeyId**: ``null`` \| `string`

___

### messageId

• **messageId**: [`MessageID`](../classes/MessageID.md)

___

### messageType

• `Optional` **messageType**: [`StreamMessageType`](../enums/StreamMessageType.md)

___

### newGroupKey

• `Optional` **newGroupKey**: ``null`` \| [`EncryptedGroupKey`](../classes/EncryptedGroupKey.md)

___

### prevMsgRef

• `Optional` **prevMsgRef**: ``null`` \| [`MessageRef`](../classes/MessageRef.md)

___

### signature

• **signature**: `string`
