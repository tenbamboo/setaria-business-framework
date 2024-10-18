---
title: BasicSearchHelp
lang: zh-CN
---

# BasicSearchHelp

## 基础用法

:::demo

basic-search-help/basic

:::

## 多选

:::demo 通过修改`selection-type`为`checkbox`

basic-search-help/selection-mulit

:::

## 多选&翻页记忆功能

:::demo 通过修改`is-reserve`为`true`和需要配合`row-key`来标识当前行数据的`唯一键`

basic-search-help/selection-mulit-isreserve

:::

## 控制提交

:::demo 通过`before-submit`方法来返回`Boolean`或者`Promise`来告知是否可以提交

basic-search-help/before-submit

:::

## 插槽使用

:::demo 通过`table.[插槽名]`方式注入到表格组件中，通过回`condition.`方式注入到搜索组件中

basic-search-help/slot

:::

## 搜索校验

- 必填校验 可通过`Schema`的`required`属性来设置

- 其他校验可在`request`回调中实现

:::demo 通过`设置`方式注入到表格组件中，通过回`condition.`方式注入到搜索组件中

basic-search-help/validate

:::

## BasicSearchHelp API

### BasicSearchHelp Attributes

此组件已继承`el-select`和`remote-select`，可使用以上组件所有属性。

| 名称                | 说明                                                                         | 类型                                   | 默认值     | 必填 |
| ------------------- | ---------------------------------------------------------------------------- | -------------------------------------- | ---------- | ---- |
| v-model:visible     | 控制显示                                                                     | Boolean                                | —          | 是   |
| request             | 请求后端接口的回调                                                           | ^[Function]`(params) => Promise`       | —          | 是   |
| schema              | 基本 Schema 项描述                                                           | ^[Object]`SchemaProps`                 | —          | 是   |
| condition-schema    | 搜索表单项描述                                                               | ^[Object, Array]`SchemaProps`          | —          | 否   |
| table-schema        | 表格表单项描述                                                               | ^[Object, Array]`SchemaProps`          | —          | 否   |
| condition-ui-schema | 搜索表单项 UI 相关描述                                                       | ^[Object]`Record<string, any>`         | —          | 否   |
| table-ui-schema     | 表格项 UI 相关描述                                                           | ^[Object]`Record<string, any>`         | —          | 否   |
| before-submit       | 提交之前的回调                                                               | ^[Function]`(selectedList) => Promise` | —          | 否   |
| selection-type      | 选取数据的方式                                                               | ^[String]`radio \| checkbox`           | —          | 否   |
| is-reserve          | 多选模式下：是否保留 CheckBox 选中状态，需要配合 row-key 一起使用            | Boolean                                | —          | 否   |
| row-key             | 数据行唯一标识字段                                                           | String                                 | —          | 否   |
| auto-search         | 当打开 dialog 时是否自动搜索                                                 | Boolean                                | true       | 否   |
| append-to-body      | Dialog 自身是否插入至 body 元素上。嵌套的 Dialog 必须指定该属性并赋值为 true | Boolean                                | true       | 否   |
| show-confirm        | 是否显示`选取确认`按钮                                                       | Boolean                                | true       | 否   |
| dialog-width        | dialog 的宽度                                                                | String                                 | '80%'      | 否   |
| dialog-title        | dialog 的标题                                                                | String                                 | '选择数据' | 否   |
| show-page           | 是否显示`分页器`                                                             | Boolean                                | true       | 否   |
| selection-config    | 勾选组件的选项，依赖 vxe-table 的 checkbox-config                            | Object                                 | —          | 否   |

### BasicSearchHelp Events

| 名称           | 说明                 | 类型                              |
| -------------- | -------------------- | --------------------------------- |
| search-success | 搜索成功之后的回调   | ^[Function]`(val:Array) => void`  |
| opened         | Dialog 打开时回调    | ^[Function]`() => void`           |
| submit         | 数据确认选取时的回调 | ^[Function]`(list:Array) => void` |

### BasicSearchHelp Exposes

| 方法名         | 说明                 | 类型                     |
| -------------- | -------------------- | ------------------------ |
| getOptionsList | 获取下拉选项中的数据 | ^[Function]`() => Array` |

### BasicSearchHelp Slots

| 插槽名             | 说明                     |
| ------------------ | ------------------------ |
| condition.[字段名] | 对应搜索表单项自定义插槽 |
| table.[字段名]     | 对应表格项自定义插槽     |
