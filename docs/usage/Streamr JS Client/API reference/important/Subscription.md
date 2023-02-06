# Class: Subscription

A convenience API for managing an individual subscription.

## Hierarchy

- [`MessageStream`](MessageStream.md)

  ↳ **`Subscription`**

## Properties

### streamPartId

• `Readonly` **streamPartId**: [`StreamPartID`](../API Reference#streampartid)

## Methods

### [asyncIterator]

▸ **[asyncIterator]**(): `AsyncIterator`<`Message`, `any`, `undefined`\>

#### Returns

`AsyncIterator`<`Message`, `any`, `undefined`\>

#### Inherited from

[MessageStream](MessageStream.md).[[asyncIterator]](MessageStream.md#[asynciterator])

---

### off

▸ **off**<`E`\>(`eventName`, `listener`): `void`

Removes an event listener from the subscription.

#### Type parameters

| Name | Type                               |
| :--- | :--------------------------------- |
| `E`  | extends keyof `SubscriptionEvents` |

#### Parameters

| Name        | Type                      | Description                                    |
| :---------- | :------------------------ | :--------------------------------------------- |
| `eventName` | `E`                       | event name, see SubscriptionEvents for options |
| `listener`  | `SubscriptionEvents`[`E`] | the callback function to remove                |

#### Returns

`void`

---

### on

▸ **on**<`E`\>(`eventName`, `listener`): `void`

Adds an event listener to the subscription.

#### Type parameters

| Name | Type                               |
| :--- | :--------------------------------- |
| `E`  | extends keyof `SubscriptionEvents` |

#### Parameters

| Name        | Type                      | Description                                    |
| :---------- | :------------------------ | :--------------------------------------------- |
| `eventName` | `E`                       | event name, see SubscriptionEvents for options |
| `listener`  | `SubscriptionEvents`[`E`] | the callback function                          |

#### Returns

`void`

---

### once

▸ **once**<`E`\>(`eventName`, `listener`): `void`

Adds an event listener to the subscription that is invoked only once.

#### Type parameters

| Name | Type                               |
| :--- | :--------------------------------- |
| `E`  | extends keyof `SubscriptionEvents` |

#### Parameters

| Name        | Type                      | Description                                    |
| :---------- | :------------------------ | :--------------------------------------------- |
| `eventName` | `E`                       | event name, see SubscriptionEvents for options |
| `listener`  | `SubscriptionEvents`[`E`] | the callback function                          |

#### Returns

`void`

---

### unsubscribe

▸ **unsubscribe**(): `Promise`<`void`\>

Unsubscribes this subscription.

**`Remarks`**

The instance should not be used after calling this.

#### Returns

`Promise`<`void`\>
