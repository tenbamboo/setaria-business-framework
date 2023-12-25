## JsonUiSchema

- 上一章节，介绍了`JsonSchema`的内容，只是描述里接口要使用的字段和少量的组件定义，但前端对 UI 层面的也需要控制，比如 disabled、hidden 这些属性。

- 这一章节介绍从 UI 层面来控制组件内容

### 用法

- 对应相关`JsonSchema`组件都暴露了相关`UI`的属性来对每一项内容做控制，如：

- 大家需要注意下`'ui:options'` 这个属性,此属性可直接对接 Element 组件的 prop 内容,比如`picker-options` 、`row`

```javascript
import { SchemaUiPropsByTable } from 'schema-components'
const uiSchema: Record<string, SchemaUiPropsByTable> = {
  userName: {
    visible: true, //表格列组件与表单模式下是否显示
    width: 100, // 表格列组件 控制表格Item宽度
    sortable: true, // 表格列组件 是否在表格列时可排序
    fixed: 'right', //表格列组件 是否固定左侧或右侧
    // formatter:  // 表格列组件 格式化当前单元格信息
    columnVisible: true, //表格列组件 是否显示
    disabled: false, //表单模式下 是否被禁用
    readonly: false, //表单模式下 是否只读
    formItemVisible: true, // /表单模式下是否显示
    colspan: 4, // 手动占用4个格子
    options: {
      // 透传相关组件的属性
      'picker-options': {
        // 控制组件中的属性,这块控制了datepicker的picker-options属性值,当然也可控制其他属性
        disabledDate: (time) => {
          return Date.now() > time.getTime()
        },
      },
    },
  },
}
```

### JsonSchema Util

- 框架提供了一些 Util 方法，来快速生成一些内容,详情文档[查看](/zh-CN/component/schema-ui-utils.html)

```javascript
import {
  addRequired,
  removeRequired,
  addDisabled,
  removeDisabled,
  addFormItemHidden,
  removeFormItemHidden,
  addHidden,
  removeHidden,
} from 'setaria-business-framework'
// 预先定义好Demo使用的schema 和uiSchema
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
  status: {},
  username: {},
  fullname: {},
  sex: {},
}

addRequired(schema, ['fullname', 'sex']) // 设置必填

removeRequired(schema, ['status', 'username']) // 设置非必填

addDisabled(uiSchema, ['status', 'username']) // 设置字段不可用

removeDisabled(uiSchema, ['fullname', 'sex']) // 设置字段可用

addFormItemHidden(uiSchema, ['status', 'username']) // 设置字段在表单状态下隐藏

removeFormItemHidden(uiSchema, ['fullname', 'sex']) // 移除字段在表单状态下隐藏

addHidden(uiSchema, ['status', 'username']) // 设置字段在表单&表格状态下隐藏

removeHidden(uiSchema, ['fullname', 'sex']) // 移除字段在表单&表格状态下隐藏
```
