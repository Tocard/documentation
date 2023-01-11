---
sidebar_position: 1
---

# Quickstart client

:::tip Key Point:
A guide on how to create your first data stream and start publish/subscribe to data.

**Ideally you have heard of pub/sub before. If not, read [this](./main-concepts/pub-sub.md) first.**
:::

## 1 Create A Stream

The file explorer is accessible using the button in left corner of the navigation bar. You can create a new file by clicking the **New file** button in the file explorer. You can also create folders by clicking the **New folder** button.

## 2 Setup

### 1 Installation

The client is available on [npm](https://www.npmjs.com/package/streamr-client) and can be installed simply by:

```
npm install streamr-client
```

### 2 Initialization

StackEdit stores your files in your browser, which means all your files are automatically saved locally and are accessible **offline!**

## 3 Publish Data

```ts
const streamId = 'streamr.eth/demos/helsinki-trams';

streamr.subscribe(streamId, (message) => {
  // handle for individual messages
});
```

## 4 Subscribe To Data

```ts
// Requires MATIC tokens (Polygon blockchain gas token)
const stream = await streamr.createStream({
  id: '/foo/bar',
});

await stream.publish({ timestamp: Date.now() });
```

You can rename the current file by clicking the file name in the navigation bar or by clicking the **Rename** button in the file explorer.
