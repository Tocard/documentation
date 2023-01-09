# Stream partitioning

Partitioning (sharding) enables streams to scale horizontally. This section describes how to use partitioned streams via this library. To learn the basics of partitioning, see [the docs](https://streamr.network/docs/streams#partitioning).

#### A note on stream ids and partitions

The public methods of the client generally support the following three ways of defining a stream:

```js
// Stream id as a string:
const streamId = `${address}/foo/bar`;

// Stream id + partition as a string
const streamId = `${address}/foo/bar#4`;

// Stream id + partition as an object
const streamId = {
  id: `${address}/foo/bar`,
  partition: 4,
};
```

## Creating partitioned streams

By default, streams only have 1 partition when they are created. The partition count can be set to any number between 1 and 100. An example of creating a partitioned stream:

```js
// Requires MATIC tokens (Polygon blockchain gas token)
const stream = await streamr.createStream({
  id: `/foo/bar`,
  partitions: 10,
});
console.log(
  `Stream created: ${stream.id}. It has ${
    stream.getMetadata().partitions
  } partitions.`
);
```

## Publishing to partitioned streams

In most use cases, a user wants related messages (e.g. messages from a particular device) to be assigned to the same partition, so that the messages retain a deterministic order and reach the same subscriber(s) to allow them to compute stateful aggregates correctly.

You can specify the partition number as follows:

```js
await streamr.publish(
  {
    id: `${address}/foo/bar`,
    partition: 4,
  },
  msg
);
```

The library alternatively allows the user to choose a _partition key_, which simplifies publishing to partitioned streams by not requiring the user to assign a partition number explicitly. The same partition key always maps to the same partition. In an IoT use case, the device id can be used as partition key; in user interaction data it could be the user id, and so on.

The partition key can be given as an argument to the `publish` methods, and the library assigns a deterministic partition number automatically:

```js
await stream.publish(msg, {
  partitionKey: msg.vehicleId,
});
```

## Subscribing to partitioned streams

By default, the client subscribes to the first partition (partition `0`) of a stream. Be aware: this behavior will change in the future so that it will subscribe to _all_ partitions by default.

The partition number can be explicitly given in `subscribe`:

```js
const sub = await streamr.subscribe(
  {
    id: streamId,
    partition: 4,
  },
  (content) => {
    console.log('Got message %o', content);
  }
);
```

If you want to subscribe to multiple partitions:

```js
const onMessage = (content, streamMessage) => {
  console.log(
    'Got message %o from partition %d',
    content,
    streamMessage.getStreamPartition()
  );
};

await Promise.all(
  [2, 3, 4].map(async (partition) => {
    await streamr.subscribe(
      {
        id: streamId,
        partition,
      },
      onMessage
    );
  })
);
```
