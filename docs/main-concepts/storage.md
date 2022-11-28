---
sidebar_position: 4
---

# Data Storage

You can enable storage on your streams to retain historical messages and access it later via `resend`. By default storage is not enabled on streams. You can enable it with:

```js
const { StreamrClient, STREAMR_STORAGE_NODE_GERMANY } = require('streamr-client')
...
// assign a stream to a storage node
await stream.addToStorageNode(STREAMR_STORAGE_NODE_GERMANY)
```

Other operations with storage:

```js
// remove the stream from a storage node
await stream.removeFromStorageNode(STREAMR_STORAGE_NODE_GERMANY);
// fetch the storage nodes for a stream
const storageNodes = stream.getStorageNodes();
```
