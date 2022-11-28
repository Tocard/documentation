---
sidebar_position: 2
---

# Data Streams

### Creating a stream

```js
// Requires MATIC tokens (Polygon blockchain gas token)
const stream = await streamr.createStream({
  id: '/foo/bar',
});

console.log(stream.id); // e.g. `0x12345.../foo/bar`
```

You can also create a stream by defining the address in the provided id. Please note that the creation will only succeed if you specify the same address as provided for authentication when creating the `streamr` instance:

```js
// Requires MATIC tokens (Polygon blockchain gas token)
const stream = await client.createStream({
  id: `${address}/foo/bar`,
});

console.log(stream.id); // e.g. `0x12345.../foo/bar`
```

More information on Stream IDs can be found under the [stream creation project docs](https://streamr.network/docs/streams/creating-streams)

### Subscribing to a stream

```js
const subscription = await streamr.subscribe(
    streamId,
    (content, metadata) => { ... }
)
```

The callback's first parameter, `content`, contains the value given to the `publish` method.

The second parameter `metadata` contains metadata about the message, e.g. timestamp.

Unsubscribing from an existent subscription:

```js
await streamr.unsubscribe(streamId);
// or, unsubscribe them all:
const streams = await streamr.unsubscribe();
```

Getting all streams the client is subscribed to:

```js
const subscriptions = streamr.getSubscriptions();
```

### Publishing to a stream

```js
// Here's our example data point
const msg = {
  temperature: 25.4,
  humidity: 10,
  happy: true,
};

// Publish using the stream id only
await streamr.publish(streamId, msg);

// Publish with a specific timestamp as a Date object (default is now)
await streamr.publish(streamId, msg, { timestamp: new Date(1546300800123) });

// Publish with a specific timestamp in ms
await streamr.publish(streamId, msg, { timestamp: 1546300800123 });

// Publish with a specific timestamp as a ISO8601 string
await streamr.publish(streamId, msg, { timestamp: '2019-01-01T00:00:00.123Z' });

// For convenience, stream.publish(...) equals streamr.publish(stream, ...)
await stream.publish(msg);
```

### Interacting with the `Stream` object

The `Stream` type provides a convenient way to interact with a stream without having to repeatedly pass Stream IDs.

#### Getting existing streams

```js
const stream = await streamr.getStream(streamId);
```

The method getOrCreateStream gets the stream if it exists, and if not, creates it:

```js
// May require MATIC tokens (Polygon blockchain gas token)
const stream = await streamr.getOrCreateStream({
  id: streamId,
});
```

#### Updating a stream

To update the description of a stream:

```js
// Requires MATIC tokens (Polygon blockchain gas token)
await stream.update({
  description: 'New description',
});
```

#### Deleting a stream

To delete a stream:

```js
// Requires MATIC tokens (Polygon blockchain gas token)
await stream.delete();
```
