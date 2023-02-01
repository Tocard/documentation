---
sidebar_position: 2
---

# Web app frameworks

In this quickstart guide you'll be using Streamr in a **NextJS** web application. You'll be creating a stream that's publicly readable, but only you can write to it. Your NextJS app will be a consumer (subscriber) of the stream. If you want the browser app to be able to write data to the stream, then you'll need to create a publicly writable stream (typically not recommended) or grant access to individual users of your app. This step is typically accomplished with a centralized gate keeping service.

**Prerequisites:**

- NPM v8 or greater
- NodeJS 16.13.x or greater
- A basic understanding of ReactJS and/or NextJS
- A small amount of `MATIC` to pay for gas on Polygon mainnet. You can reachout to us on the #dev channel of [Discord](https://discord.gg/gZAm8P7hK8) for some tokens.

## Setup & installation

#### Stream creation

First, you need to create a stream to send data from A to B. Then, you will have to set the permissions to who can `PUBLISH` (write) and `SUBSCRIBE` (read) the data from this stream.

[This script](https://github.com/streamr-dev/create-stream-script) handles that for you. Simply clone the repository and follow the README instructions.

#### Installation

<!-- TODO: add hub video tutorial -->

Next you need to install the Streamr client in your application:

The client is available on [NPM](https://www.npmjs.com/package/streamr-client) and can be installed simply with:

```shell
$ npm install streamr-client
```

## Subscribe to the data of your stream

Data is flowing through your stream. Next, you want to subscribe and enable your users to read that data in your React/Next application.

To do that, you need to authenticate your users to know if they have permission to read data from the stream.

```ts
import StreamrClient from 'streamr-client';
declare var window: any;

export const startSubscribingTo = (streamId: string) => {
  // Added browser wallet (e.g. Metamask) to check if the address has permission to read the stream
  const streamr = new StreamrClient({
    auth: { ethereum: window.ethereum },
  });

  streamr.subscribe(streamId, (message) => {
    console.log(message);
  });
};
```

## Publishing data to the stream

### Authenticate automatically

Once you have created the stream, you can start publishing data to it.

The `StreamrClient` handles the authentification of your stream interactions. There are two ways of doing this, depending on your use case.

Let's say you wanted to publish the current BTC price to your stream every 3 seconds.
In the BTC price use case, you need the data to be signed automatically when publishing the data to the stream. (The alternative would be to have it manually signed by, e.g., Metamak)

For that, you would probably have a Node server running that executes a function looking like this:

:::note
Make sure you use the **same private key** you used to create the stream **or** one of the addresses you gave **`PUBLISH` permission in the `create-stream` script.**
:::

```ts
import StreamrClient from 'streamr-client';

export const startPublishingTo = (streamId: string) => {
  if (streamId !== '' && process.env.PRIVATE_KEY) {
    // Auth with private key to automate publishing instead of wallet provider
    const streamr = new StreamrClient({
      auth: {
        privateKey: process.env.PRIVATE_KEY,
      },
    });

    // Every 3 seconds you publish the current BTC price.
    const interval = setInterval(() => {
      streamr.publish(streamId, { btc_price: 67000 - Math.random() * 10 });
    }, 3000);
    return interval;
  } else {
    console.log('no streamId or private key');
  }
};
```

Now that you have added a private key, the client will automatically sign messages when you publish the price to the stream to authenticate your publishing address.

### Authenticate with browser wallet

What if you wanted your users to publish data without requiring them to expose their private key?

Instead of passing the private key, you would pass the wallet provider like this:

```ts
import StreamrClient from 'streamr-client';

export const startPublishingTo = (streamId: string) => {
  if (streamId !== '' && window.ethereum) {
    // Added browser wallet (e.g. Metamask) to check if the address has permission to write to the stream
    const streamr = new StreamrClient({
      auth: { ethereum: window.ethereum },
    });
    streamr.publish(streamId, { chatMsg: 'Hey Will, how are you?' });
  } else {
    console.log('no streamId or provider found.');
  }
};
```

## Use our React hooks

**If you'd like to use Streamr inside a React application, checkout the [Streamr React Client](https://www.npmjs.com/package/streamr-client-react).**

Todo: either create a seperate guide or add this section once the hooks work again

## All done 🎉

Congratulations! You accomplished:

- Created a stream and modified its access control
- Published data to the Streamr Network using the Streamr client
- Subscribed to flowing data on the Streamr Network using the Streamr client
- Authenticated your users via Metamask

If you had any problems along the way, please drop a message to the core team on the #dev channel of our [Discord](https://discord.gg/gZAm8P7hK8).
