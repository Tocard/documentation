---
sidebar_position: 1
---

# Data Streams

## Intro to data streams

:::tip Key Point:
A stream is simply a **sequence of data points in time**, i.e. an append only log. This is semantically equivalent to **topics** in traditional [pub/sub networks](main-concepts/pub-sub.md).

All of the data in the [Streamr network](main-concepts/streamr-network.md) is contained inside individual streams. The data may originate, for example from machines on the factory floor, sensors in a smart city, in-house databases or systems, or from commercial streaming data feeds.
:::

### Properties of a data stream

- Sequence of data points in time
- Any kind of **real-time data** can be stored in it.
- The data will always be **retrieved in the correct order**.
- The data is **persisted on the [Streamr network](main-concepts/streamr-network.md)** and **identifiable by unique ID**.

### Example data stream

Let's say you have a temperature measurement device that publishes the **temperature of your house every second**. Then this is how your data stream would look like:

| Timestamp               | Temperature |
| :---------------------- | :---------- |
| 2019-08-01 11:30:01.012 | 312.56      |
| 2019-08-01 11:30:02.239 | 312.49      |
| 2019-08-01 11:30:03.105 | 312.42      |
| 2019-08-01 11:30:04.122 | 312.64      |
| 2019-08-01 11:30:05.882 | 312.32      |

Your stream would grow over time and you can add more colums/data fields to your timestamp.

## Data fields

A field is a kind of placeholder for an individual piece of data, from a single data point (temperature in our example is _one_ data field). Each data point contains at least one data field, but you can have as many fields per data point as required.

### Data field types

:::info Good to know
Field types can be freely mixed in a single data point. And you can freely add new fields to an existing stream; you don’t have to know what fields you might eventually need. **A single data point can be of any size within reason, and a stream can grow indefinitely when extended by new data points**.
:::

<details><summary>Built in data types</summary>

**Number** is a numeric data type internally stored as a double precision (64-bit) float.

**Boolean** is a logical data type with two possible values, True and False. In Streamr, a numeric value exactly equal to one represents logical truth. Anything else is interpreted as a logical falsehood.

**String** is a sequence of zero or more alphabetical characters.

**Object** is a collection of key-value pairs. Each key is a string, and the value can be of any built-in data type (even another object). Object is equivalent to Java's 'Map'.

**List** is an ordered collection of zero or more elements. List is equivilent to an array.

</details>

### Example for a data point

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

Given the structure of this data point, the stream's fields could be configured as follows:

| Field     | Field type |
| :-------- | :--------- |
| Symbol    | String     |
| EventType | Number     |
| OrderId   | Number     |
| Direction | String     |
| Trade     | Object     |
| Ask       | List       |
| Bid       | List       |

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
