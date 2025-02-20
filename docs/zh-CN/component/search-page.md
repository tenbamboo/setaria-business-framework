---
title: SearchPage
lang: zh-CN
---

# SearchPage

此组件是复合组件，其中包含了`ScSearchPage`与`ScSchemaTable`，如不了解以上 2 个组件，请先查看相关文档[https://tenbamboo.github.io/setaria-components/zh-CN/]

## 基础用法

:::demo

search-page/basic

:::

## 设置初始化搜索参数

:::demo 可通过`default-condition-data`属性来指定相关搜索条件中的参数

search-page/default-condition-data

:::

## 使用插槽

:::demo 可通过`condition.[字段名]`与`table.[字段名]`来随时替换组件内部内容

search-page/slot

:::

## 编辑功能

- `label-mode=false`开启编辑模式
- `show-oper=true`显示操作列
- `selection-type`开启勾选模式（用于批量删除使用）
- `form-save`处理用户操作完的数据回调

:::demo

search-page/editabled

:::

## 搜索条件规则校验

- 可对`condition-schema`传正常的 Schema 对象即可处理必填校验
- 其他复合校验可在`request`中抛异常即可
- 这块也可配合`is-initial-search`属性关闭页面初始化的第一次请求

:::demo

search-page/condition-rules

:::

## 自定义搜索区域的按钮内容

:::demo 使用`conditionButton`插槽并配合`condition-button-layout`属性来开启自定义按钮功能

search-page/custom-condition-button

:::

## 记忆功能

- 通过指定`table-id`属性来开启存储 列宽、列的显示隐藏、列的显示顺序、当前分页信息、当前排序信息、当前搜索条件信息等功能
- 需把`show-column-setting`和`column-setting-draggable`打开方可享受列的显示隐藏、列的显示顺序功能

:::demo

search-page/storage

:::

## 属性透传

:::demo 组件支持各种`schema-table`的相关属性(此 demo 透传了`column-width`,`seq-column`)

search-page/inject-props

:::

## 勾选翻页记忆

:::demo 通过`is-reserve`属性即可，需要注意的是，需要指定`rowConfig.keyField`内容，告知组件当前数据主键是什么

search-page/reserve

:::

## 导出功能

:::demo 通过`export-data`来传递导出的接口

search-page/export-data

:::

## 完整功能

:::demo

search-page/full

:::

## SchemaTable API

### SchemaTable Attributes

- 此组件已支持`SchemaTable`属性透传，可查看[https://tenbamboo.github.io/setaria-components/zh-CN/component/schema-table]

| 名称                   | 说明                             | 类型                             | 默认值   | 必填 |
| ---------------------- | -------------------------------- | -------------------------------- | -------- | ---- |
| request                | 请求后端接口的回调               | ^[Function]`(params) => Promise` | —        | 是   |
| schema                 | 基本 Schema 项描述               | ^[Object]`SchemaProps`           | —        | 是   |
| condition-schema       | 搜索表单项描述                   | ^[Object, Array]`SchemaProps`    | —        | 否   |
| table-schema           | 表格表单项描述                   | ^[Object, Array]`SchemaProps`    | —        | 否   |
| condition-ui-schema    | 搜索表单项 UI 相关描述           | ^[Object]`Record<string, any>`   | —        | 否   |
| table-ui-schema        | 表格项 UI 相关描述               | ^[Object]`Record<string, any>`   | —        | 否   |
| table-title            | 表格卡片 Title                   | String                           | 搜索结果 | 否   |
| condition-title        | 搜索表单卡片 Title               | String                           | 搜索条件 | 否   |
| default-condition-data | 默认搜索的条件                   | ^[Object]`Record<string, any>`   | —        | 否   |
| is-initial-search      | 是否在页面初始化时只需一次搜索   | Boolean                          | true     | 否   |
| is-reset-after-request | 是否在点击重置按钮后默认请求一次 | Boolean                          | true     | 否   |
| export-data            | 请求后端导出接口的回调           | ^[Function]`(params) => Promise` | —        | 否   |
| default-condition-data | 搜索条件中的参数                 | ^[Object]`Record<string, any>`   | —        | 否   |

### SchemaTable Events

| 名称              | 说明                           | 类型                                                                                                                                                              |
| ----------------- | ------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| condition-change  | 搜索表单项数据值变更触发       | ^[Function]`(schemaKey, val, model) => void`                                                                                                                      |
| page-change       | 分页项变更触发                 | ^[Function]`({ type, currentPage, pageSize, $event }) => void`                                                                                                    |
| sort-change       | 排序项变更触发                 | ^[Function]`({ column, property, order, sortBy, sortList, $event }) => void`                                                                                      |
| selection-change  | 勾选项数据值变更触发           | ^[Function]`(selectionList, currentOperItem) => void`                                                                                                             |
| selection-all     | 勾选所有数据值变更触发         | ^[Function]`(selectionList) => void`                                                                                                                              |
| cell-click        | 单元格被点击时会触发该事件     | ^[Function]`({ row, rowIndex, $rowIndex, column, columnIndex, $columnIndex, triggerRadio, triggerCheckbox, triggerTreeNode, triggerExpandNode, $event }) => void` |
| cell-dbclick      | 单元格被双击时会触发该事件     | ^[Function]`({ row, rowIndex, $rowIndex, column, columnIndex, $columnIndex, triggerRadio, triggerCheckbox, triggerTreeNode, triggerExpandNode, $event }) => void` |
| oper-button-click | 操作列按钮被点击时会触发该事件 | ^[Function]`(key, scope) => void`                                                                                                                                 |
| export-success    | 触发导出且成功之后的回调       | ^[Function]`(res) => void`                                                                                                                                        |
| export-error      | 触发导出且失败之后的回调       | ^[Function]`(error) => void`                                                                                                                                      |

### SchemaTable Exposes

| 方法名          | 说明                | 类型                              |
| --------------- | ------------------- | --------------------------------- |
| search          | 手动触发搜索        | ^[Function]`() => void`           |
| getTableRef     | 获取表格的 Ref 实例 | ^[Function]`() => SchemaTableRef` |
| getConditionRef | 获取表单的 Ref 实例 | ^[Function]`() => SchemaTableRef` |
| setSelection    | 设置选中            | ^[Function]`(row: Row) => void`   |
| clearSelection  | 手动清空用户的选择  | ^[Function]`() => void`           |
| getSelection    | 获取用户选中的数据  | ^[Function]`() => Array<any>`     |

### SchemaTable Slots

| 插槽名             | 说明                           |
| ------------------ | ------------------------------ |
| condition.[字段名] | 对应搜索表单项自定义插槽       |
| table.[字段名]     | 对应表格项自定义插槽           |
| conditionButton    | 搜索表单按钮区域的插槽         |
| batchControl       | 表格顶部批量操作按钮区域的插槽 |
