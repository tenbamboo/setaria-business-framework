### getSchema

通过 Swagger Json Schema 获取实体信息

此方法可通过 Swagger Json Schema 自动生成的 json 文件，来生成前端组件所使用的数据格式。

### 参数说明

| 参数      | 说明                       | 类型   |
| --------- | -------------------------- | ------ |
| fileName  | 对应 swagger 生成的文件名  | String |
| className | 对应文件中实体类的属性 key | String |

```javascript
import { getSchema } from 'setaria-business-framework'

const schema = getSchema('Demo', 'AutoSignOffConfig')
```

### getSchemaByKeyArray

通过给定的 arr 数据从 schema 中摘取对应的 JSON schema 数据并返回重新组织的 schmea 对象

一般用于 getSchema('Demo', 'AutoSignOffConfig')获取数据后，只想在这个基础上获取几个属性时使用。

### 参数说明

| 参数     | 说明               | 类型   |
| -------- | ------------------ | ------ |
| schema   | Schema 对象        | Object |
| operKeys | 需要操作的属性 Key | Array  |

```javascript
import { getSchema, getSchemaByKeyArray } from 'setaria-business-framework'

const baseSchema = getSchema('Claim', 'GrantsCalcProcessVo')
// 从schema只摘取以下数据并返回重新组织的schmea对象
getSchemaByKeyArray(baseSchema, [
  'transactionDateMin',
  'transactionDateMax',
  'signDateMin',
  'signDateMax',
])
```

### createDefaultObjectBySchema

通过 schmea 创建属性的默认值

此方法一般配合`getSchemaByApiKey`方法一起使用

### 参数说明

| 参数   | 说明        | 类型   |
| ------ | ----------- | ------ |
| schema | schema 对象 | Object |

```javascript
import {
  getSchema,
  createDefaultObjectBySchema,
} from 'setaria-business-framework'
const schema = getSchema('Demo', 'AutoSignOffConfig')
const data = createDefaultObjectBySchema(schema)
```

<!-- ### schemaFiledCustomAppend

批量在属性下增加对应的内容，比如批量增加 { format: 'date' }（转换为日期组件）

需要注意的是，此方法需要引入`util`

### 参数说明

| 参数     | 说明               | 类型   |
| -------- | ------------------ | ------ |
| self     | Vue 上下文对象     | Object |
| schema   | Schema 对象        | Object |
| operKeys | 需要操作的属性 Key | Array  |
| operInfo | 需要赋值的内容     | Object |

```javascript
// 引入
import { SchemaUtils } from 'setaria-business-framework'
;/ / / 批量增加日期属性
SchemaUtils.schemaFiledCustomAppend(
  this,
  schema,
  [
    'transactionDateMin',
    'transactionDateMax',
    'signDateMin',
    'signDateMax',
    // 'amountMin',
    // 'amountMax',
  ],
  { format: 'date' }
)
``` -->

<!-- ### schemaFiledUiSet

批量增加 UI 的属性，比如可清空等属性

需要注意的是，此方法需要引入`util`

### 参数说明

| 参数          | 说明             | 类型   |
| ------------- | ---------------- | ------ |
| self          | Vue 上下文对象   | Object |
| conditionKeys | 需要操作的属性集 | Array  |
| uiSchema      | UiSchema 对象    | Object |
| operObj       | 需要赋值的内容   | Object |

```javascript
// 引入
import { SchemaUtils } from 'setaria-business-framework'

// 以下代码把'userName','userno' 两个属性增加了可清空的功能
SchemaUtils.schemaFiledUiSet(
  this,
  ['userName', 'userno'],
  this.conditionUiSchema,
  {
    clearable: true,
  }
)

// 以下代码把'userName','userno' 两个属性增加了只读的功能
SchemaUtils.schemaFiledUiSet(
  this,
  ['userName', 'userno'],
  this.conditionUiSchema,
  {
    readonly: true,
  }
)

// 以下代码把'userName','userno' 两个属性增加了不可用的功能
SchemaUtils.schemaFiledUiSet(
  this,
  ['userName', 'userno'],
  this.conditionUiSchema,
  {
    disabled: true,
  }
)
``` -->

<!-- ### schemaFiledOneOfSet

在一个属性下增加下拉的功能

需要注意的是，此方法需要引入`util`

### 参数说明

| 参数      | 说明                                                                | 类型   |
| --------- | ------------------------------------------------------------------- | ------ |
| self      | Vue 上下文对象                                                      | Object |
| schema    | Schema 对象                                                         | Object |
| operKey   | 需要操作的属性 Key                                                  | String |
| operArray | 需要赋值的内容                                                      | Array  |
| operConst | operArray 如果返回的是业务类数据时，可使用此数据来指定 label、value | Object |

```javascript
// 引入
import { SchemaUtils } from 'setaria-business-framework'

// 动态赋值下拉
SchemaUtils.schemaFiledOneOfSet(this, schema, 'direction', [
  {
    const: '1',
    title: '交易方向1',
  },
  {
    const: '2',
    title: '交易方向2',
  },
])

// status 动态赋值下拉且使用自定义字段
SchemaUtils.schemaFiledOneOfSet(
  this,
  schema,
  'status',
  [
    {
      statusCode: '1',
      statusName: '状态1',
    },
    {
      statusCode: '1',
      statusName: '状态1',
    },
  ],
  { const: 'statusCode', title: 'statusName' }
)
``` -->

### replaceSchemaLabels

批量替换 schema 中的 label 内容

### 参数说明

| 参数   | 说明                 | 类型   |
| ------ | -------------------- | ------ |
| schema | Schema 对象          | Object |
| labels | 需要替换的内容键值对 | Object |

```javascript
// 引入
import { replaceSchemaLabels } from 'setaria-business-framework'

replaceSchemaLabels(this, schema, {
  applyUserNum: '我是新的label内容',
})
```

### replaceLabelsToI18n

批量国际化 替换 schmea 的 label 内容

### 参数说明

| 参数   | 说明                    | 类型   |
| ------ | ----------------------- | ------ |
| schema | Schema 对象             | Object |
| prefix | 国际化 Key 中的前置内容 | String |

```javascript
// 引入
import { replaceLabelsToI18n } from 'setaria-business-framework'

replaceLabelsToI18n(schema, 'Role')
```

<!-- ### calculateSchema

根据 schemaArray 数组及 excludeSchemaArray 计算真实的 schema

### 参数说明

| 参数               | 说明                               | 类型   |
| ------------------ | ---------------------------------- | ------ |
| schema             | Schema 对象                        | Object |
| schemaArray        | 需要从 schema 中直接拿取的数据 key | Array  |
| excludeSchemaArray | 需要从 schema 中排除的数据 key     | Array  |

```javascript
// 引入
import { SchemaUtils } from 'setaria-business-framework'

// 从全量 schema 中 获取schemaArray（可用的）schema，并排除excludeSchemaArray schema信息
const baseSchema = getSchema('Claim', 'GrantsCalcProcessVo')

SchemaUtils.calculateSchema(
  baseSchema,
  ['transactionDateMin', 'transactionDateMax', 'signDateMin', 'signDateMax'],
  ['test2']
)
``` -->
