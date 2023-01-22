---
sidebar_position: 1
---

# What is a stream
A stream is simply a **sequence of data points in time**, i.e. an append only log. This is semantically equivalent to **topics** in traditional pub/sub networks.

:::tip Stream properties:
- Sequence of data points in time
- Any kind of real-time data can be stored in it
- The data will always be retrieved in the correct order
- Identified by unique stream IDs
:::

All of the data in the [Streamr network](usage/streamr-network.md) is contained inside individual streams. The data may originate, for example from machines on the factory floor, sensors in a smart city, in-house databases or systems, or from commercial streaming data feeds.

### Example stream

Let's say you have a temperature measurement device that publishes the **temperature of your house every second**. Then this is how your stream would look like:

| Timestamp               | Temperature |
| :---------------------- | :---------- |
| 2019-08-01 11:30:01.012 | 312.56      |
| 2019-08-01 11:30:02.239 | 312.49      |
| 2019-08-01 11:30:03.105 | 312.42      |
| 2019-08-01 11:30:04.122 | 312.64      |
| 2019-08-01 11:30:05.882 | 312.32      |

Your stream would grow over time and you can add more colums/data fields to your timestamp.

### Example data point

here's a data point in a stock market stream:

```json
{
  "Symbol": "PFFT",
  "EventType": 1,
  "OrderId": 6454321,
  "Direction": "Up",
  "Trade": { "Price": 118.55, "Size": 100 },
  "Ask": [
    { "Price": 118.6, "Size": 22500 },
    { "Price": 118.65, "Size": 18000 }
  ],
  "Bid": [
    { "Price": 118.5, "Size": 16500 },
    { "Price": 118.45, "Size": 11000 }
  ]
}
```
