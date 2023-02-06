# Interface: StreamrClientConfig

## Properties

### auth

• `Optional` **auth**: [`ProviderAuthConfig`](ProviderAuthConfig.md) \| [`PrivateKeyAuthConfig`](PrivateKeyAuthConfig.md)

Authentication: identity used by this StreamrClient instance.
Can contain member privateKey or (window.)ethereum

---

### cache

• `Optional` **cache**: `Object`

#### Type declaration

| Name       | Type     |
| :--------- | :------- |
| `maxAge?`  | `number` |
| `maxSize?` | `number` |

---

### contracts

• `Optional` **contracts**: `Object`

#### Type declaration

| Name                                 | Type                                                                     | Description                                                 |
| :----------------------------------- | :----------------------------------------------------------------------- | :---------------------------------------------------------- |
| `ethereumNetworks?`                  | `Record`<`string`, [`EthereumNetworkConfig`](EthereumNetworkConfig.md)\> | -                                                           |
| `mainChainRPCs?`                     | `ChainConnectionInfo`                                                    | -                                                           |
| `maxConcurrentCalls?`                | `number`                                                                 | -                                                           |
| `storageNodeRegistryChainAddress?`   | `string`                                                                 | -                                                           |
| `streamRegistryChainAddress?`        | `string`                                                                 | -                                                           |
| `streamRegistryChainRPCs?`           | `ChainConnectionInfo`                                                    | -                                                           |
| `streamStorageRegistryChainAddress?` | `string`                                                                 | -                                                           |
| `theGraphUrl?`                       | `string`                                                                 | Some TheGraph instance, that indexes the streamr registries |

---

### decryption

• `Optional` **decryption**: `Object`

#### Type declaration

| Name                       | Type     |
| :------------------------- | :------- |
| `keyRequestTimeout?`       | `number` |
| `maxKeyRequestsPerSecond?` | `number` |

---

### gapFill

• `Optional` **gapFill**: `boolean`

---

### gapFillTimeout

• `Optional` **gapFillTimeout**: `number`

---

### id

• `Optional` **id**: `string`

Custom human-readable debug id for client. Used in logging.

---

### logLevel

• `Optional` **logLevel**: [`LogLevel`](../API Reference#loglevel)

---

### maxGapRequests

• `Optional` **maxGapRequests**: `number`

---

### metrics

• `Optional` **metrics**: `boolean` \| { `maxPublishDelay?`: `number` ; `periods?`: { `duration`: `number` ; `streamId`: `string` }[] }

---

### network

• `Optional` **network**: `Object`

#### Type declaration

| Name                                    | Type                                                   |
| :-------------------------------------- | :----------------------------------------------------- |
| `acceptProxyConnections?`               | `boolean`                                              |
| `disconnectionWaitTime?`                | `number`                                               |
| `iceServers?`                           | readonly `IceServer`[]                                 |
| `id?`                                   | `string`                                               |
| `location?`                             | `Location`                                             |
| `newWebrtcConnectionTimeout?`           | `number`                                               |
| `peerPingInterval?`                     | `number`                                               |
| `rttUpdateTimeout?`                     | `number`                                               |
| `trackerConnectionMaintenanceInterval?` | `number`                                               |
| `trackerPingInterval?`                  | `number`                                               |
| `trackers?`                             | `TrackerRegistryContract` \| `TrackerRegistryRecord`[] |
| `webrtcDatachannelBufferThresholdHigh?` | `number`                                               |
| `webrtcDatachannelBufferThresholdLow?`  | `number`                                               |
| `webrtcDisallowPrivateAddresses?`       | `boolean`                                              |

---

### orderMessages

• `Optional` **orderMessages**: `boolean`

Attempt to order messages

---

### retryResendAfter

• `Optional` **retryResendAfter**: `number`
