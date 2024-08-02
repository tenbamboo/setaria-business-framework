---
title: RemoteSelect
lang: zh-CN
---

# RemoteSelect

封装接口请求的 Select，此组件一般用于数据量少、搜索条件单一的场景下使用，其他场景请封使用搜索帮助组件来实现。

## 基础用法

:::demo

remote-select/basic

:::

## 格式化 options 类型

:::demo 有时后端返回的 options 数据和另外一个提交`v-model`接口访问类型不一致，导致接口提交出错。 这时可使用`format-option-type`属性来强制转换 options 的数据类型

remote-select/format-option-type

:::

## 插槽使用

:::demo 可通过`condition.[字段名]`与`table.[字段名]`来随时替换组件内部内容

remote-select/slot

:::

## 变更之前的回调

:::demo 可以通过`before-change`属性并配合返回 Boolean 或者 Promise 对象来控制是否选中

remote-select/before-change

:::

## 自定义添加 options

:::demo 可通过`append-list`属性来添加自定义的数据

remote-select/append-list

:::

## 多选

:::demo 可通过`multiple`属性

remote-select/multiple

:::

## 格式化 Label

:::demo 通过`label-key`传 Array 类型即可自定义 label 内容，也可通过 `label-separator` 来修改数组的分隔符,默认为空格

remote-select/format-label

:::

## 禁用 Option

:::demo 可通过`disabled-options`属性来实现

remote-select/disabled-options

:::

## 接口请求之后的格式化

:::demo 有时后端接口返回的数据或者格式不满足当前组件的格式返回时，可通过`after-request`属性来格式化内容

remote-select/after-request

:::

## Label 模式

:::demo 当`label-mode`为`true`,即开启了 label 模式，此模式下下拉列表将隐藏且显示格式化后的值

remote-select/label-mode

:::

## RemoteSelect API

### RemoteSelect Attributes

| 名称                    | 说明                                                                                                                        | 类型                                               | 默认值 | 必填 |
| ----------------------- | --------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------- | ------ | ---- |
| modelValue              | 值                                                                                                                          | Number, String, Boolean                            | —      | 是   |
| label-key               | label 使用的 key                                                                                                            | String Array                                       | label  | —    |
| value-key               | value 使用的 key                                                                                                            | String                                             | value  | —    |
| label-mode              | 是否开启 label 只读模式,默认跟随全局控制                                                                                    | Boolean                                            | —      | —    |
| http                    | 请求的实例                                                                                                                  | String                                             | —      | 是   |
| url                     | 接口请求 URL，所有接口都是 post 请求                                                                                        | String                                             | —      | 是   |
| param                   | 接口请求参数                                                                                                                | Object                                             | —      | —    |
| method                  | 请求接口方式                                                                                                                | ^[String]`'post' \| 'get' `                        | post   | —    |
| append-list             | 自定义添加到 options 中的数据                                                                                               | Array                                              | —      | —    |
| is-storage              | 是否本地缓存接口数据(sessionStorage)                                                                                        | Boolean                                            | false  | —    |
| format-option-type      | 强制格式化服务器返回的 options 的类型                                                                                       | ^[String]`'string' \| 'int'\| 'boolean'\| '' `     | ''     | —    |
| label-separator         | 当`label-key`为 Array 类型时可使用此属性来分隔数据                                                                          | String                                             | —      |      |
| before-change           | 数据变更之前的回调，需要通过返回 Boolean 或者 Promise 对象来指定数据是否可修改，回调参数:(newVal,oldVal)                    | ^[Function]`(newVal,oldVal) => Boolean \| Promise` | —      | —    |
| disabled-options        | options 不可用的列表                                                                                                        | Array                                              | —      | —    |
| hidden-options          | 需要隐藏 options 列表                                                                                                       | Array                                              | —      | —    |
| back-up-value           | 当有些场景下拉值中没有选中时，且还需要显示对应的 label 内容时，可使用此属性，需要注意的是：label-mode 为 true，此属性才可用 | any                                                | —      | —    |
| is-clear-by-option-null | 当下拉 options 没有值时，是否清空 value 内容                                                                                | Boolean                                            | false  | —    |
| after-request           | `接口`请求之后的回调,需要返回一个 list，组件可通过此 list 来格式化数据                                                      | ^[Function]`(list) => list`                        | —      | —    |

### RemoteSelect Events

| 名称   | 说明             | 类型                                                   |
| ------ | ---------------- | ------------------------------------------------------ |
| change | 下拉变更         | ^[Function]`(val:Array) => void`                       |
| done   | 数据加载完成回调 | ^[Function]`(list: Array,interfaceSourceData) => void` |
| blur   | 下拉失去焦点     | ^[Function]`(event) => void`                           |

### RemoteSelect Exposes

| 方法名         | 说明                 | 类型                     |
| -------------- | -------------------- | ------------------------ |
| getOptionsList | 获取下拉选项中的数据 | ^[Function]`() => Array` |

### RemoteSelect Slots

| 插槽名         | 说明               |
| -------------- | ------------------ |
| append         | 输入框后置内容     |
| labelModeValue | 只读模式的展示插槽 |
