# Class: EncryptionKey

GroupKeys are AES cipher keys, which are used to encrypt/decrypt StreamMessages (when encryptionType is AES).
Each group key contains 256 random bits of key data and an UUID.

## Constructors

### constructor

• **new EncryptionKey**(`groupKeyId`, `data`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `groupKeyId` | `string` |
| `data` | `Uint8Array` |

## Methods

### generate

▸ `Static` **generate**(`id?`): [`EncryptionKey`](EncryptionKey.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

[`EncryptionKey`](EncryptionKey.md)
