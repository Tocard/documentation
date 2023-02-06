# Class: StreamrClient

The main API used to interact with Streamr.

## Important

### createStream

▸ **createStream**(`propsOrStreamIdOrPath`): `Promise`<[`Stream`](Stream.md)\>

Creates a new stream.

#### Parameters

| Name                    | Type                                                          | Description                                                                          |
| :---------------------- | :------------------------------------------------------------ | :----------------------------------------------------------------------------------- |
| `propsOrStreamIdOrPath` | `string` \| `Partial`<`StreamMetadata`\> & { `id`: `string` } | the stream id to be used for the new stream, and optionally, any associated metadata |

#### Returns

`Promise`<[`Stream`](Stream.md)\>

---

### getOrCreateStream

▸ **getOrCreateStream**(`props`): `Promise`<[`Stream`](Stream.md)\>

Gets a stream, creating one if it does not exist.

#### Parameters

| Name                | Type     | Description                                                                             |
| :------------------ | :------- | :-------------------------------------------------------------------------------------- |
| `props`             | `Object` | the stream id to get or create. Field `partitions` is only used if creating the stream. |
| `props.id`          | `string` | -                                                                                       |
| `props.partitions?` | `number` | -                                                                                       |

#### Returns

`Promise`<[`Stream`](Stream.md)\>

---

### getStream

▸ **getStream**(`streamIdOrPath`): `Promise`<[`Stream`](Stream.md)\>

Gets a stream.

#### Parameters

| Name             | Type     |
| :--------------- | :------- |
| `streamIdOrPath` | `string` |

#### Returns

`Promise`<[`Stream`](Stream.md)\>

rejects if the stream is not found

---

### getSubscriptions

▸ **getSubscriptions**(`streamDefinition?`): `Promise`<[`Subscription`](Subscription.md)[]\>

Returns a list of subscriptions matching the given criteria.

#### Parameters

| Name                | Type                                                    | Description                                   |
| :------------------ | :------------------------------------------------------ | :-------------------------------------------- |
| `streamDefinition?` | [`StreamDefinition`](../API Reference#streamdefinition) | leave as `undefined` to get all subscriptions |

#### Returns

`Promise`<[`Subscription`](Subscription.md)[]\>

---

### publish

▸ **publish**(`streamDefinition`, `content`, `metadata?`): `Promise`<`Message`\>

Publishes a message to a stream partition in the network.

#### Parameters

| Name               | Type                                                    | Description                                                                                    |
| :----------------- | :------------------------------------------------------ | :--------------------------------------------------------------------------------------------- |
| `streamDefinition` | [`StreamDefinition`](../API Reference#streamdefinition) | the stream or stream partition to publish the message to                                       |
| `content`          | `unknown`                                               | the content (the payload) of the message (must be JSON serializable)                           |
| `metadata?`        | `PublishMetadata`                                       | provide additional metadata to be included in the message or to control the publishing process |

#### Returns

`Promise`<`Message`\>

the published message (note: the field content is encrypted if the stream is private)

---

### resend

▸ **resend**(`streamDefinition`, `options`, `onMessage?`): `Promise`<`MessageStream`\>

Performs a resend of stored historical data.

#### Parameters

| Name               | Type                                                    | Description                                          |
| :----------------- | :------------------------------------------------------ | :--------------------------------------------------- |
| `streamDefinition` | [`StreamDefinition`](../API Reference#streamdefinition) | the stream partition for which data should be resent |
| `options`          | [`ResendOptions`](../API Reference#resendoptions)       | defines the kind of resend that should be performed  |
| `onMessage?`       | [`MessageListener`](../API Reference#messagelistener)   | callback will be invoked for each message retrieved  |

#### Returns

`Promise`<[`MessageStream`](MessageStream.md)\>

a [MessageStream](MessageStream.md) that provides an alternative way of iterating messages. Rejects if the stream is
not stored (i.e. is not assigned to a storage node).

---

### subscribe

▸ **subscribe**(`options`, `onMessage?`): `Promise`<[`Subscription`](Subscription.md)\>

Subscribes to a stream partition in the network.

#### Parameters

| Name         | Type                                                  | Description                                                                                                        |
| :----------- | :---------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------- |
| `options`    | `Object`                                              | the stream or stream partition to subscribe to, additionally a resend can be performed by providing resend options |
| `onMessage?` | [`MessageListener`](../API Reference#messagelistener) | callback will be invoked for each message received in subscription                                                 |

#### Returns

`Promise`<[`Subscription`](Subscription.md)\>

a [Subscription](Subscription.md) that can be used to manage the subscription etc.

---

### unsubscribe

▸ **unsubscribe**(`streamDefinitionOrSubscription?`): `Promise`<`unknown`\>

Unsubscribes from streams or stream partitions in the network.

**`Remarks`**

no-op if subscription does not exist

#### Parameters

| Name                              | Type                                                                                         | Description                                                          |
| :-------------------------------- | :------------------------------------------------------------------------------------------- | :------------------------------------------------------------------- |
| `streamDefinitionOrSubscription?` | [`StreamDefinition`](../API Reference#streamdefinition) \| [`Subscription`](Subscription.md) | leave as `undefined` to unsubscribe from all existing subscriptions. |

#### Returns

`Promise`<`unknown`\>

## Other

### constructor

• **new StreamrClient**(`config?`)

#### Parameters

| Name     | Type                  |
| :------- | :-------------------- |
| `config` | `StreamrClientConfig` |

---

### id

• `Readonly` **id**: `string`

---

### generateEthereumAccount

▪ `Static` `Readonly` **generateEthereumAccount**: () => { `address`: `string` ; `privateKey`: `string` } = `_generateEthereumAccount`

#### Type declaration

▸ (): `Object`

##### Returns

`Object`

| Name         | Type     |
| :----------- | :------- |
| `address`    | `string` |
| `privateKey` | `string` |

---

### addEncryptionKey

▸ **addEncryptionKey**(`key`, `streamIdOrPath`): `Promise`<`void`\>

Adds an encryption key for a given stream to the key store.

**`Remarks`**

Keys will be added to the store automatically by the client as encountered. This method can be used to
manually add some known keys into the store.

#### Parameters

| Name             | Type            |
| :--------------- | :-------------- |
| `key`            | `EncryptionKey` |
| `streamIdOrPath` | `string`        |

#### Returns

`Promise`<`void`\>

---

### addStreamToStorageNode

▸ **addStreamToStorageNode**(`streamIdOrPath`, `storageNodeAddress`): `Promise`<`void`\>

Assigns a stream to a storage node.

#### Parameters

| Name                 | Type     |
| :------------------- | :------- |
| `streamIdOrPath`     | `string` |
| `storageNodeAddress` | `string` |

#### Returns

`Promise`<`void`\>

---

### closeProxyConnections

▸ **closeProxyConnections**(`streamDefinition`, `nodeIds`, `direction`): `Promise`<`void`\>

#### Parameters

| Name               | Type                                                    |
| :----------------- | :------------------------------------------------------ |
| `streamDefinition` | [`StreamDefinition`](../API Reference#streamdefinition) |
| `nodeIds`          | `string`[]                                              |
| `direction`        | `ProxyDirection`                                        |

#### Returns

`Promise`<`void`\>

---

### connect

▸ **connect**(): `Promise`<`void`\>

Used to manually initialize the network stack and connect to the network.

**`Remarks`**

Connecting is handled automatically by the client. Generally this method need not be called by the user.

#### Returns

`Promise`<`void`\>

---

### deleteStream

▸ **deleteStream**(`streamIdOrPath`): `Promise`<`void`\>

Deletes a stream.

#### Parameters

| Name             | Type     |
| :--------------- | :------- |
| `streamIdOrPath` | `string` |

#### Returns

`Promise`<`void`\>

---

### destroy

▸ **destroy**(): `Promise`<`void`\>

Destroys an instance of a [StreamrClient](StreamrClient.md) by disconnecting from peers, clearing any pending tasks, and
freeing up resources. This should be called once a user is done with the instance.

**`Remarks`**

As the name implies, the client instance (or any streams or subscriptions returned by it) should _not_
be used after calling this method.

#### Returns

`Promise`<`void`\>

---

### getAddress

▸ **getAddress**(): `Promise`<[`EthereumAddress`](../API Reference#ethereumaddress)\>

Gets the Ethereum address of the wallet associated with the current [StreamrClient](StreamrClient.md) instance.

#### Returns

`Promise`<[`EthereumAddress`](../API Reference#ethereumaddress)\>

---

### getNode

▸ **getNode**(): `Promise`<`NetworkNodeStub`\>

**`Deprecated`**

This in an internal method

#### Returns

`Promise`<`NetworkNodeStub`\>

---

### getPermissions

▸ **getPermissions**(`streamIdOrPath`): `Promise`<[`PermissionAssignment`](../API Reference#permissionassignment)[]\>

Returns the list of all permissions in effect for a given stream.

#### Parameters

| Name             | Type     |
| :--------------- | :------- |
| `streamIdOrPath` | `string` |

#### Returns

`Promise`<[`PermissionAssignment`](../API Reference#permissionassignment)[]\>

---

### getStorageNodeMetadata

▸ **getStorageNodeMetadata**(`nodeAddress`): `Promise`<`StorageNodeMetadata`\>

Gets the metadata of a storage node from the storage node registry.

#### Parameters

| Name          | Type     |
| :------------ | :------- |
| `nodeAddress` | `string` |

#### Returns

`Promise`<`StorageNodeMetadata`\>

rejects if the storage node is not found

---

### getStorageNodes

▸ **getStorageNodes**(`streamIdOrPath?`): `Promise`<[`EthereumAddress`](../API Reference#ethereumaddress)[]\>

Gets a list of storage nodes.

#### Parameters

| Name              | Type     | Description                                                                                                                               |
| :---------------- | :------- | :---------------------------------------------------------------------------------------------------------------------------------------- |
| `streamIdOrPath?` | `string` | if a stream is given, returns the list of storage nodes the stream has been assigned to; leave as `undefined` to return all storage nodes |

#### Returns

`Promise`<[`EthereumAddress`](../API Reference#ethereumaddress)[]\>

---

### getStoredStreams

▸ **getStoredStreams**(`storageNodeAddress`): `Promise`<{ `blockNumber`: `number` ; `streams`: [`Stream`](Stream.md)[] }\>

Gets all streams assigned to a storage node.

#### Parameters

| Name                 | Type     |
| :------------------- | :------- |
| `storageNodeAddress` | `string` |

#### Returns

`Promise`<{ `blockNumber`: `number` ; `streams`: [`Stream`](Stream.md)[] }\>

a list of [Stream](Stream.md) as well as `blockNumber` of result (i.e. blockchain state)

---

### getStreamPublishers

▸ **getStreamPublishers**(`streamIdOrPath`): `AsyncIterable`<[`EthereumAddress`](../API Reference#ethereumaddress)\>

Gets all ethereum addresses that have PUBLISH permission to the stream.

#### Parameters

| Name             | Type     |
| :--------------- | :------- |
| `streamIdOrPath` | `string` |

#### Returns

`AsyncIterable`<[`EthereumAddress`](../API Reference#ethereumaddress)\>

---

### getStreamSubscribers

▸ **getStreamSubscribers**(`streamIdOrPath`): `AsyncIterable`<[`EthereumAddress`](../API Reference#ethereumaddress)\>

Gets all ethereum addresses that have SUBSCRIBE permission to the stream.

#### Parameters

| Name             | Type     |
| :--------------- | :------- |
| `streamIdOrPath` | `string` |

#### Returns

`AsyncIterable`<[`EthereumAddress`](../API Reference#ethereumaddress)\>

---

### grantPermissions

▸ **grantPermissions**(`streamIdOrPath`, `...assignments`): `Promise`<`void`\>

Grants permissions on a given stream.

#### Parameters

| Name             | Type                                                              |
| :--------------- | :---------------------------------------------------------------- |
| `streamIdOrPath` | `string`                                                          |
| `...assignments` | [`PermissionAssignment`](../API Reference#permissionassignment)[] |

#### Returns

`Promise`<`void`\>

---

### hasPermission

▸ **hasPermission**(`query`): `Promise`<`boolean`\>

Checks whether the given permission is in effect.

#### Parameters

| Name    | Type                                                  |
| :------ | :---------------------------------------------------- |
| `query` | [`PermissionQuery`](../API Reference#permissionquery) |

#### Returns

`Promise`<`boolean`\>

---

### isStoredStream

▸ **isStoredStream**(`streamIdOrPath`, `storageNodeAddress`): `Promise`<`boolean`\>

Checks whether a stream is assigned to a storage node.

#### Parameters

| Name                 | Type     |
| :------------------- | :------- |
| `streamIdOrPath`     | `string` |
| `storageNodeAddress` | `string` |

#### Returns

`Promise`<`boolean`\>

---

### isStreamPublisher

▸ **isStreamPublisher**(`streamIdOrPath`, `userAddress`): `Promise`<`boolean`\>

Checks whether a given ethereum address has PUBLISH permission to a stream.

#### Parameters

| Name             | Type     |
| :--------------- | :------- |
| `streamIdOrPath` | `string` |
| `userAddress`    | `string` |

#### Returns

`Promise`<`boolean`\>

---

### isStreamSubscriber

▸ **isStreamSubscriber**(`streamIdOrPath`, `userAddress`): `Promise`<`boolean`\>

Checks whether a given ethereum address has SUBSCRIBE permission to a stream.

#### Parameters

| Name             | Type     |
| :--------------- | :------- |
| `streamIdOrPath` | `string` |
| `userAddress`    | `string` |

#### Returns

`Promise`<`boolean`\>

---

### off

▸ **off**<`T`\>(`eventName`, `listener`): `void`

Removes an event listener from the client.

#### Type parameters

| Name | Type                                |
| :--- | :---------------------------------- |
| `T`  | extends keyof `StreamrClientEvents` |

#### Parameters

| Name        | Type                       | Description                                     |
| :---------- | :------------------------- | :---------------------------------------------- |
| `eventName` | `T`                        | event name, see StreamrClientEvents for options |
| `listener`  | `StreamrClientEvents`[`T`] | the callback function to remove                 |

#### Returns

`void`

---

### on

▸ **on**<`T`\>(`eventName`, `listener`): `void`

Adds an event listener to the client.

#### Type parameters

| Name | Type                                |
| :--- | :---------------------------------- |
| `T`  | extends keyof `StreamrClientEvents` |

#### Parameters

| Name        | Type                       | Description                                     |
| :---------- | :------------------------- | :---------------------------------------------- |
| `eventName` | `T`                        | event name, see StreamrClientEvents for options |
| `listener`  | `StreamrClientEvents`[`T`] | the callback function                           |

#### Returns

`void`

---

### once

▸ **once**<`T`\>(`eventName`, `listener`): `void`

Adds an event listener to the client that is invoked only once.

#### Type parameters

| Name | Type                                |
| :--- | :---------------------------------- |
| `T`  | extends keyof `StreamrClientEvents` |

#### Parameters

| Name        | Type                       | Description                                     |
| :---------- | :------------------------- | :---------------------------------------------- |
| `eventName` | `T`                        | event name, see StreamrClientEvents for options |
| `listener`  | `StreamrClientEvents`[`T`] | the callback function                           |

#### Returns

`void`

---

### openProxyConnections

▸ **openProxyConnections**(`streamDefinition`, `nodeIds`, `direction`): `Promise`<`void`\>

#### Parameters

| Name               | Type                                                    |
| :----------------- | :------------------------------------------------------ |
| `streamDefinition` | [`StreamDefinition`](../API Reference#streamdefinition) |
| `nodeIds`          | `string`[]                                              |
| `direction`        | `ProxyDirection`                                        |

#### Returns

`Promise`<`void`\>

---

### removeStreamFromStorageNode

▸ **removeStreamFromStorageNode**(`streamIdOrPath`, `storageNodeAddress`): `Promise`<`void`\>

Unassigns a stream from a storage node.

#### Parameters

| Name                 | Type     |
| :------------------- | :------- |
| `streamIdOrPath`     | `string` |
| `storageNodeAddress` | `string` |

#### Returns

`Promise`<`void`\>

---

### revokePermissions

▸ **revokePermissions**(`streamIdOrPath`, `...assignments`): `Promise`<`void`\>

Revokes permissions on a given stream.

#### Parameters

| Name             | Type                                                              |
| :--------------- | :---------------------------------------------------------------- |
| `streamIdOrPath` | `string`                                                          |
| `...assignments` | [`PermissionAssignment`](../API Reference#permissionassignment)[] |

#### Returns

`Promise`<`void`\>

---

### searchStreams

▸ **searchStreams**(`term`, `permissionFilter`): `AsyncIterable`<[`Stream`](Stream.md)\>

Searches for streams based on given criteria.

#### Parameters

| Name               | Type                                           | Description                                                    |
| :----------------- | :--------------------------------------------- | :------------------------------------------------------------- |
| `term`             | `undefined` \| `string`                        | a search term that should be part of the stream id of a result |
| `permissionFilter` | `undefined` \| `SearchStreamsPermissionFilter` | permissions that should be in effect for a result              |

#### Returns

`AsyncIterable`<[`Stream`](Stream.md)\>

---

### setPermissions

▸ **setPermissions**(`...items`): `Promise`<`void`\>

Sets a list of permissions to be in effect.

**`Remarks`**

Can be used to set the permissions of multiple streams in one transaction. Great for doing bulk
operations and saving gas costs. Notice that the behaviour is overwriting, therefore any existing permissions not
defined will be removed (per stream).

#### Parameters

| Name       | Type                                                                                                          |
| :--------- | :------------------------------------------------------------------------------------------------------------ |
| `...items` | { `assignments`: [`PermissionAssignment`](../API Reference#permissionassignment)[] ; `streamId`: `string` }[] |

#### Returns

`Promise`<`void`\>

---

### setStorageNodeMetadata

▸ **setStorageNodeMetadata**(`metadata`): `Promise`<`void`\>

Sets the metadata of a storage node in the storage node registry.

**`Remarks`**

Acts on behalf of the wallet associated with the current [StreamrClient](StreamrClient.md) instance.

#### Parameters

| Name       | Type                                 | Description                                                |
| :--------- | :----------------------------------- | :--------------------------------------------------------- |
| `metadata` | `undefined` \| `StorageNodeMetadata` | if `undefined`, removes the storage node from the registry |

#### Returns

`Promise`<`void`\>

---

### updateEncryptionKey

▸ **updateEncryptionKey**(`opts`): `Promise`<`void`\>

Manually updates the encryption key used when publishing messages to a given stream.

#### Parameters

| Name   | Type                         |
| :----- | :--------------------------- |
| `opts` | `UpdateEncryptionKeyOptions` |

#### Returns

`Promise`<`void`\>

---

### updateStream

▸ **updateStream**(`props`): `Promise`<[`Stream`](Stream.md)\>

Updates the metadata of a stream.

#### Parameters

| Name    | Type                                              | Description                                         |
| :------ | :------------------------------------------------ | :-------------------------------------------------- |
| `props` | `Partial`<`StreamMetadata`\> & { `id`: `string` } | the stream id and the metadata fields to be updated |

#### Returns

`Promise`<[`Stream`](Stream.md)\>

---

### waitForStorage

▸ **waitForStorage**(`message`, `options?`): `Promise`<`void`\>

Waits for a message to be stored by a storage node.

#### Parameters

| Name                      | Type                                                       | Description                                                      |
| :------------------------ | :--------------------------------------------------------- | :--------------------------------------------------------------- |
| `message`                 | `Message`                                                  | the message to be awaited for                                    |
| `options?`                | `Object`                                                   | additional options for controlling waiting and message matching  |
| `options.count?`          | `number`                                                   | Controls size of internal resend used in polling.                |
| `options.interval?`       | `number`                                                   | Determines how often should storage node be polled.              |
| `options.messageMatchFn?` | (`msgTarget`: `Message`, `msgGot`: `Message`) => `boolean` | Used to set a custom message equality operator. **`Deprecated`** |
| `options.timeout?`        | `number`                                                   | Timeout after which to give up if message was not seen.          |

#### Returns

`Promise`<`void`\>

rejects if message was found in storage before timeout
