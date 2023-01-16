# Class: MetricsContext

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
| `definitions` | [`MetricsDefinition`](../API Reference#metricsdefinition) |

#### Returns

`void`

___

### createReportProducer

▸ **createReportProducer**(`onReport`, `interval`, `abortSignal`, `formatNumber?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `onReport` | (`report`: [`MetricsReport`](../API Reference#metricsreport)) => `void` |
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
