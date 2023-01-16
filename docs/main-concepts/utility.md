---
sidebar_position: 6
---

# Utility Functions

:::tip Key Point:
The Streamr client offers a couple of helper methodes to make your life easier.
:::

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

## Generate wallet

The static function `StreamrClient.generateEthereumAccount()` generates a new Ethereum private key and returns an object with fields `address` and `privateKey`.

```js
const { address, privateKey } = StreamrClient.generateEthereumAccount();
```

In order to retrieve the client's address an async call must me made to `streamr.getAddress`

```js
const address = await streamr.getAddress();
```
