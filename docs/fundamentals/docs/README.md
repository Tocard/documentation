Streamr Client - v7.2.1

# Streamr Client - v7.2.1

## Table of contents

### Enumerations

- [ContentType](enums/ContentType.md)
- [EncryptionType](enums/EncryptionType.md)
- [ProxyDirection](enums/ProxyDirection.md)
- [StreamMessageType](enums/StreamMessageType.md)
- [StreamPermission](enums/StreamPermission.md)

### Classes

- [BigNumber](classes/BigNumber.md)
- [EncryptedGroupKey](classes/EncryptedGroupKey.md)
- [EncryptionKey](classes/EncryptionKey.md)
- [MessageID](classes/MessageID.md)
- [MessageRef](classes/MessageRef.md)
- [MessageStream](classes/MessageStream.md)
- [Metric](classes/Metric.md)
- [MetricsContext](classes/MetricsContext.md)
- [Stream](classes/Stream.md)
- [StreamMessage](classes/StreamMessage.md)
- [StreamrClient](classes/StreamrClient.md)
- [Subscription](classes/Subscription.md)

### Interfaces

- [ChainConnectionInfo](interfaces/ChainConnectionInfo.md)
- [EthereumNetworkConfig](interfaces/EthereumNetworkConfig.md)
- [Field](interfaces/Field.md)
- [IceServer](interfaces/IceServer.md)
- [Location](interfaces/Location.md)
- [Message](interfaces/Message.md)
- [NetworkNodeStub](interfaces/NetworkNodeStub.md)
- [PrivateKeyAuthConfig](interfaces/PrivateKeyAuthConfig.md)
- [ProviderAuthConfig](interfaces/ProviderAuthConfig.md)
- [PublicPermissionAssignment](interfaces/PublicPermissionAssignment.md)
- [PublicPermissionQuery](interfaces/PublicPermissionQuery.md)
- [PublishMetadata](interfaces/PublishMetadata.md)
- [ResendFromOptions](interfaces/ResendFromOptions.md)
- [ResendLastOptions](interfaces/ResendLastOptions.md)
- [ResendRangeOptions](interfaces/ResendRangeOptions.md)
- [ResendRef](interfaces/ResendRef.md)
- [SearchStreamsPermissionFilter](interfaces/SearchStreamsPermissionFilter.md)
- [StorageNodeAssignmentEvent](interfaces/StorageNodeAssignmentEvent.md)
- [StorageNodeMetadata](interfaces/StorageNodeMetadata.md)
- [StreamMessageOptions](interfaces/StreamMessageOptions.md)
- [StreamMetadata](interfaces/StreamMetadata.md)
- [StreamrClientConfig](interfaces/StreamrClientConfig.md)
- [StreamrClientEvents](interfaces/StreamrClientEvents.md)
- [SubscriptionEvents](interfaces/SubscriptionEvents.md)
- [TrackerRegistryContract](interfaces/TrackerRegistryContract.md)
- [TrackerRegistryRecord](interfaces/TrackerRegistryRecord.md)
- [UpdateEncryptionKeyOptions](interfaces/UpdateEncryptionKeyOptions.md)
- [UserPermissionAssignment](interfaces/UserPermissionAssignment.md)
- [UserPermissionQuery](interfaces/UserPermissionQuery.md)

### Type Aliases

- [BrandedString](README.md#brandedstring)
- [ConnectionInfo](README.md#connectioninfo)
- [EthereumAddress](README.md#ethereumaddress)
- [ExternalProvider](README.md#externalprovider)
- [LogLevel](README.md#loglevel)
- [MessageListener](README.md#messagelistener)
- [MessageMetadata](README.md#messagemetadata)
- [MetricsDefinition](README.md#metricsdefinition)
- [MetricsReport](README.md#metricsreport)
- [NetworkNodeConfig](README.md#networknodeconfig)
- [PermissionAssignment](README.md#permissionassignment)
- [PermissionQuery](README.md#permissionquery)
- [ResendOptions](README.md#resendoptions)
- [StreamDefinition](README.md#streamdefinition)
- [StreamID](README.md#streamid)
- [StreamPartID](README.md#streampartid)
- [StrictStreamrClientConfig](README.md#strictstreamrclientconfig)

### Variables

- [CONFIG\_TEST](README.md#config_test)
- [ConfigTest](README.md#configtest)
- [STREAMR\_STORAGE\_NODE\_GERMANY](README.md#streamr_storage_node_germany)
- [STREAM\_CLIENT\_DEFAULTS](README.md#stream_client_defaults)
- [VALID\_FIELD\_TYPES](README.md#valid_field_types)

### Functions

- [formStorageNodeAssignmentStreamId](README.md#formstoragenodeassignmentstreamid)
- [validateConfig](README.md#validateconfig)

## Other

### BrandedString

Ƭ **BrandedString**<`T`\>: `string` & { `__brand`: `T`  }

#### Type parameters

| Name |
| :------ |
| `T` |

___

### ConnectionInfo

Ƭ **ConnectionInfo**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `allowGzip?` | `boolean` |
| `allowInsecureAuthentication?` | `boolean` |
| `errorPassThrough?` | `boolean` |
| `fetchOptions?` | `Record`<`string`, `string`\> |
| `headers?` | { `[key: string]`: `string` \| `number`;  } |
| `password?` | `string` |
| `skipFetchSetup?` | `boolean` |
| `throttleCallback?` | (`attempt`: `number`, `url`: `string`) => `Promise`<`boolean`\> |
| `throttleLimit?` | `number` |
| `throttleSlotInterval?` | `number` |
| `timeout?` | `number` |
| `url` | `string` |
| `user?` | `string` |

___

### EthereumAddress

Ƭ **EthereumAddress**: [`BrandedString`](README.md#brandedstring)<``"EthereumAddress"``\>

___

### ExternalProvider

Ƭ **ExternalProvider**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `host?` | `string` |
| `isMetaMask?` | `boolean` |
| `isStatus?` | `boolean` |
| `path?` | `string` |
| `request?` | (`request`: { `method`: `string` ; `params?`: `any`[]  }) => `Promise`<`any`\> |
| `send?` | (`request`: { `method`: `string` ; `params?`: `any`[]  }, `callback`: (`error`: `any`, `response`: `any`) => `void`) => `void` |
| `sendAsync?` | (`request`: { `method`: `string` ; `params?`: `any`[]  }, `callback`: (`error`: `any`, `response`: `any`) => `void`) => `void` |

___

### LogLevel

Ƭ **LogLevel**: ``"silent"`` \| ``"fatal"`` \| ``"error"`` \| ``"warn"`` \| ``"info"`` \| ``"debug"`` \| ``"trace"``

___

### MessageListener

Ƭ **MessageListener**: (`content`: `unknown`, `metadata`: [`MessageMetadata`](README.md#messagemetadata)) => `unknown` \| `Promise`<`unknown`\>

#### Type declaration

▸ (`content`, `metadata`): `unknown` \| `Promise`<`unknown`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `content` | `unknown` |
| `metadata` | [`MessageMetadata`](README.md#messagemetadata) |

##### Returns

`unknown` \| `Promise`<`unknown`\>

___

### MessageMetadata

Ƭ **MessageMetadata**: `Omit`<[`Message`](interfaces/Message.md), ``"content"``\>

___

### MetricsDefinition

Ƭ **MetricsDefinition**: `Record`<`string`, [`Metric`](classes/Metric.md)\>

___

### MetricsReport

Ƭ **MetricsReport**: { `period`: { `end`: `number` ; `start`: `number`  }  } & `Record`<`string`, `any`\>

___

### NetworkNodeConfig

Ƭ **NetworkNodeConfig**: `NetworkNodeOptions`

**`Deprecated`**

___

### PermissionAssignment

Ƭ **PermissionAssignment**: [`UserPermissionAssignment`](interfaces/UserPermissionAssignment.md) \| [`PublicPermissionAssignment`](interfaces/PublicPermissionAssignment.md)

___

### PermissionQuery

Ƭ **PermissionQuery**: [`UserPermissionQuery`](interfaces/UserPermissionQuery.md) \| [`PublicPermissionQuery`](interfaces/PublicPermissionQuery.md)

___

### ResendOptions

Ƭ **ResendOptions**: [`ResendLastOptions`](interfaces/ResendLastOptions.md) \| [`ResendFromOptions`](interfaces/ResendFromOptions.md) \| [`ResendRangeOptions`](interfaces/ResendRangeOptions.md)

The supported resend types.

___

### StreamDefinition

Ƭ **StreamDefinition**: `string` \| { `id`: `string` ; `partition?`: `number`  } \| { `partition?`: `number` ; `stream`: `string`  } \| { `partition?`: `number` ; `streamId`: `string`  }

___

### StreamID

Ƭ **StreamID**: [`BrandedString`](README.md#brandedstring)<``"StreamID"``\>

___

### StreamPartID

Ƭ **StreamPartID**: [`BrandedString`](README.md#brandedstring)<``"StreamPartID"``\>

___

### StrictStreamrClientConfig

Ƭ **StrictStreamrClientConfig**: `_StrictStreamrClientConfig`

**`Deprecated`**

___

### CONFIG\_TEST

• `Const` **CONFIG\_TEST**: [`StreamrClientConfig`](interfaces/StreamrClientConfig.md)

Streamr client constructor options that work in the test environment

___

### ConfigTest

• `Const` **ConfigTest**: [`StreamrClientConfig`](interfaces/StreamrClientConfig.md) = `CONFIG_TEST`

**`Deprecated`**

Use CONFIG_TEST

___

### STREAMR\_STORAGE\_NODE\_GERMANY

• `Const` **STREAMR\_STORAGE\_NODE\_GERMANY**: ``"0x31546eEA76F2B2b3C5cC06B1c93601dc35c9D916"``

___

### STREAM\_CLIENT\_DEFAULTS

• `Const` **STREAM\_CLIENT\_DEFAULTS**: `Omit`<`StrictStreamrClientConfig`, ``"id"`` \| ``"auth"`` \| ``"network"``\> & { `network`: `Omit`<`StrictStreamrClientConfig`[``"network"``], ``"id"``\>  }

**`Deprecated`**

___

### VALID\_FIELD\_TYPES

• `Const` **VALID\_FIELD\_TYPES**: readonly [``"number"``, ``"string"``, ``"boolean"``, ``"list"``, ``"map"``]

___

### formStorageNodeAssignmentStreamId

▸ **formStorageNodeAssignmentStreamId**(`clusterAddress`): [`StreamID`](README.md#streamid)

#### Parameters

| Name | Type |
| :------ | :------ |
| `clusterAddress` | `string` |

#### Returns

[`StreamID`](README.md#streamid)

___

### validateConfig

▸ **validateConfig**(`data`): `StrictStreamrClientConfig`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |

#### Returns

`StrictStreamrClientConfig`
