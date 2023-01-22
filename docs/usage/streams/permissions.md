---
sidebar_position: 4
---

# Permissions
Stream access control is about who gets to read, write and edit streams is **enforced by the on-chain stream registry**. Every modification to the registry requires a small amount of MATIC to pay for the transaction.

For each stream + user there can be a permission assignment containing a subset of those permissions.

**A user is defined by an Ethereum address**. Meaning you give an address permission to read/write/edit streams.

## Permission types

:::caution Important:
You have to give permission to publish **before** users can publish data on the stream.
:::

There are 5 different stream permissions:

| Permission  | User can                         |
| ----------- | -------------------------------- |
| PUBLISH     | Publish data to a stream (write) |
| SUBSCRIBE   | Subscribe to stream (read)       |
| EDIT        | Edit the stream details          |
| DELETE      | Delete the stream                |
| GRANT       | Share stream permissions         |

You can import the `StreamPermission` enum with:

```js
const { StreamPermission } = require('streamr-client');

StreamPermission.PUBLISH;
StreamPermission.SUBSCRIBE;
StreamPermission.EDIT;
StreamPermission.DELETE;
StreamPermission.GRANT;
```

### Public permission

- The `publish` and `subscribe` stream permissions may also be **public**, meaning that anyone could `subscribe` and/or `publish` to the stream.

- If a stream has e.g. a public `subscribe` permissions, it means that anyone can `subscribe` to that stream.

- Public `publish` permission is **not recommended.**

## Manage permissions

:::info Good to know:
There are two ways to manage the permissions of your Stream:

- Programmatically with the **[Streamr client](usage/access-control#with-streamr-client)**
- or with a frontend provided by the **[Streamr Hub](usage/access-control#with-the-streamr-hub)**.

:::

### With Streamr client

#### Grant permission

```js
// Requires MATIC tokens (Polygon blockchain gas token)
await stream.grantPermissions({
  user: '0x12345...',
  permissions: [StreamPermission.PUBLISH],
});
```

#### Grant public permission

```js
await stream.grantPermissions({
  public: true,
  permissions: [StreamPermission.SUBSCRIBE],
});
```

#### Revoke permission from a user

```js
// Requires MATIC tokens (Polygon blockchain gas token)
await stream.revokePermissions({
  user: '0x12345...',
  permissions: [StreamPermission.PUBLISH],
});
```

#### Revoke public permission

```js
await stream.revokePermissions({
  public: true,
  permissions: [StreamPermission.SUBSCRIBE],
});
```

#### Set permissions

:::info Good to know
The method `streamr.setPermissions` can be used to set an exact set of permissions for one or more streams. Note that if there are existing permissions for the same users in a stream, the previous permissions are overwritten. Note that this method cannot be used from a stream, but via the `StreamrClient` instance.
:::

```js
// Requires MATIC tokens (Polygon blockchain gas token)
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

#### Check permissions

You can query the existence of a permission with `hasPermission()`. Usually you want to use `allowPublic: true` flag so that also the existence of a public permission is checked:

```js
await stream.hasPermission({
    permission: StreamPermission.PUBLISH,
    user: '0x12345...',
    allowPublic: true
}
```

The full list of permissions for a stream can be queried by calling `stream.getPermissions()`:

```js
const permissions = await stream.getPermissions();
```

The returned value is an array of permissions containing an item for each user, and possibly one for public permissions:

```js
permissions = [
  { user: '0x12345...', permissions: ['subscribe', 'publish'] },
  { public: true, permissions: ['subscribe'] },
];
```

### With the Streamr Hub

coming soon
