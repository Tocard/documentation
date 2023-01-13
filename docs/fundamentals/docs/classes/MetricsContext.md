[Streamr Client - v7.2.1](../README.md) / MetricsContext

# Class: MetricsContext

## Table of contents

### Constructors

- [constructor](MetricsContext.md#constructor)

### Methods

- [addMetrics](MetricsContext.md#addmetrics)
- [createReportProducer](MetricsContext.md#createreportproducer)
- [getMetric](MetricsContext.md#getmetric)

## Constructors

### constructor

• **new MetricsContext**()

## Methods

### addMetrics

▸ **addMetrics**(`namespace`, `definitions`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `namespace` | `string` |
| `definitions` | [`MetricsDefinition`](../README.md#metricsdefinition) |

#### Returns

`void`

___

### createReportProducer

▸ **createReportProducer**(`onReport`, `interval`, `abortSignal`, `formatNumber?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `onReport` | (`report`: [`MetricsReport`](../README.md#metricsreport)) => `void` |
| `interval` | `number` |
| `abortSignal` | `AbortSignal` |
| `formatNumber?` | (`value`: `number`) => `string` |

#### Returns

`void`

___

### getMetric

▸ **getMetric**(`id`): `undefined` \| [`Metric`](Metric.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`undefined` \| [`Metric`](Metric.md)
