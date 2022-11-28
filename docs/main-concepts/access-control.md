---
sidebar_position: 3
---

# Access Control

## Stream access control

There are 5 different stream permissions:

- StreamPermission.PUBLISH
- StreamPermission.SUBSCRIBE
- StreamPermission.EDIT
- StreamPermission.DELETE
- StreamPermission.GRANT

You can import the `StreamPermission` enum with:

```js
const { StreamPermission } = require('streamr-client');
```

For each stream + user there can be a permission assignment containing a subset of those permissions. It is also possible to grant public permissions for streams (only `StreamPermission.PUBLISH` and `StreamPermission.SUBSCRIBE`). If a stream has e.g. a public subscribe permissions, it means that anyone can subscribe to that stream.

To grant a permission for a user:

```js
// Requires MATIC tokens (Polygon blockchain gas token)
await stream.grantPermissions({
  user: '0x12345...',
  permissions: [StreamPermission.PUBLISH],
});
```

Or to grant a public permission:

```js
await stream.grantPermissions({
  public: true,
  permissions: [StreamPermission.SUBSCRIBE],
});
```

To revoke a permission from a user:

```js
// Requires MATIC tokens (Polygon blockchain gas token)
await stream.revokePermissions({
  user: '0x12345...',
  permissions: [StreamPermission.PUBLISH],
});
```

Or revoke public permission:

```js
await stream.revokePermissions({
  public: true,
  permissions: [StreamPermission.SUBSCRIBE],
});
```

The method `streamr.setPermissions` can be used to set an exact set of permissions for one or more streams. Note that if there are existing permissions for the same users in a stream, the previous permissions are overwritten. Note that this method cannot be used from a stream, but via the `StreamrClient` instance:

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
