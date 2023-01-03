# Utility Functions

:::tip Key Point:
Place holder
:::

The static function `StreamrClient.generateEthereumAccount()` generates a new Ethereum private key and returns an object with fields `address` and `privateKey`.

```js
const { address, privateKey } = StreamrClient.generateEthereumAccount();
```

In order to retrieve the client's address an async call must me made to `streamr.getAddress`

```js
const address = await streamr.getAddress();
```
