# Class: Stream

A convenience API for managing and accessing an individual stream.

## Important

### addToStorageNode

▸ **addToStorageNode**(`storageNodeAddress`, `waitOptions?`): `Promise`<`void`\>

Assigns the stream to a storage node.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `storageNodeAddress` | `string` | - |
| `waitOptions` | `Object` | control how long to wait for storage node to pick up on assignment |
| `waitOptions.timeout?` | `number` | - |

#### Returns

`Promise`<`void`\>

a resolved promise if (1) stream was assigned to storage node and (2) the storage node acknowledged the
assignment within `timeout`, otherwise rejects. Notice that is possible for this promise to reject but for the
storage node assignment to go through eventually.

___

### getPermissions

▸ **getPermissions**(): `Promise`<[`PermissionAssignment`](../API Reference#permissionassignment)[]\>

See [StreamrClient.getPermissions](StreamrClient.md#getpermissions).

#### Returns

`Promise`<[`PermissionAssignment`](../API Reference#permissionassignment)[]\>

___

### grantPermissions

▸ **grantPermissions**(`...assignments`): `Promise`<`void`\>

See [StreamrClient.grantPermissions](StreamrClient.md#grantpermissions).

#### Parameters

| Name | Type |
| :------ | :------ |
| `...assignments` | [`PermissionAssignment`](../API Reference#permissionassignment)[] |

#### Returns

`Promise`<`void`\>

___

### hasPermission

▸ **hasPermission**(`query`): `Promise`<`boolean`\>

See [StreamrClient.hasPermission](StreamrClient.md#haspermission).

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | `Omit`<[`UserPermissionQuery`](../interfaces/UserPermissionQuery.md), ``"streamId"``\> \| `Omit`<[`PublicPermissionQuery`](../interfaces/PublicPermissionQuery.md), ``"streamId"``\> |

#### Returns

`Promise`<`boolean`\>

___

### publish

▸ **publish**(`content`, `metadata?`): `Promise`<[`Message`](../interfaces/Message.md)\>

See [StreamrClient.publish](StreamrClient.md#publish).

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | `unknown` |
| `metadata?` | [`PublishMetadata`](../interfaces/PublishMetadata.md) |

#### Returns

`Promise`<[`Message`](../interfaces/Message.md)\>

___

### revokePermissions

▸ **revokePermissions**(`...assignments`): `Promise`<`void`\>

See [StreamrClient.revokePermissions](StreamrClient.md#revokepermissions).

#### Parameters

| Name | Type |
| :------ | :------ |
| `...assignments` | [`PermissionAssignment`](../API Reference#permissionassignment)[] |

#### Returns

`Promise`<`void`\>

## Other

### id

• `Readonly` **id**: [`StreamID`](../API Reference#streamid)

___

### delete

▸ **delete**(): `Promise`<`void`\>

Deletes the stream.

**`Remarks`**

Stream instance should not be used afterwards.

#### Returns

`Promise`<`void`\>

___

### detectFields

▸ **detectFields**(): `Promise`<`void`\>

Attempts to detect and update the [config](../interfaces/StreamMetadata.md#config) metadata of the stream by performing a resend.

**`Remarks`**

Only works on stored streams.

#### Returns

`Promise`<`void`\>

be mindful that in the case of there being zero messages stored, the returned promise will resolve even
though fields were not updated

___

### getMetadata

▸ **getMetadata**(): [`StreamMetadata`](../interfaces/StreamMetadata.md)

Returns the metadata of the stream.

#### Returns

[`StreamMetadata`](../interfaces/StreamMetadata.md)

___

### getStorageNodes

▸ **getStorageNodes**(): `Promise`<`string`[]\>

See [StreamrClient.getStorageNodes](StreamrClient.md#getstoragenodes).

#### Returns

`Promise`<`string`[]\>

___

### getStreamParts

▸ **getStreamParts**(): [`StreamPartID`](../API Reference#streampartid)[]

Returns the partitions of the stream.

#### Returns

[`StreamPartID`](../API Reference#streampartid)[]

___

### removeFromStorageNode

▸ **removeFromStorageNode**(`nodeAddress`): `Promise`<`void`\>

See [StreamrClient.removeStreamFromStorageNode](StreamrClient.md#removestreamfromstoragenode).

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodeAddress` | `string` |

#### Returns

`Promise`<`void`\>

___

### update

▸ **update**(`metadata`): `Promise`<`void`\>

Updates the metadata of the stream by merging with the existing metadata.

#### Parameters

| Name | Type |
| :------ | :------ |
| `metadata` | `Partial`<[`StreamMetadata`](../interfaces/StreamMetadata.md)\> |

#### Returns

`Promise`<`void`\>
