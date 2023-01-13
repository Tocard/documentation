[Streamr Client - v7.2.1](../README.md) / Message

# Interface: Message

Represents a message in the Streamr Network.

## Table of contents

### Properties

- [content](Message.md#content)
- [msgChainId](Message.md#msgchainid)
- [publisherId](Message.md#publisherid)
- [sequenceNumber](Message.md#sequencenumber)
- [signature](Message.md#signature)
- [streamId](Message.md#streamid)
- [streamPartition](Message.md#streampartition)
- [timestamp](Message.md#timestamp)

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

• **publisherId**: [`EthereumAddress`](../README.md#ethereumaddress)

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

• **streamId**: [`StreamID`](../README.md#streamid)

Identifies the stream the message was published to.

___

### streamPartition

• **streamPartition**: `number`

The partition number the message was published to.

___

### timestamp

• **timestamp**: `number`

The timestamp of when the message was published.
