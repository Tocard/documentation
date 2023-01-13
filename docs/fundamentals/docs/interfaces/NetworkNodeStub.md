[Streamr Client - v7.2.1](../README.md) / NetworkNodeStub

# Interface: NetworkNodeStub

**`Deprecated`**

This in an internal interface

## Table of contents

### Properties

- [addMessageListener](NetworkNodeStub.md#addmessagelistener)
- [getMetricsContext](NetworkNodeStub.md#getmetricscontext)
- [getNeighbors](NetworkNodeStub.md#getneighbors)
- [getNeighborsForStreamPart](NetworkNodeStub.md#getneighborsforstreampart)
- [getNodeId](NetworkNodeStub.md#getnodeid)
- [getRtt](NetworkNodeStub.md#getrtt)
- [getStreamParts](NetworkNodeStub.md#getstreamparts)
- [hasProxyConnection](NetworkNodeStub.md#hasproxyconnection)
- [hasStreamPart](NetworkNodeStub.md#hasstreampart)
- [publish](NetworkNodeStub.md#publish)
- [removeMessageListener](NetworkNodeStub.md#removemessagelistener)
- [setExtraMetadata](NetworkNodeStub.md#setextrametadata)
- [subscribe](NetworkNodeStub.md#subscribe)
- [subscribeAndWaitForJoin](NetworkNodeStub.md#subscribeandwaitforjoin)
- [unsubscribe](NetworkNodeStub.md#unsubscribe)
- [waitForJoinAndPublish](NetworkNodeStub.md#waitforjoinandpublish)

## Properties

### addMessageListener

• **addMessageListener**: (`listener`: (`msg`: [`StreamMessage`](../classes/StreamMessage.md)<`unknown`\>) => `void`) => `void`

#### Type declaration

▸ (`listener`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | (`msg`: [`StreamMessage`](../classes/StreamMessage.md)<`unknown`\>) => `void` |

##### Returns

`void`

___

### getMetricsContext

• **getMetricsContext**: () => [`MetricsContext`](../classes/MetricsContext.md)

#### Type declaration

▸ (): [`MetricsContext`](../classes/MetricsContext.md)

##### Returns

[`MetricsContext`](../classes/MetricsContext.md)

___

### getNeighbors

• **getNeighbors**: () => readonly `string`[]

#### Type declaration

▸ (): readonly `string`[]

##### Returns

readonly `string`[]

___

### getNeighborsForStreamPart

• **getNeighborsForStreamPart**: (`streamPartId`: [`StreamPartID`](../README.md#streampartid)) => readonly `string`[]

#### Type declaration

▸ (`streamPartId`): readonly `string`[]

##### Parameters

| Name | Type |
| :------ | :------ |
| `streamPartId` | [`StreamPartID`](../README.md#streampartid) |

##### Returns

readonly `string`[]

___

### getNodeId

• **getNodeId**: () => `string`

#### Type declaration

▸ (): `string`

##### Returns

`string`

___

### getRtt

• **getRtt**: (`nodeId`: `string`) => `undefined` \| `number`

#### Type declaration

▸ (`nodeId`): `undefined` \| `number`

##### Parameters

| Name | Type |
| :------ | :------ |
| `nodeId` | `string` |

##### Returns

`undefined` \| `number`

___

### getStreamParts

• **getStreamParts**: () => `Iterable`<[`StreamPartID`](../README.md#streampartid)\>

#### Type declaration

▸ (): `Iterable`<[`StreamPartID`](../README.md#streampartid)\>

##### Returns

`Iterable`<[`StreamPartID`](../README.md#streampartid)\>

___

### hasProxyConnection

• **hasProxyConnection**: (`streamPartId`: [`StreamPartID`](../README.md#streampartid), `contactNodeId`: `string`, `direction`: [`ProxyDirection`](../enums/ProxyDirection.md)) => `boolean`

#### Type declaration

▸ (`streamPartId`, `contactNodeId`, `direction`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `streamPartId` | [`StreamPartID`](../README.md#streampartid) |
| `contactNodeId` | `string` |
| `direction` | [`ProxyDirection`](../enums/ProxyDirection.md) |

##### Returns

`boolean`

___

### hasStreamPart

• **hasStreamPart**: (`streamPartId`: [`StreamPartID`](../README.md#streampartid)) => `boolean`

#### Type declaration

▸ (`streamPartId`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `streamPartId` | [`StreamPartID`](../README.md#streampartid) |

##### Returns

`boolean`

___

### publish

• **publish**: (`streamMessage`: [`StreamMessage`](../classes/StreamMessage.md)<`unknown`\>) => `void`

#### Type declaration

▸ (`streamMessage`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `streamMessage` | [`StreamMessage`](../classes/StreamMessage.md)<`unknown`\> |

##### Returns

`void`

___

### removeMessageListener

• **removeMessageListener**: (`listener`: (`msg`: [`StreamMessage`](../classes/StreamMessage.md)<`unknown`\>) => `void`) => `void`

#### Type declaration

▸ (`listener`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | (`msg`: [`StreamMessage`](../classes/StreamMessage.md)<`unknown`\>) => `void` |

##### Returns

`void`

___

### setExtraMetadata

• **setExtraMetadata**: (`metadata`: `Record`<`string`, `unknown`\>) => `void`

#### Type declaration

▸ (`metadata`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `metadata` | `Record`<`string`, `unknown`\> |

##### Returns

`void`

___

### subscribe

• **subscribe**: (`streamPartId`: [`StreamPartID`](../README.md#streampartid)) => `void`

#### Type declaration

▸ (`streamPartId`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `streamPartId` | [`StreamPartID`](../README.md#streampartid) |

##### Returns

`void`

___

### subscribeAndWaitForJoin

• **subscribeAndWaitForJoin**: (`streamPart`: [`StreamPartID`](../README.md#streampartid), `timeout?`: `number`) => `Promise`<`number`\>

#### Type declaration

▸ (`streamPart`, `timeout?`): `Promise`<`number`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `streamPart` | [`StreamPartID`](../README.md#streampartid) |
| `timeout?` | `number` |

##### Returns

`Promise`<`number`\>

___

### unsubscribe

• **unsubscribe**: (`streamPartId`: [`StreamPartID`](../README.md#streampartid)) => `void`

#### Type declaration

▸ (`streamPartId`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `streamPartId` | [`StreamPartID`](../README.md#streampartid) |

##### Returns

`void`

___

### waitForJoinAndPublish

• **waitForJoinAndPublish**: (`msg`: [`StreamMessage`](../classes/StreamMessage.md)<`unknown`\>, `timeout?`: `number`) => `Promise`<`number`\>

#### Type declaration

▸ (`msg`, `timeout?`): `Promise`<`number`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `msg` | [`StreamMessage`](../classes/StreamMessage.md)<`unknown`\> |
| `timeout?` | `number` |

##### Returns

`Promise`<`number`\>
