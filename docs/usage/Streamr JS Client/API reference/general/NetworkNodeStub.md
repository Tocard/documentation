# Interface: NetworkNodeStub

**`Deprecated`**

This in an internal interface

## Properties

### addMessageListener

• **addMessageListener**: (`listener`: (`msg`: `StreamMessage`<`unknown`\>) => `void`) => `void`

#### Type declaration

▸ (`listener`): `void`

##### Parameters

| Name       | Type                                           |
| :--------- | :--------------------------------------------- |
| `listener` | (`msg`: `StreamMessage`<`unknown`\>) => `void` |

##### Returns

`void`

---

### getMetricsContext

• **getMetricsContext**: () => `MetricsContext`

#### Type declaration

▸ (): `MetricsContext`

##### Returns

`MetricsContext`

---

### getNeighbors

• **getNeighbors**: () => readonly `string`[]

#### Type declaration

▸ (): readonly `string`[]

##### Returns

readonly `string`[]

---

### getNeighborsForStreamPart

• **getNeighborsForStreamPart**: (`streamPartId`: [`StreamPartID`](../API Reference#streampartid)) => readonly `string`[]

#### Type declaration

▸ (`streamPartId`): readonly `string`[]

##### Parameters

| Name           | Type                                            |
| :------------- | :---------------------------------------------- |
| `streamPartId` | [`StreamPartID`](../API Reference#streampartid) |

##### Returns

readonly `string`[]

---

### getNodeId

• **getNodeId**: () => `string`

#### Type declaration

▸ (): `string`

##### Returns

`string`

---

### getRtt

• **getRtt**: (`nodeId`: `string`) => `undefined` \| `number`

#### Type declaration

▸ (`nodeId`): `undefined` \| `number`

##### Parameters

| Name     | Type     |
| :------- | :------- |
| `nodeId` | `string` |

##### Returns

`undefined` \| `number`

---

### getStreamParts

• **getStreamParts**: () => `Iterable`<[`StreamPartID`](../API Reference#streampartid)\>

#### Type declaration

▸ (): `Iterable`<[`StreamPartID`](../API Reference#streampartid)\>

##### Returns

`Iterable`<[`StreamPartID`](../API Reference#streampartid)\>

---

### hasProxyConnection

• **hasProxyConnection**: (`streamPartId`: [`StreamPartID`](../API Reference#streampartid), `contactNodeId`: `string`, `direction`: `ProxyDirection`) => `boolean`

#### Type declaration

▸ (`streamPartId`, `contactNodeId`, `direction`): `boolean`

##### Parameters

| Name            | Type                                            |
| :-------------- | :---------------------------------------------- |
| `streamPartId`  | [`StreamPartID`](../API Reference#streampartid) |
| `contactNodeId` | `string`                                        |
| `direction`     | `ProxyDirection`                                |

##### Returns

`boolean`

---

### hasStreamPart

• **hasStreamPart**: (`streamPartId`: [`StreamPartID`](../API Reference#streampartid)) => `boolean`

#### Type declaration

▸ (`streamPartId`): `boolean`

##### Parameters

| Name           | Type                                            |
| :------------- | :---------------------------------------------- |
| `streamPartId` | [`StreamPartID`](../API Reference#streampartid) |

##### Returns

`boolean`

---

### publish

• **publish**: (`streamMessage`: `StreamMessage`<`unknown`\>) => `void`

#### Type declaration

▸ (`streamMessage`): `void`

##### Parameters

| Name            | Type                        |
| :-------------- | :-------------------------- |
| `streamMessage` | `StreamMessage`<`unknown`\> |

##### Returns

`void`

---

### removeMessageListener

• **removeMessageListener**: (`listener`: (`msg`: `StreamMessage`<`unknown`\>) => `void`) => `void`

#### Type declaration

▸ (`listener`): `void`

##### Parameters

| Name       | Type                                           |
| :--------- | :--------------------------------------------- |
| `listener` | (`msg`: `StreamMessage`<`unknown`\>) => `void` |

##### Returns

`void`

---

### setExtraMetadata

• **setExtraMetadata**: (`metadata`: `Record`<`string`, `unknown`\>) => `void`

#### Type declaration

▸ (`metadata`): `void`

##### Parameters

| Name       | Type                           |
| :--------- | :----------------------------- |
| `metadata` | `Record`<`string`, `unknown`\> |

##### Returns

`void`

---

### subscribe

• **subscribe**: (`streamPartId`: [`StreamPartID`](../API Reference#streampartid)) => `void`

#### Type declaration

▸ (`streamPartId`): `void`

##### Parameters

| Name           | Type                                            |
| :------------- | :---------------------------------------------- |
| `streamPartId` | [`StreamPartID`](../API Reference#streampartid) |

##### Returns

`void`

---

### subscribeAndWaitForJoin

• **subscribeAndWaitForJoin**: (`streamPart`: [`StreamPartID`](../API Reference#streampartid), `timeout?`: `number`) => `Promise`<`number`\>

#### Type declaration

▸ (`streamPart`, `timeout?`): `Promise`<`number`\>

##### Parameters

| Name         | Type                                            |
| :----------- | :---------------------------------------------- |
| `streamPart` | [`StreamPartID`](../API Reference#streampartid) |
| `timeout?`   | `number`                                        |

##### Returns

`Promise`<`number`\>

---

### unsubscribe

• **unsubscribe**: (`streamPartId`: [`StreamPartID`](../API Reference#streampartid)) => `void`

#### Type declaration

▸ (`streamPartId`): `void`

##### Parameters

| Name           | Type                                            |
| :------------- | :---------------------------------------------- |
| `streamPartId` | [`StreamPartID`](../API Reference#streampartid) |

##### Returns

`void`

---

### waitForJoinAndPublish

• **waitForJoinAndPublish**: (`msg`: `StreamMessage`<`unknown`\>, `timeout?`: `number`) => `Promise`<`number`\>

#### Type declaration

▸ (`msg`, `timeout?`): `Promise`<`number`\>

##### Parameters

| Name       | Type                        |
| :--------- | :-------------------------- |
| `msg`      | `StreamMessage`<`unknown`\> |
| `timeout?` | `number`                    |

##### Returns

`Promise`<`number`\>
