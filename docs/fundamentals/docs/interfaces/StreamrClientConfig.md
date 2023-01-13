[Streamr Client - v7.2.1](../README.md) / StreamrClientConfig

# Interface: StreamrClientConfig

## Table of contents

### Properties

- [auth](StreamrClientConfig.md#auth)
- [cache](StreamrClientConfig.md#cache)
- [contracts](StreamrClientConfig.md#contracts)
- [decryption](StreamrClientConfig.md#decryption)
- [gapFill](StreamrClientConfig.md#gapfill)
- [gapFillTimeout](StreamrClientConfig.md#gapfilltimeout)
- [id](StreamrClientConfig.md#id)
- [logLevel](StreamrClientConfig.md#loglevel)
- [maxGapRequests](StreamrClientConfig.md#maxgaprequests)
- [metrics](StreamrClientConfig.md#metrics)
- [network](StreamrClientConfig.md#network)
- [orderMessages](StreamrClientConfig.md#ordermessages)
- [retryResendAfter](StreamrClientConfig.md#retryresendafter)

## Properties

### auth

• `Optional` **auth**: [`ProviderAuthConfig`](ProviderAuthConfig.md) \| [`PrivateKeyAuthConfig`](PrivateKeyAuthConfig.md)

Authentication: identity used by this StreamrClient instance.
Can contain member privateKey or (window.)ethereum

___

### cache

• `Optional` **cache**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `maxAge?` | `number` |
| `maxSize?` | `number` |

___

### contracts

• `Optional` **contracts**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `ethereumNetworks?` | `Record`<`string`, [`EthereumNetworkConfig`](EthereumNetworkConfig.md)\> | - |
| `mainChainRPCs?` | [`ChainConnectionInfo`](ChainConnectionInfo.md) | - |
| `maxConcurrentCalls?` | `number` | - |
| `storageNodeRegistryChainAddress?` | `string` | - |
| `streamRegistryChainAddress?` | `string` | - |
| `streamRegistryChainRPCs?` | [`ChainConnectionInfo`](ChainConnectionInfo.md) | - |
| `streamStorageRegistryChainAddress?` | `string` | - |
| `theGraphUrl?` | `string` | Some TheGraph instance, that indexes the streamr registries |

___

### decryption

• `Optional` **decryption**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `keyRequestTimeout?` | `number` |
| `maxKeyRequestsPerSecond?` | `number` |

___

### gapFill

• `Optional` **gapFill**: `boolean`

___

### gapFillTimeout

• `Optional` **gapFillTimeout**: `number`

___

### id

• `Optional` **id**: `string`

Custom human-readable debug id for client. Used in logging.

___

### logLevel

• `Optional` **logLevel**: [`LogLevel`](../README.md#loglevel)

___

### maxGapRequests

• `Optional` **maxGapRequests**: `number`

___

### metrics

• `Optional` **metrics**: `boolean` \| { `maxPublishDelay?`: `number` ; `periods?`: { `duration`: `number` ; `streamId`: `string`  }[]  }

___

### network

• `Optional` **network**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `acceptProxyConnections?` | `boolean` |
| `disconnectionWaitTime?` | `number` |
| `iceServers?` | readonly [`IceServer`](IceServer.md)[] |
| `id?` | `string` |
| `location?` | [`Location`](Location.md) |
| `newWebrtcConnectionTimeout?` | `number` |
| `peerPingInterval?` | `number` |
| `rttUpdateTimeout?` | `number` |
| `trackerConnectionMaintenanceInterval?` | `number` |
| `trackerPingInterval?` | `number` |
| `trackers?` | [`TrackerRegistryContract`](TrackerRegistryContract.md) \| [`TrackerRegistryRecord`](TrackerRegistryRecord.md)[] |
| `webrtcDatachannelBufferThresholdHigh?` | `number` |
| `webrtcDatachannelBufferThresholdLow?` | `number` |
| `webrtcDisallowPrivateAddresses?` | `boolean` |

___

### orderMessages

• `Optional` **orderMessages**: `boolean`

Attempt to order messages

___

### retryResendAfter

• `Optional` **retryResendAfter**: `number`
