---
sidebar_position: 5
---

# Store and retrieve data
You can enable storage on your streams to **[retain historical messages](usage/storage#requesting-historical-messages) and access it later via `resend`**. By default storage is not enabled on streams.

## Enable storage
```ts
const { StreamrClient, STREAMR_STORAGE_NODE_GERMANY } = require('streamr-client')
...
// assign a stream to a storage node
await stream.addToStorageNode(STREAMR_STORAGE_NODE_GERMANY)
```

Other operations with storage:

```ts
// remove the stream from a storage node
await stream.removeFromStorageNode(STREAMR_STORAGE_NODE_GERMANY);
// fetch the storage nodes for a stream
const storageNodes = stream.getStorageNodes();
```

## Request historical messages

:::caution Important:
In order to fetch historical messages the stream needs to have **[storage enabled](usage/storage#enable-storage)**.
:::

By default `subscribe` will not request historical messages.

### Fetch historical messages with the `resend` method

```ts
// Fetches the last 10 messages stored for the stream
const resend1 = await streamr.resend(
  streamId,
  {
    last: 10,
  },
  onMessage
);
```

### Fetch historical messages and subscribe to real-time messages

```ts
// Fetches the last 10 messages and subscribes to the stream
const sub1 = await streamr.subscribe(
  {
    id: streamId,
    resend: {
      last: 10,
    },
  },
  onMessage
);
```

### Resend from a specific timestamp up to the newest message

```ts
const sub2 = await streamr.resend(streamId, {
  from: {
    timestamp: Date.now() - 1000 * 60 * 5, // 5 minutes ago
    sequenceNumber: 0, // optional
  },
  publisher: '0x12345...', // optional
});
```

### Resend a range of messages

```ts
const sub3 = await streamr.resend(streamId, {
  from: {
    timestamp: Date.now() - 1000 * 60 * 10, // 10 minutes ago
  },
  to: {
    timestamp: Date.now() - 1000 * 60 * 5, // 5 minutes ago
  },
  // when using from and to the following parameters are optional
  // but, if specified, both must be present
  publisher: '0x12345...',
  msgChainId: 'ihuzetvg0c88ydd82z5o',
});
```

### Listen to completion of resend

If you choose one of the above resend options when subscribing, you can listen on the completion of this resend by doing the following:

```ts
const sub = await streamr.subscribe(options);
sub.once('resendComplete', () => {
  console.log(
    'Received all requested historical messages! Now switching to real time!'
  );
});
```

Note that only one of the resend options can be used for a particular subscription.
