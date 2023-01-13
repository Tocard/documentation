[Streamr Client - v7.2.1](../README.md) / StreamMessageOptions

# Interface: StreamMessageOptions<T\>

## Type parameters

| Name |
| :------ |
| `T` |

## Table of contents

### Properties

- [content](StreamMessageOptions.md#content)
- [contentType](StreamMessageOptions.md#contenttype)
- [encryptionType](StreamMessageOptions.md#encryptiontype)
- [groupKeyId](StreamMessageOptions.md#groupkeyid)
- [messageId](StreamMessageOptions.md#messageid)
- [messageType](StreamMessageOptions.md#messagetype)
- [newGroupKey](StreamMessageOptions.md#newgroupkey)
- [prevMsgRef](StreamMessageOptions.md#prevmsgref)
- [signature](StreamMessageOptions.md#signature)

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
