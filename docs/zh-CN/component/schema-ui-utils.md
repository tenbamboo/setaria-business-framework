---
title: SchemaUiUtils
lang: zh-CN
---

# SchemaUiUtils

<!-- ## disabled

快捷设置 UI 内容为表单项不可用

```javascript
import { SchemaUiUtils } from 'setaria-business-framework'

const uiSchema = {
  userName: {
    ...SchemaUiUtils.disabled(),
  },
}
```

## unDisabled

快捷设置 UI 内容为表单项可用

```javascript
import { SchemaUiUtils } from 'setaria-business-framework'

const uiSchema = {
  userName: {
    ...SchemaUiUtils.unDisabled(),
  },
}
``` -->

<!-- ## hidden

快捷设置 UI 内容为表单&表格项隐藏

```javascript
import { SchemaUiUtils } from 'setaria-business-framework'

const uiSchema = {
  userName: {
    ...SchemaUiUtils.hidden(),
  },
}
```

## unHidden

快捷设置 UI 内容为表单&表格项不隐藏

```javascript
import { SchemaUiUtils } from 'setaria-business-framework'

const uiSchema = {
  userName: {
    ...SchemaUiUtils.unHidden(),
  },
}
``` -->

<!-- ## formItemHidden

快捷设置 UI 内容为表单项隐藏

```javascript
import { SchemaUiUtils } from 'setaria-business-framework'

const uiSchema = {
  userName: {
    ...SchemaUiUtils.formItemHidden(),
  },
}
```

## formItemUnHidden

快捷设置 UI 内容为表单项不隐藏

```javascript
import { SchemaUiUtils } from 'setaria-business-framework'

const uiSchema = {
  userName: {
    ...SchemaUiUtils.formItemUnHidden(),
  },
}
``` -->

<!-- ## tableHidden

快捷设置 UI 内容为表格项隐藏

### 参数说明

| 参数      | 说明                             | 类型   |
| --------- | -------------------------------- | ------ |
| basevalue | 既有数据，做 megre 的内容,非必填 | Object |

```javascript
import { SchemaUiUtils } from 'setaria-business-framework'

const baseValue = {
  'ui:options': {
    minWidth: 120,
  },
}

const uiSchema = {
  userName: {
    ...SchemaUiUtils.tableHidden(),
  },
  userName2: {
    // 此方法底层是占用 'ui:options' 属性
    // 如果你这块定义了其他'ui:options' 的属性,需要把此内容传递给方法
    ...SchemaUiUtils.tableHidden(baseValue),
  },
}
```

## tableUnHidden

快捷设置 UI 内容为表格项不藏

### 参数说明

| 参数      | 说明                      | 类型   |
| --------- | ------------------------- | ------ |
| basevalue | 既有数据，做 megre 的内容 | Object |

```javascript
import { removeTableItemHidden } from 'setaria-business-framework'

const baseValue = {
  'ui:options': {
    minWidth: 120,
  },
}

const uiSchema = {
  userName: {
    ...SchemaUiUtils.tableUnHidden(),
  },
  userName2: {
    // 此方法底层是占用 'ui:options' 属性
    // 如果你这块定义了其他'ui:options' 的属性,需要把此内容传递给方法
    ...SchemaUiUtils.tableUnHidden(baseValue),
  },
}
``` -->

<!-- ## columnMinWidth

快捷设置表格列的最小宽度

### 参数说明

| 参数      | 说明                             | 类型          |
| --------- | -------------------------------- | ------------- |
| minWidth  | 最小宽度值                       | String,Number |
| basevalue | 既有数据，做 megre 的内容,非必填 | Object        |

```javascript
import { SchemaUiUtils } from 'setaria-business-framework'

const baseValue = {
  'ui:options': {
    visible: false,
  },
}

const uiSchema = {
  userName: {
    ...SchemaUiUtils.columnMinWidth(150),
  },
  userName2: {
    // 此方法底层是占用 'ui:options' 属性
    // 如果你这块定义了其他'ui:options' 的属性,需要把此内容传递给方法
    ...SchemaUiUtils.columnMinWidth(150, baseValue),
  },
}
``` -->

## addRequired

批量操作 schema 对象中的必填字段

### 参数说明

| 参数     | 说明               | 类型   |
| -------- | ------------------ | ------ |
| schema   | Schema 对象        | Object |
| operKeys | 需要操作的属性 Key | Array  |

```javascript
import { addRequired } from 'setaria-business-framework'

const schema = {
  properties: {
    fullname: { type: 'string', title: '用户名' },
    sex: { type: 'string', title: '性别' },
    status: {
      type: 'integer',
      title: '状态',
    },
    username: { type: 'string', title: '用户姓名' },
    usernum: { type: 'string', title: '用户号' },
    whomodified: { type: 'string', title: '编辑人' },
    workDate: {
      type: 'string',
      description: '',
      format: 'date-time',
      title: '工作时间',
    },
  },
}

addRequired(schema, ['fullname', 'sex'])
```

## removeRequired

批量操作 schema 对象`移除`必填字段

### 参数说明

| 参数     | 说明               | 类型   |
| -------- | ------------------ | ------ |
| schema   | Schema 对象        | Object |
| operKeys | 需要操作的属性 Key | Array  |

```javascript
import { removeRequired } from 'setaria-business-framework'

const schema = {
  properties: {
    fullname: { type: 'string', title: '用户名' },
    sex: { type: 'string', title: '性别' },
    status: {
      type: 'integer',
      title: '状态',
    },
    username: { type: 'string', title: '用户姓名' },
    usernum: { type: 'string', title: '用户号' },
    whomodified: { type: 'string', title: '编辑人' },
    workDate: {
      type: 'string',
      description: '',
      format: 'date-time',
      title: '工作时间',
    },
  },
}

removeRequired(schema, ['fullname', 'sex'])
```

## addDisabled

批量操作 ui-schema 对象中设置不可用字段

### 参数说明

| 参数     | 说明               | 类型   |
| -------- | ------------------ | ------ |
| uiSchema | Schema 对象        | Object |
| operKeys | 需要操作的属性 Key | Array  |

```javascript
import { addDisabled } from 'setaria-business-framework'

const schema = {
  properties: {
    fullname: { type: 'string', title: '用户名' },
    sex: { type: 'string', title: '性别' },
    status: {
      type: 'integer',
      title: '状态',
    },
    username: { type: 'string', title: '用户姓名' },
    usernum: { type: 'string', title: '用户号' },
    whomodified: { type: 'string', title: '编辑人' },
    workDate: {
      type: 'string',
      description: '',
      format: 'date-time',
      title: '工作时间',
    },
  },
}

// 初始化默认值
const uiSchema = {
  fullname: {
    disabled: false,
  },
  sex: {
    disabled: false,
  },
}
addDisabled(uiSchema, ['fullname', 'sex'])
```

## removeDisabled

批量操作 ui-schema 对象中设置`移除`不可用字段

### 参数说明

| 参数     | 说明               | 类型   |
| -------- | ------------------ | ------ |
| uiSchema | Schema 对象        | Object |
| operKeys | 需要操作的属性 Key | Array  |

```javascript
import { removeDisabled } from 'setaria-business-framework'

const schema = {
  properties: {
    fullname: { type: 'string', title: '用户名' },
    sex: { type: 'string', title: '性别' },
    status: {
      type: 'integer',
      title: '状态',
    },
    username: { type: 'string', title: '用户姓名' },
    usernum: { type: 'string', title: '用户号' },
    whomodified: { type: 'string', title: '编辑人' },
    workDate: {
      type: 'string',
      description: '',
      format: 'date-time',
      title: '工作时间',
    },
  },
}

// 初始化默认值
const uiSchema = {
  fullname: {
    disabled: true,
  },
  sex: {
    disabled: true,
  },
}
removeDisabled(uiSchema, ['fullname', 'sex'])
```

## addHidden

批量操作 ui-schema 对象中设置隐藏字段

### 参数说明

| 参数     | 说明               | 类型   |
| -------- | ------------------ | ------ |
| uiSchema | Schema 对象        | Object |
| operKeys | 需要操作的属性 Key | Array  |

```javascript
import { addHidden } from 'setaria-business-framework'

const schema = {
  properties: {
    fullname: { type: 'string', title: '用户名' },
    sex: { type: 'string', title: '性别' },
    status: {
      type: 'integer',
      title: '状态',
    },
    username: { type: 'string', title: '用户姓名' },
    usernum: { type: 'string', title: '用户号' },
    whomodified: { type: 'string', title: '编辑人' },
    workDate: {
      type: 'string',
      description: '',
      format: 'date-time',
      title: '工作时间',
    },
  },
}
const uiSchema = {
  fullname: {
    visible: true,
  },
  sex: {
    visible: true,
  },
}
addHidden(uiSchema, ['fullname', 'sex'])
```

## removeHidden

批量操作 ui-schema 对象中设置`移除`隐藏字段

### 参数说明

| 参数     | 说明               | 类型   |
| -------- | ------------------ | ------ |
| uiSchema | Schema 对象        | Object |
| operKeys | 需要操作的属性 Key | Array  |

```javascript
import { removeHidden } from 'setaria-business-framework'

const schema = {
  properties: {
    fullname: { type: 'string', title: '用户名' },
    sex: { type: 'string', title: '性别' },
    status: {
      type: 'integer',
      title: '状态',
    },
    username: { type: 'string', title: '用户姓名' },
    usernum: { type: 'string', title: '用户号' },
    whomodified: { type: 'string', title: '编辑人' },
    workDate: {
      type: 'string',
      description: '',
      format: 'date-time',
      title: '工作时间',
    },
  },
}
const uiSchema = {
  fullname: {
    visible: false,
  },
  sex: {
    visible: false,
  },
}
removeHidden(uiSchema, ['fullname', 'sex'])
```

## addFormItemHidden

批量操作 ui-schema 对象中设置表单状态下隐藏字段

### 参数说明

| 参数     | 说明               | 类型   |
| -------- | ------------------ | ------ |
| uiSchema | Schema 对象        | Object |
| operKeys | 需要操作的属性 Key | Array  |

```javascript
import { addFormItemHidden } from 'setaria-business-framework'

const schema = {
  properties: {
    fullname: { type: 'string', title: '用户名' },
    sex: { type: 'string', title: '性别' },
    status: {
      type: 'integer',
      title: '状态',
    },
    username: { type: 'string', title: '用户姓名' },
    usernum: { type: 'string', title: '用户号' },
    whomodified: { type: 'string', title: '编辑人' },
    workDate: {
      type: 'string',
      description: '',
      format: 'date-time',
      title: '工作时间',
    },
  },
}
const uiSchema = {
  fullname: {
    formItemVisible: true, // 设置表单状态下，不隐藏
  },
  sex: {
    formItemVisible: false, // 设置表单状态下，隐藏
  },
}
addFormItemHidden(uiSchema, ['fullname', 'sex'])
```

## removeFormItemHidden

批量操作 ui-schema 对象中设置`移除`设置表单状态的隐藏字段

### 参数说明

| 参数     | 说明               | 类型   |
| -------- | ------------------ | ------ |
| uiSchema | Schema 对象        | Object |
| operKeys | 需要操作的属性 Key | Array  |

```javascript
import { removeFormItemHidden } from 'setaria-business-framework'

const schema = {
  properties: {
    fullname: { type: 'string', title: '用户名' },
    sex: { type: 'string', title: '性别' },
    status: {
      type: 'integer',
      title: '状态',
    },
    username: { type: 'string', title: '用户姓名' },
    usernum: { type: 'string', title: '用户号' },
    whomodified: { type: 'string', title: '编辑人' },
    workDate: {
      type: 'string',
      description: '',
      format: 'date-time',
      title: '工作时间',
    },
  },
}
const uiSchema = {
  fullname: {
    formItemVisible: true, // 设置表单状态下，不隐藏
    // ...SchemaUiUtils.formItemHidden() // 设置表单状态下，隐藏
  },
  sex: {
    formItemVisible: false, // 设置表单状态下，隐藏
  },
}
removeFormItemHidden(uiSchema, ['fullname', 'sex'])
```

## addTableItemHidden

批量操作 ui-schema 对象中设置表格状态下隐藏字段

### 参数说明

| 参数     | 说明               | 类型   |
| -------- | ------------------ | ------ |
| uiSchema | Schema 对象        | Object |
| operKeys | 需要操作的属性 Key | Array  |

```javascript
import { addTableItemHidden } from 'setaria-business-framework'

const schema = {
  properties: {
    fullname: { type: 'string', title: '用户名' },
    sex: { type: 'string', title: '性别' },
    status: {
      type: 'integer',
      title: '状态',
    },
    username: { type: 'string', title: '用户姓名' },
    usernum: { type: 'string', title: '用户号' },
    whomodified: { type: 'string', title: '编辑人' },
    workDate: {
      type: 'string',
      description: '',
      format: 'date-time',
      title: '工作时间',
    },
  },
}
const uiSchema = {
  fullname: {
    columnVisible: true, // 设置表单状态下，不隐藏
  },
  sex: {
    columnVisible: false, // 设置表单状态下，隐藏
  },
}
addTableItemHidden(uiSchema, ['fullname', 'sex'])
```

## removeTableItemHidden

批量操作 ui-schema 对象中设置`移除`设置表单状态的隐藏字段

### 参数说明

| 参数     | 说明               | 类型   |
| -------- | ------------------ | ------ |
| uiSchema | Schema 对象        | Object |
| operKeys | 需要操作的属性 Key | Array  |

```javascript
import { removeTableItemHidden } from 'setaria-business-framework'

const schema = {
  properties: {
    fullname: { type: 'string', title: '用户名' },
    sex: { type: 'string', title: '性别' },
    status: {
      type: 'integer',
      title: '状态',
    },
    username: { type: 'string', title: '用户姓名' },
    usernum: { type: 'string', title: '用户号' },
    whomodified: { type: 'string', title: '编辑人' },
    workDate: {
      type: 'string',
      description: '',
      format: 'date-time',
      title: '工作时间',
    },
  },
}
const uiSchema = {
  fullname: {
    formItemVisible: true, // 设置表单状态下，不隐藏
    // ...SchemaUiUtils.formItemHidden() // 设置表单状态下，隐藏
  },
  sex: {
    formItemVisible: false, // 设置表单状态下，隐藏
  },
}
removeTableItemHidden(uiSchema, ['fullname', 'sex'])
```

## formatPriceType

快捷设置 scehma 内容为为货币类型

```javascript
import { formatPriceType } from 'setaria-business-framework'

const schema = {
   "UserAccount": {
    "title": "User",
    "required": [],
    "type": "object",
    "properties": {
      "accountMoney": { // 金额型
        "title": "账号金额"
        ...formatPriceType, // Util提供方法
      },
    },
    "description": ""
  },
}
```

## formatDateTimeType

快捷设置 scehma 内容为为日期时间类型

```javascript
import { formatDateTimeType } from 'setaria-business-framework'

const schema = {
  UserAccount: {
    title: 'User',
    required: [],
    type: 'object',
    properties: {
      createdTime: {
        // 日期时间型
        type: 'string',
        title: '创建时间',
        ...formatDateTimeType,
      },
    },
    description: '',
  },
}
```

## formatDateType

快捷设置 scehma 内容为为日期类型

```javascript
import { formatDateType } from 'setaria-business-framework'

const schema = {
  UserAccount: {
    title: 'User',
    required: [],
    type: 'object',
    properties: {
      createdTime: {
        // 日期型
        type: 'string',
        title: '创建时间',
        ...formatDateType,
      },
    },
    description: '',
  },
}
```

<!-- ## getIndexItem

快捷获取表格序号功能的schemaItem

```javascript
import { SchemaUiUtils } from 'setaria-business-framework'

const schema = {
   "UserAccount": {
    "title": "User",
    "required": [],
    "type": "object",
    "properties": {
      ...SchemaUiUtils.getIndexItem(),
       "createdTime": { // 日期型
        "type": "string",
        "title": "创建时间",
      },
    },
    "description": ""
  },
}
``` -->

<!-- ## getStartDateOptions

获取datePicker的开始与结束时间的禁用逻辑(开始逻辑)

### 参数说明

| 参数      | 说明             | 类型   |
| --------- | ---------------- | ------ |
| self      | this上下文内容   | Object |
| keyString | 结束日期的变量名 | String |



```javascript
import { SchemaUiUtils } from 'setaria-business-framework'


    <fssc-search-page
      ref="table"
      ....
      :condition-ui-schema="conditionUiSchema"
      ...
    >


const conditionUiSchema={
  startDate: {
    // 这有2个参数
    //  第一个参数：this上下文内容
    //  第二个参数：结束日期的变量名
    ...SchemaUiUtils.getStartDateOptions(this, 'conditionData.endDate'),
  },
}
``` -->

<!-- ## getEndDateOptions

获取datePicker的开始与结束时间的禁用逻辑(开始逻辑)


### 参数说明

| 参数      | 说明             | 类型   |
| --------- | ---------------- | ------ |
| self      | this上下文内容   | Object |
| keyString | 开始日期的变量名 | String |


```javascript
import { SchemaUiUtils } from 'setaria-business-framework'


    <fssc-search-page
      ref="table"
      ....
      :condition-ui-schema="conditionUiSchema"
      ...
    >


const conditionUiSchema={
  endDate: {
    // 这有2个参数
    //  第一个参数：this上下文内容
    //  第二个参数：开始日期的变量名
    ...SchemaUiUtils.getEndDateOptions(this, 'conditionData.startDate'),
  },
}
``` -->
