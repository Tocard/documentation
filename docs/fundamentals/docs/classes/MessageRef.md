[Streamr Client - v7.2.1](../README.md) / MessageRef

# Class: MessageRef

## Table of contents

### Constructors

- [constructor](MessageRef.md#constructor)

### Properties

- [sequenceNumber](MessageRef.md#sequencenumber)
- [timestamp](MessageRef.md#timestamp)

### Methods

- [clone](MessageRef.md#clone)
- [compareTo](MessageRef.md#compareto)
- [serialize](MessageRef.md#serialize)
- [toArray](MessageRef.md#toarray)
- [fromArray](MessageRef.md#fromarray)

## Constructors

### constructor

• **new MessageRef**(`timestamp`, `sequenceNumber`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `timestamp` | `number` |
| `sequenceNumber` | `number` |

## Properties

### sequenceNumber

• **sequenceNumber**: `number`

___

### timestamp

• **timestamp**: `number`

## Methods

### clone

▸ **clone**(): [`MessageRef`](MessageRef.md)

#### Returns

[`MessageRef`](MessageRef.md)

___

### compareTo

▸ **compareTo**(`other`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`MessageRef`](MessageRef.md) |

#### Returns

`number`

___

### serialize

▸ **serialize**(): `string`

#### Returns

`string`

___

### toArray

▸ **toArray**(): `any`[]

#### Returns

`any`[]

___

### fromArray

▸ `Static` **fromArray**(`arr`): [`MessageRef`](MessageRef.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `arr` | `any`[] |

#### Returns

[`MessageRef`](MessageRef.md)
