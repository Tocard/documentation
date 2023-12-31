# Interface: Message

Represents a message in the Streamr Network.

## Properties

### content

• **content**: `unknown`

The message contents / payload.

___

### msgChainId

• **msgChainId**: `string`

Identifies the message chain the message was published to.

___

### publisherId

• **publisherId**: [`EthereumAddress`](../API Reference#ethereumaddress)

Publisher of message.

___

### sequenceNumber

• **sequenceNumber**: `number`

Tiebreaker used to determine order in the case of multiple messages within a message chain having the same exact timestamp.

___

### signature

• **signature**: `string`

Signature of message signed by publisher.

___

### streamId

• **streamId**: [`StreamID`](../API Reference#streamid)

Identifies the stream the message was published to.

___

### streamPartition

• **streamPartition**: `number`

The partition number the message was published to.

___

### timestamp

• **timestamp**: `number`

The timestamp of when the message was published.
