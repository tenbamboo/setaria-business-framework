---
title: SearchPage
lang: zh-CN
---

# SearchPage

此组件是复合组件，其中包含了`ScSearchPage`与`ScSchemaTable`，如不了解以上 2 个组件，请先查看相关文档[https://github.com/tenbamboo/setaria-components]

## 基础用法

:::demo

search-page/basic

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

<!-- ## 记忆功能

:::demo

search-page/basic

::: -->

<!-- ## 自定义搜索区域的按钮内容

:::demo

search-page/basic

::: -->

<!-- ## 属性透传

:::demo

search-page/basic

::: -->

## SchemaTable API

### SchemaTable Attributes

| 名称                     | 说明                                                       | 类型                                                                                                             | 默认值 | 必填 |
| ------------------------ | ---------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ------ | ---- |
| schema                   | 表格（表单）项描述                                         | ^[Object]`SchemaProps`                                                                                           | —      | 是   |
| ui-schema                | 表格（表单）项 UI 相关描述                                 | ^[Object]`Record<string, any>`                                                                                   | —      | 否   |
| data                     | 表格值                                                     | Array                                                                                                            | —      | 是   |
| column-width             | 列宽                                                       | String,Number                                                                                                    | —      | 否   |
| border                   | 是否带有边框                                               | Boolean                                                                                                          | true   | 否   |
| table-id                 | 表格 ID，主要用于对表格的配置进行缓存                      | String                                                                                                           | —      | 否   |
| stripe                   | 是否带有斑马纹                                             | Boolean                                                                                                          | true   | 否   |
| show-overflow            | 当内容过长时显示为省略号                                   | Boolean                                                                                                          | —      | 否   |
| height                   | 表格高度                                                   | String,Number                                                                                                    | —      | 否   |
| max-height               | 表格最大高度                                               | String,Number                                                                                                    | —      | 否   |
| selection-type           | 勾选模式                                                   | ^[String]`radio \| checkbox`                                                                                     | —      | 否   |
| selection-config         | 勾选相关配置，具体可查看 radio-config checkbox-config 内容 | Object                                                                                                           | —      | 否   |
| label-mode               | 是否只读模式                                               | Boolean                                                                                                          | true   | 否   |
| is-reserve               | 是否保留 CheckBox 选中状态                                 | Boolean                                                                                                          | true   | 否   |
| virtual-scroll           | 是否开启虚拟 Y 轴滚动                                      | Boolean                                                                                                          | false  | 否   |
| merge-cells              | 合并指定的单元格                                           | ^[Array]`Array<{ row: number, col: number, rowspan: number, colspan: number }>`                                  | —      | 否   |
| show-footer              | 是否显示页脚                                               | Boolean                                                                                                          | false  | 否   |
| footer-method            | 表尾的数据获取方法，返回一个二维数组                       | ^[Function]`({ columns, data }) => any[][]`                                                                      | —      | 否   |
| row-config               | 行配置信息, 可查看 vxe-table 文档                          | Object                                                                                                           | —      | 否   |
| tree-config              | 树形模式相关配置，可查看 vxe-table 文档                    | Object                                                                                                           | —      | 否   |
| sort-config              | 排序相关配置，可查看 vxe-table 文档                        | Object                                                                                                           | —      | 否   |
| seq-config               | 序号相关配置，可查看 vxe-table 文档                        | Object                                                                                                           | —      | 否   |
| seq-column               | 是否显示序号列                                             | Boolean                                                                                                          | false  | 否   |
| row-class-name           | 行附加 className                                           | ^[Function]`(({ row, rowIndex, $rowIndex }) => any)`                                                             | —      | 否   |
| cell-class-name          | 单元格附加 className                                       | ^[Function]`(({ row, rowIndex, $rowIndex, column, columnIndex, $columnIndex }) => any)`                          | —      | 否   |
| show-page                | 是否显示分页功能                                           | Boolean                                                                                                          | false  | 否   |
| page-layouts             | 分页的格式                                                 | ^[String[]]`PrevJump, PrevPage, Number, JumpNumber, NextPage, NextJump, Sizes, Jump, FullJump, PageCount, Total` | —      | 否   |
| page-num                 | 分页信息，当前页号                                         | Number                                                                                                           | —      | 否   |
| page-size                | 分页信息，当前一页多少条                                   | page                                                                                                             | —      | 否   |
| page-sizes               | 分页信息，分页器                                           | Array                                                                                                            | —      | 否   |
| page-total               | 分页信息，当前数据共多少条                                 | Number                                                                                                           | —      | 否   |
| show-oper                | 是否显示操作列                                             | Boolean                                                                                                          | false  | 否   |
| oper-width               | 操作列的宽度                                               | Number, String                                                                                                   | 120px  | 否   |
| oper-max-display-count   | 操作列中最多能显示多少个按钮（其他的将放入更多按钮中）     | Number, String                                                                                                   | 3      | 否   |
| oper-buttons             | 操作列自定义按钮                                           | ^[Function]`(({ row, rowIndex, column, columnIndex }) => any[])`                                                 | —      | 否   |
| show-column-setting      | 是否显示列设置功能                                         | Boolean                                                                                                          | false  | 否   |
| column-setting-draggable | 列设置是否开启可拖拽功能                                   | Boolean                                                                                                          | false  | 否   |
| row-key                  | 数据行唯一标识字段                                         | String                                                                                                           | —      | 否   |

### SchemaTable Events

| 名称                          | 说明                               | 类型                                                                                                                                                              |
| ----------------------------- | ---------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| data-change                   | 表单项数据值变更触发               | ^[Function]`(schemaKey, val, model) => void`                                                                                                                      |
| selection-change              | 勾选项数据值变更触发               | ^[Function]`(selectionList, currentOperItem) => void`                                                                                                             |
| selection-all                 | 勾选所有数据值变更触发             | ^[Function]`(selectionList) => void`                                                                                                                              |
| sort-change                   | 排序项变更触发                     | ^[Function]`({ column, property, order, sortBy, sortList, $event }) => void`                                                                                      |
| page-change                   | 分页变更触发                       | ^[Function]`({ type, currentPage, pageSize, $event }) => void`                                                                                                    |
| cell-click                    | 单元格被点击时会触发该事件         | ^[Function]`({ row, rowIndex, $rowIndex, column, columnIndex, $columnIndex, triggerRadio, triggerCheckbox, triggerTreeNode, triggerExpandNode, $event }) => void` |
| oper-button-click             | 操作列按钮被点击时会触发该事件     | ^[Function]`(key, scope) => void`                                                                                                                                 |
| oper-button-click             | 操作列按钮被点击时会触发该事件     | ^[Function]`(key, scope) => void`                                                                                                                                 |
| column-setting-show           | 列设置显示时会触发该事件           | ^[Function]`() => void`                                                                                                                                           |
| column-setting-hide           | 列设置隐藏时会触发该事件           | ^[Function]`() => void`                                                                                                                                           |
| column-setting-visible-change | 列设置中内容勾选变更时会触发该事件 | ^[Function]`(checkedKeys) => void`                                                                                                                                |
| column-setting-sort-change    | 列设置中内容排序变更时会触发该事件 | ^[Function]`(sortKeys) => void`                                                                                                                                   |

### SchemaTable Exposes

| 方法名         | 说明                                                          | 类型                                                                                                                              |
| -------------- | ------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| setSelection   | 设置选中                                                      | ^[Function]`(row: Row) => void`                                                                                                   |
| clearSelection | 手动清空用户的选择                                            | ^[Function]`() => void`                                                                                                           |
| getSelection   | 获取用户选中的数据                                            | ^[Function]`() => Array<any>`                                                                                                     |
| validate       | 对整个表单的内容进行验证。 接收一个回调函数，或返回 Promise。 | ^[Function]`(callback?: FormValidateCallback) => Promise<void>`                                                                   |
| validateField  | 验证具体的某个字段。                                          | ^[Function]`(props?: Arrayable<FormItemProp> \| undefined, callback?: FormValidateCallback \| undefined) => FormValidationResult` |
| resetFields    | 重置该表单项，将其值重置为初始值，并移除校验结果              | ^[Function]`(props?: Arrayable<FormItemProp> \| undefined) => void`                                                               |
| scrollToField  | 滚动到指定的字段                                              | ^[Function]`(prop: FormItemProp) => void`                                                                                         |
| clearValidate  | 清理某个字段的表单验证信息。                                  | ^[Function]`(props?: Arrayable<FormItemProp> \| undefined) => void`                                                               |

### SchemaTable Slots

| 插槽名   | 说明                 |
| -------- | -------------------- |
| [字段名] | 对应表单项自定义插槽 |
