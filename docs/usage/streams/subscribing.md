---
sidebar_position: 2
---

# Subscribing

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs groupId="environment">
  <TabItem value="light-node" label="Light node">

```ts
// Run a Streamr node right inside your JS app
const StreamrClient = require('streamr-client');

// Initialize the Client with an Ethereum account
// This account will need the publish permission on this stream to publish
const streamr = new StreamrClient({
  auth: {
    privateKey: 'ethereum-private-key',
  },
});

// Publish messages to this stream
streamr.publish(
  '0x0ebcccdefbc47043f996dc7bdcadbf44bc0ab480/streamr-chat/room/e133a612-0b26-426a-b751-99cc420ca31d',
  {
    hello: 'world',
  }
);
```

</TabItem>
<TabItem value="bn-websocket" label="Broker node websocket">

```ts
// Use your favourite language and Websocket library!
// https://github.com/streamr-dev/network/blob/main/packages/broker/plugins.md

// You'll want to URI-encode the stream id
const streamId = encodeURIComponent(
  '0x0ebcccdefbc47043f996dc7bdcadbf44bc0ab480/streamr-chat/room/e133a612-0b26-426a-b751-99cc420ca31d'
);

// Connect to the Websocket interface on your Streamr Broker node
const pub = ws.connect(`ws://127.0.0.1:7170/streams/${streamId}/publish`);

// Use the Broker node to publish JSON messages to the stream.
// Make sure that your Broker node has permission to publish on this stream
pub.send({
  hello: 'world',
});
```

</TabItem>

<TabItem value="bn-http" label="Broker node HTTP">

```ts
// Use your favourite language and HTTP library!
// https://github.com/streamr-dev/network/blob/main/packages/broker/plugins.md

// You'll want to URI-encode the stream id
const streamId = encodeURIComponent(
  '0x0ebcccdefbc47043f996dc7bdcadbf44bc0ab480/streamr-chat/room/e133a612-0b26-426a-b751-99cc420ca31d'
);

// Use the Broker node to publish JSON messages to the stream.
// Make sure that your Broker node has permission to publish on this stream
http.post(`http://127.0.0.1:7171/streams/${streamId}`, {
  hello: 'world',
});
```

</TabItem>

<TabItem value="bn-mqtt" label="Broker node MQTT">

```ts
// Use your favourite language and MQTT library!
// https://github.com/streamr-dev/network/blob/main/packages/broker/plugins.md

// Connect to MQTT interface on your Streamr node
mqtt.connect('mqtt://127.0.0.1:1883');

// Use the Broker node to publish JSON messages to the stream.
// Make sure that your Broker node has permission to publish on this stream
mqtt.publish(
  '0x0ebcccdefbc47043f996dc7bdcadbf44bc0ab480/streamr-chat/room/e133a612-0b26-426a-b751-99cc420ca31d',
  {
    hello: 'world',
  }
);
```

</TabItem>
</Tabs>

## Subscribe

<Tabs groupId="environment">
  
  <TabItem value="light-node" label="Light node">

```ts
// Run a Streamr node right inside your JS app
const StreamrClient = require('streamr-client');

// Initialize the Client with an Ethereum account
// If the stream is private then this account will need
// the subscribe permission on this stream to subscribe
const streamr = new StreamrClient({
  auth: {
    // If this stream is publicly subscribable you can skip this part
    // or use a throwaway accounts with:
    // privateKey: StreamrClient.generateEthereumAccount().privateKey,
    privateKey: 'ethereum-private-key',
  },
});

// Subscribe to the stream of messages
streamr.subscribe(
  '0x0ebcccdefbc47043f996dc7bdcadbf44bc0ab480/streamr-chat/room/e133a612-0b26-426a-b751-99cc420ca31d',
  (msg) => {
    // Handle incoming messages
  }
);
```

</TabItem>
<TabItem value="bn-websocket" label="Broker node websocket">

```ts
// Use your favourite language and Websocket library!
// https://github.com/streamr-dev/network/blob/main/packages/broker/plugins.md

// You'll want to URI-encode the stream id
const streamId = encodeURIComponent(
  '0x0ebcccdefbc47043f996dc7bdcadbf44bc0ab480/streamr-chat/room/e133a612-0b26-426a-b751-99cc420ca31d'
);

// Connect to the Websocket interface on your Streamr Broker node
const sub = ws.connect(`ws://127.0.0.1:7170/streams/${streamId}/subscribe`);

// Use the Broker node to subscribe to the stream.
// If this stream is private then make sure that your Broker node
// has subscribe permission to subscribe to this stream
sub.onmessage = (msg) => {
  // Handle incoming messages
};
```

</TabItem>

<TabItem value="bn-http" label="Broker node HTTP">

```ts
N / A;
```

</TabItem>

<TabItem value="bn-mqtt" label="Broker node MQTT">

```ts
// Use your favourite language and MQTT library!
// https://github.com/streamr-dev/network/blob/main/packages/broker/plugins.md

// Connect to MQTT interface on your Streamr Broker node
mqtt.connect('mqtt://127.0.0.1:1883');

// Use the Broker node to subscribe to the stream.
// If this stream is private then make sure that your Broker node
// has subscribe permission to subscribe to this stream
mqtt.subscribe(
  '0x0ebcccdefbc47043f996dc7bdcadbf44bc0ab480/streamr-chat/room/e133a612-0b26-426a-b751-99cc420ca31d',
  (msg) => {
    // Handle incoming messages
  }
);
```

</TabItem>
</Tabs>
