---
sidebar_position: 1
---

# Quickstart JS client

:::tip Key Point:
A guide on how to create your first data stream and start publish/subscribe to data.

**Read more about pub/sub [here](./resources/pub-sub.md).**
:::

**Prerequisites:**

- NPM v8 or greater
- NodeJS 16.13.x or greater
- MacOS/Linux environments (Windows environments may require minor adjustments)
- A small amount of `MATIC` to pay for gas on Polygon mainnet. You can reachout to us on the #dev channel of [Discord](https://discord.gg/gZAm8P7hK8) for some tokens.

## 1 Setup

### 1 Installation

The client is available on [npm](https://www.npmjs.com/package/streamr-client) and can be installed simply by:

```shell
$ npm install streamr-client
```

### 2 Initialization

```ts
// Import the Streamr client
const StreamrClient = require('streamr-client');

// Initialize the client with an Ethereum account
// This account/wallet address will need the **publish permission** on this stream to publish
const streamr = new StreamrClient({
  auth: {
    privateKey: 'ethereum-private-key',
  },
});
```

### 3 Create or get stream

:::note
Save the stream id somewhere when creating a stream. You are going to need it in the next step.
:::

```ts
// Requires MATIC tokens (Polygon blockchain gas token)
const stream = await streamr.createStream({
  id: '/foo/bar',
});

console.log(stream.id); // e.g. `0x12345.../foo/bar`

// Or get an existing stream
const stream = await streamr.getStream(streamId);
```

### 4 Set permission

:::caution Important:
You have to give permission to `publish` **before** the address you added to the `StreamrClient` object can publish data on the stream.

Read more about permissions [here](main-concepts/access-control.md).
:::

```ts
// Requires MATIC tokens (Polygon blockchain gas token)
await stream.grantPermissions({
  user: '0x12345...',
  permissions: [StreamPermission.PUBLISH],
});
```

## 3 Publish Data

There are two ways of publishing data

### `StreamrClient` object

```ts
const streamId =
  '0x0ebcccdefbc47043f996dc7bdcadbf44bc0ab485/foo/bar/e133a612-0b26-426a-b751-99cc420ca31d';
const msg = { hello: 'world' };
// Publish using the stream id only
await streamr.publish(streamId, msg);
```

### `stream` object

```ts
// Create a stream
const stream = await streamr.createStream({
  id: '/foo/bar',
});

// Or get an existing stream
const stream = await streamr.getStream(streamId);

const msg = { hello: 'world' };

await stream.publish(msg);
```

:::note
Remember you need to set the permission to publish data to the stream. Read more about it [here](quickstart-client#4-set-permission).
:::

## 4 Subscribe To Data

```ts
const streamId = 'streamr.eth/demos/helsinki-trams';

streamr.subscribe(streamId, (message) => {
  // handle for individual messages
});
// OR

// Publish using the stream id only
await streamr.publish(streamId, msg);
```
