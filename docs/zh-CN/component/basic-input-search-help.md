---
title: BasicInputSearchHelp
lang: zh-CN
---

# BasicInputSearchHelp

- 此组件有 2 个关键属性，`v-model`和`v-model:displayValue`即用户选择数据的 value 和 label 值
- 需要注意的是，`v-model`和`v-model:displayValue`需要配合后端一并存储到后端，用于后续页面回显使用。

## 基础用法

:::demo

basic-input-search-help/basic

:::

## 多选

:::demo 可通过`selection-type="'checkbox'"` 来设置成多选模式

basic-input-search-help/selection-mulit

:::

## 使用插槽

:::demo

basic-input-search-help/slots

:::

## 使用校验

- 必填校验 可通过`Schema`的`required`属性来设置

- 其他校验可在`request`回调中实现

:::demo

basic-input-search-help/validate

:::

## 事件拦截

:::demo 通过 `before-open`和`before-submit`来控制 dialog 打开预 dialog 选取确认之前的事件拦截

basic-input-search-help/events

:::

## 选取数据之后修改为添加模式（默认是设置模式）

- 有时业务需要保留历史选取数据，在选取新数据之后不要删除之前的历史数据

- 通过`:pick-type="'append'"` 属性来设置即可

- 需要注意的是，如果用户选取重复的数据时，组件内部会做去重操作。

:::demo

basic-input-search-help/pickType

:::

## 删除数据的交互修改为勾选删除

- 有时业务需要一部分或者自行勾选数据做删除操作

- 通过`:delete-type="'pick'"` 属性来设置即可

:::demo

basic-input-search-help/deleteType

:::

## BasicInputSearchHelp API

### BasicInputSearchHelp Attributes

| 名称                 | 说明                                                                                                                                   | 类型                                   | 默认值     | 必填 |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------- | ---------- | ---- |
| v-model:             | 值                                                                                                                                     | Array                                  | —          | 是   |
| v-model:displayValue | 在回显场景时，可使用此属性来回填显示数据                                                                                               | Array                                  | —          | 是   |
| value-key            | 数据选取时，指定`v-model`返回的数据 value                                                                                              | String                                 | —          | 是   |
| display-key          | 数据选取时，指定输入框中显示的值                                                                                                       | String                                 | —          | 是   |
| request              | 请求后端接口的回调                                                                                                                     | ^[Function]`(params) => Promise`       | —          | 是   |
| schema               | 基本 Schema 项描述                                                                                                                     | ^[Object]`SchemaProps`                 | —          | 是   |
| condition-schema     | 搜索表单项描述                                                                                                                         | ^[Object, Array]`SchemaProps`          | —          | 否   |
| table-schema         | 表格表单项描述                                                                                                                         | ^[Object, Array]`SchemaProps`          | —          | 否   |
| condition-ui-schema  | 搜索表单项 UI 相关描述                                                                                                                 | ^[Object]`Record<string, any>`         | —          | 否   |
| table-ui-schema      | 表格项 UI 相关描述                                                                                                                     | ^[Object]`Record<string, any>`         | —          | 否   |
| before-submit        | 提交之前的回调                                                                                                                         | ^[Function]`(selectedList) => Promise` | —          | 否   |
| selection-type       | 选取数据的方式                                                                                                                         | ^[String]`radio \| checkbox`           | —          | 否   |
| is-reserve           | 多选模式下：是否保留 CheckBox 选中状态，需要配合 row-key 一起使用                                                                      | Boolean                                | —          | 否   |
| row-key              | 数据行唯一标识字段                                                                                                                     | String                                 | —          | 否   |
| auto-search          | 当打开 dialog 时是否自动搜索                                                                                                           | Boolean                                | true       | 否   |
| append-to-body       | Dialog 自身是否插入至 body 元素上。嵌套的 Dialog 必须指定该属性并赋值为 true                                                           | Boolean                                | true       | 否   |
| show-confirm         | 是否显示`选取确认`按钮                                                                                                                 | Boolean                                | true       | 否   |
| dialog-width         | dialog 的宽度                                                                                                                          | String                                 | '80%'      | 否   |
| dialog-title         | dialog 的标题                                                                                                                          | String                                 | '选择数据' | 否   |
| show-page            | 是否显示`分页器`                                                                                                                       | Boolean                                | true       | 否   |
| selection-config     | 勾选组件的选项，依赖 vxe-table 的 checkbox-config                                                                                      | Object                                 | —          | 否   |
| label-mode           | 是否开启 label 只读模式,默认跟随全局控制                                                                                               | Boolean                                | false      | 否   |
| disabled             | 是否不可用(包含了删除按钮)                                                                                                             | Boolean                                | false      | 否   |
| pick-type            | 选取数据之后设置数据的方式`set`和`append` ，`set`为直接覆盖之前选取的数据，`append`为不删除一直添加，selection-type 为`checkbox`时可用 | ^[String]`set \| append`               | set        | 否   |
| delete-type          | 删除数据方式`all`和`pick` ，`all`为直接删除所有数据，`pick`为弹出一个 dialog 由用户自行选取删除，selection-type 为`checkbox`时可用     | ^[String]`all \| pick`                 | all        | 否   |

### BasicInputSearchHelp Events

| 名称   | 说明                       | 类型                                              |
| ------ | -------------------------- | ------------------------------------------------- |
| submit | 操作数据选取活删除时的回调 | ^[Function]`(list:Array,operType:String) => void` |

### BasicInputSearchHelp Exposes

| 方法名 | 说明 | 类型 |
| ------ | ---- | ---- |

### BasicInputSearchHelp Slots

| 插槽名             | 说明                     |
| ------------------ | ------------------------ |
| condition.[字段名] | 对应搜索表单项自定义插槽 |
| table.[字段名]     | 对应表格项自定义插槽     |
| controlButtons     | 对应搜索表单按钮内容     |
