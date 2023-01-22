---
sidebar_position: 3
---

# Utility functions

## Search for streams

You can search for streams by specifying a search term:

```js
const streams = await streamr.searchStreams('foo');
```

Alternatively or additionally to the search term, you can search for streams based on permissions.

To get all streams for which a user has any direct permission:

```js
const streams = await streamr.searchStreams('foo', {
  user: '0x12345...',
});
```

To get all streams for which a user has any permission (direct or public):

```js
const streams = await streamr.searchStreams('foo', {
  user: '0x12345...',
  allowPublic: true,
});
```

It is also possible to filter by specific permissions by using `allOf` and `anyOf` properties. The `allOf` property should be preferred over `anyOf` when possible due to better query performance.

If you want to find the streams you can subscribe to:

```js
const streams = await streamr.searchStreams(undefined, {
  user: '0x12345...',
  allOf: [StreamPermission.SUBSCRIBE],
  allowPublic: true,
});
```
