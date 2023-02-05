---
sidebar_position: 2
---
# Creating streams
A stream is simply a **sequence of data points in time**, i.e. an append only log. This is semantically equivalent to **topics** in traditional pub/sub networks.

:::tip Stream properties:
- Sequence of data points in time
- Any kind of real-time data can be stored in it
- The data will always be retrieved in the correct order
- Identified by unique stream IDs
:::

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

:::note
The client generally supports the following **three ways of defining a stream id**:

```ts
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

:::

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
