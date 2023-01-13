[Streamr Client - v7.2.1](../README.md) / BigNumber

# Class: BigNumber

## Implements

- `Hexable`

## Table of contents

### Constructors

- [constructor](BigNumber.md#constructor)

### Properties

- [\_hex](BigNumber.md#_hex)
- [\_isBigNumber](BigNumber.md#_isbignumber)

### Methods

- [abs](BigNumber.md#abs)
- [add](BigNumber.md#add)
- [and](BigNumber.md#and)
- [div](BigNumber.md#div)
- [eq](BigNumber.md#eq)
- [fromTwos](BigNumber.md#fromtwos)
- [gt](BigNumber.md#gt)
- [gte](BigNumber.md#gte)
- [isNegative](BigNumber.md#isnegative)
- [isZero](BigNumber.md#iszero)
- [lt](BigNumber.md#lt)
- [lte](BigNumber.md#lte)
- [mask](BigNumber.md#mask)
- [mod](BigNumber.md#mod)
- [mul](BigNumber.md#mul)
- [or](BigNumber.md#or)
- [pow](BigNumber.md#pow)
- [shl](BigNumber.md#shl)
- [shr](BigNumber.md#shr)
- [sub](BigNumber.md#sub)
- [toBigInt](BigNumber.md#tobigint)
- [toHexString](BigNumber.md#tohexstring)
- [toJSON](BigNumber.md#tojson)
- [toNumber](BigNumber.md#tonumber)
- [toString](BigNumber.md#tostring)
- [toTwos](BigNumber.md#totwos)
- [xor](BigNumber.md#xor)
- [from](BigNumber.md#from)
- [isBigNumber](BigNumber.md#isbignumber)

## Constructors

### constructor

• **new BigNumber**(`constructorGuard`, `hex`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `constructorGuard` | `any` |
| `hex` | `string` |

## Properties

### \_hex

• `Readonly` **\_hex**: `string`

___

### \_isBigNumber

• `Readonly` **\_isBigNumber**: `boolean`

## Methods

### abs

▸ **abs**(): [`BigNumber`](BigNumber.md)

#### Returns

[`BigNumber`](BigNumber.md)

___

### add

▸ **add**(`other`): [`BigNumber`](BigNumber.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | `BigNumberish` |

#### Returns

[`BigNumber`](BigNumber.md)

___

### and

▸ **and**(`other`): [`BigNumber`](BigNumber.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | `BigNumberish` |

#### Returns

[`BigNumber`](BigNumber.md)

___

### div

▸ **div**(`other`): [`BigNumber`](BigNumber.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | `BigNumberish` |

#### Returns

[`BigNumber`](BigNumber.md)

___

### eq

▸ **eq**(`other`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | `BigNumberish` |

#### Returns

`boolean`

___

### fromTwos

▸ **fromTwos**(`value`): [`BigNumber`](BigNumber.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

[`BigNumber`](BigNumber.md)

___

### gt

▸ **gt**(`other`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | `BigNumberish` |

#### Returns

`boolean`

___

### gte

▸ **gte**(`other`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | `BigNumberish` |

#### Returns

`boolean`

___

### isNegative

▸ **isNegative**(): `boolean`

#### Returns

`boolean`

___

### isZero

▸ **isZero**(): `boolean`

#### Returns

`boolean`

___

### lt

▸ **lt**(`other`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | `BigNumberish` |

#### Returns

`boolean`

___

### lte

▸ **lte**(`other`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | `BigNumberish` |

#### Returns

`boolean`

___

### mask

▸ **mask**(`value`): [`BigNumber`](BigNumber.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

[`BigNumber`](BigNumber.md)

___

### mod

▸ **mod**(`other`): [`BigNumber`](BigNumber.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | `BigNumberish` |

#### Returns

[`BigNumber`](BigNumber.md)

___

### mul

▸ **mul**(`other`): [`BigNumber`](BigNumber.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | `BigNumberish` |

#### Returns

[`BigNumber`](BigNumber.md)

___

### or

▸ **or**(`other`): [`BigNumber`](BigNumber.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | `BigNumberish` |

#### Returns

[`BigNumber`](BigNumber.md)

___

### pow

▸ **pow**(`other`): [`BigNumber`](BigNumber.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | `BigNumberish` |

#### Returns

[`BigNumber`](BigNumber.md)

___

### shl

▸ **shl**(`value`): [`BigNumber`](BigNumber.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

[`BigNumber`](BigNumber.md)

___

### shr

▸ **shr**(`value`): [`BigNumber`](BigNumber.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

[`BigNumber`](BigNumber.md)

___

### sub

▸ **sub**(`other`): [`BigNumber`](BigNumber.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | `BigNumberish` |

#### Returns

[`BigNumber`](BigNumber.md)

___

### toBigInt

▸ **toBigInt**(): `bigint`

#### Returns

`bigint`

___

### toHexString

▸ **toHexString**(): `string`

#### Returns

`string`

#### Implementation of

Hexable.toHexString

___

### toJSON

▸ **toJSON**(`key?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key?` | `string` |

#### Returns

`any`

___

### toNumber

▸ **toNumber**(): `number`

#### Returns

`number`

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

___

### toTwos

▸ **toTwos**(`value`): [`BigNumber`](BigNumber.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

[`BigNumber`](BigNumber.md)

___

### xor

▸ **xor**(`other`): [`BigNumber`](BigNumber.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | `BigNumberish` |

#### Returns

[`BigNumber`](BigNumber.md)

___

### from

▸ `Static` **from**(`value`): [`BigNumber`](BigNumber.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

[`BigNumber`](BigNumber.md)

___

### isBigNumber

▸ `Static` **isBigNumber**(`value`): value is BigNumber

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

value is BigNumber
