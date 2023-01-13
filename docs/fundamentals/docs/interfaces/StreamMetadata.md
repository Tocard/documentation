[Streamr Client - v7.2.1](../README.md) / StreamMetadata

# Interface: StreamMetadata

## Table of contents

### Properties

- [config](StreamMetadata.md#config)
- [description](StreamMetadata.md#description)
- [inactivityThresholdHours](StreamMetadata.md#inactivitythresholdhours)
- [partitions](StreamMetadata.md#partitions)
- [storageDays](StreamMetadata.md#storagedays)

## Properties

### config

• `Optional` **config**: `Object`

Defines the structure of the content (payloads) of messages in this stream.

**`Remarks`**

Not validated, purely for informational value.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `fields` | [`Field`](Field.md)[] |

___

### description

• `Optional` **description**: `string`

Human-readable description of this stream.

___

### inactivityThresholdHours

• `Optional` **inactivityThresholdHours**: `number`

After how many hours of inactivity (i.e. no messages) should a stream be considered inactive. Purely for
informational purposes.

___

### partitions

• **partitions**: `number`

Determines how many partitions this stream consist of.

___

### storageDays

• `Optional` **storageDays**: `number`

If this stream is assigned to storage nodes, how many days (at minimum) should the data be retained for.
