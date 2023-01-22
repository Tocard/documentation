---
sidebar_position: 1
---

# Creating
A stream is simply a **sequence of data points in time**, i.e. an append only log. This is semantically equivalent to **topics** in traditional pub/sub networks.

:::tip Stream properties:
- Sequence of data points in time
- Any kind of real-time data can be stored in it
- The data will always be retrieved in the correct order
- Identified by unique stream IDs
:::

All of the data in the [Streamr network](usage/streamr-network.md) is contained inside individual streams. The data may originate, for example from machines on the factory floor, sensors in a smart city, in-house databases or systems, or from commercial streaming data feeds.

### Example stream

Let's say you have a temperature measurement device that publishes the **temperature of your house every second**. Then this is how your stream would look like:

| Timestamp               | Temperature |
| :---------------------- | :---------- |
| 2019-08-01 11:30:01.012 | 312.56      |
| 2019-08-01 11:30:02.239 | 312.49      |
| 2019-08-01 11:30:03.105 | 312.42      |
| 2019-08-01 11:30:04.122 | 312.64      |
| 2019-08-01 11:30:05.882 | 312.32      |

Your stream would grow over time and you can add more colums/data fields to your timestamp.

### Example data point

here's a data point in a stock market stream:

```json
{
  "Symbol": "PFFT",
  "EventType": 1,
  "OrderId": 6454321,
  "Direction": "Up",
  "Trade": { "Price": 118.55, "Size": 100 },
  "Ask": [
    { "Price": 118.6, "Size": 22500 },
    { "Price": 118.65, "Size": 18000 }
  ],
  "Bid": [
    { "Price": 118.5, "Size": 16500 },
    { "Price": 118.45, "Size": 11000 }
  ]
}
```

## Managing streams with the client

### Creating a stream

```ts
// Requires MATIC tokens (Polygon blockchain gas token)
const stream = await streamr.createStream({
  id: '/foo/bar',
});

console.log(stream.id); // e.g. `0x12345.../foo/bar`
```

You can also create a stream by defining the address in the provided id. Please note that the creation will only succeed if you specify the same address as provided for authentication when creating the `streamr` instance:

```ts
// Requires MATIC tokens (Polygon blockchain gas token)
const stream = await client.createStream({
  id: `${address}/foo/bar`,
});

console.log(stream.id); // e.g. `0x12345.../foo/bar`
```

More information on Stream IDs can be found under the [stream creation project docs](https://streamr.network/docs/streams/creating-streams)

### Subscribing to a stream

```ts
const subscription = await streamr.subscribe(
    streamId,
    (content, metadata) => { ... }
)
```

The callback's first parameter, `content`, contains the value given to the `publish` method.

The second parameter `metadata` contains metadata about the message, e.g. timestamp.

Unsubscribing from an existent subscription:

```ts
await streamr.unsubscribe(streamId);
// or, unsubscribe them all:
const streams = await streamr.unsubscribe();
```

Getting all streams the client is subscribed to:

```ts
const subscriptions = streamr.getSubscriptions();
```

### Publishing to a stream

```ts
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

```ts
const stream = await streamr.getStream(streamId);
```

The method getOrCreateStream gets the stream if it exists, and if not, creates it:

```ts
// May require MATIC tokens (Polygon blockchain gas token)
const stream = await streamr.getOrCreateStream({
  id: streamId,
});
```

#### Updating a stream

To update the description of a stream:

```ts
// Requires MATIC tokens (Polygon blockchain gas token)
await stream.update({
  description: 'New description',
});
```

#### Deleting a stream

To delete a stream:

```ts
// Requires MATIC tokens (Polygon blockchain gas token)
await stream.delete();
```
