[Streamr Client - v7.2.1](../README.md) / SubscriptionEvents

# Interface: SubscriptionEvents

Events emitted by [Subscription](../classes/Subscription.md).

## Table of contents

### Properties

- [error](SubscriptionEvents.md#error)
- [resendComplete](SubscriptionEvents.md#resendcomplete)

## Properties

### error

• **error**: (`err`: `Error`) => `void`

#### Type declaration

▸ (`err`): `void`

Emitted if an error occurred in the subscription.

##### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `Error` |

##### Returns

`void`

___

### resendComplete

• **resendComplete**: () => `void`

#### Type declaration

▸ (): `void`

Emitted when a resend is complete.

##### Returns

`void`
