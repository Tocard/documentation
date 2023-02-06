---
sidebar_position: 4
---

# Permissions

Stream permissioning relates to who gets to read, write and edit streams on the Network. These stream permissions are stored and enforced by the [on-chain stream registry](../../help/project-contracts.md). Every permission update is a modification to the on-chain registry, and thus requires a small amount of `MATIC` tokens to fund the transaction.

A user is defined by an Ethereum address. Meaning you give an address permission to read/write/edit streams.
For each stream + user there can be a permission assignment containing a subset of those permissions.

:::info Good to know:
Stream permissions can be modified using the [Streamr client](https://www.npmjs.com/package/streamr-client) or with the [Streamr Hub user interface](https://streamr.network/hub)
:::

### Stream permissions

| Permission | User can                         |
| ---------- | -------------------------------- |
| PUBLISH    | Publish data to a stream (write) |
| SUBSCRIBE  | Subscribe to stream (read)       |
| EDIT       | Edit the stream details          |
| DELETE     | Delete the stream                |
| GRANT      | Share stream permissions         |

You can import the `StreamPermission` enum with:

```ts
const { StreamPermission } = require('streamr-client');

StreamPermission.PUBLISH;
StreamPermission.SUBSCRIBE;
StreamPermission.EDIT;
StreamPermission.DELETE;
StreamPermission.GRANT;
```

### Check permissions

The full list of permissions for a stream can be queried by calling `stream.getPermissions()`:

```ts
const permissions = await stream.getPermissions();
```

The returned value is an array of permissions containing an item for each user, and possibly one for public permissions:

```ts
permissions = [
  { user: '0x12345...', permissions: ['subscribe', 'publish'] },
  { public: true, permissions: ['subscribe'] },
];
```

You can query the existence of a user's permission with `hasPermission()`. Usually you want to use `allowPublic: true` flag so that the existence of a public permission is also checked:

```ts
await stream.hasPermission({
    permission: StreamPermission.PUBLISH,
    user: '0x12345...',
    allowPublic: true
}
```

### The public permission

A stream can either either be made as public or private. A stream that is publicly readable is public, but it doesn't necessasily mean its publicly writable. Private streams maintain a set of qualified subscribers which is enforced with [end-to-end encryption](../../streamr-network/Signing%20and%20encryption/end-to-end-encryption) whereas public streams do not. Regardless of the type of stream, every data point pushed to a stream is always signed by the private key of the publisher.

- The `PUBLISH` and `SUBSCRIBE` stream permissions can be made **public**, meaning that anyone could `SUBSCRIBE` and/or `PUBLISH` to the stream.
- If a stream has e.g. a public `SUBSCRIBE` permissions, it means that anyone can `SUBSCRIBE` to that stream.
- Public `PUBLISH` permission is typically **not recommended** as it means anyone could write data to your stream.

#### Grant public permission to subscribe

```ts
await stream.grantPermissions({
  public: true,
  permissions: [StreamPermission.SUBSCRIBE],
});
```

#### Revoke public permission to subscribe

```ts
await stream.revokePermissions({
  public: true,
  permissions: [StreamPermission.SUBSCRIBE],
});
```

### Grant and revoke user permissions

#### Grant publish permission to a user

```ts
await stream.grantPermissions({
  user: '0x12345...',
  permissions: [StreamPermission.PUBLISH],
});
```

#### Revoke permission from a user

```ts
await stream.revokePermissions({
  user: '0x12345...',
  permissions: [StreamPermission.PUBLISH],
});
```

### Set multiple permissions

:::info Good to know
The method `streamr.setPermissions` can be used to set an exact set of permissions for one or more streams. Note that if there are existing permissions for the same users in a stream, the previous permissions are overwritten. Also note that this method cannot be used on the `stream` object, but via the `StreamrClient` instance. The `StreamrClient` instance is typically named `streamr`.
:::

```ts
await streamr.setPermissions({
    streamId,
    assignments: [
        {
            user: '0x11111...',
            permissions: [StreamPermission.EDIT]
        }, {
            user: '0x22222...'
            permissions: [StreamPermission.GRANT]
        }, {
            public: true,
            permissions: [StreamPermission.PUBLISH, StreamPermission.SUBSCRIBE]
        }
    ]
})
```
