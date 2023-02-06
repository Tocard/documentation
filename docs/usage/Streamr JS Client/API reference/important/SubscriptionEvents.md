# Interface: SubscriptionEvents

Events emitted by Subscription.

## Properties

### error

• **error**: (`err`: `Error`) => `void`

#### Type declaration

▸ (`err`): `void`

Emitted if an error occurred in the subscription.

##### Parameters

| Name  | Type    |
| :---- | :------ |
| `err` | `Error` |

##### Returns

`void`

---

### resendComplete

• **resendComplete**: () => `void`

#### Type declaration

▸ (): `void`

Emitted when a resend is complete.

##### Returns

`void`
