---
title: DictSelect
lang: zh-CN
---

# DictSelect

封装接口请求的 Select，此组件基于`Remote Select`组件，`Remote Select`基本属性在此组件中都支持

## 基础用法

:::demo 通过`dict-id`来指定字典 ID

dict-select/basic

:::

## DictSelect API

### DictSelect Attributes

此组件已继承`el-select`和`remote-select`，可使用以上组件所有属性。

| 名称       | 说明    | 类型                    | 默认值 | 必填 |
| ---------- | ------- | ----------------------- | ------ | ---- |
| modelValue | 值      | Number, String, Boolean | —      | 是   |
| dict-id    | 字典 Id | String                  | —      | 是   |

### DictSelect Events

| 名称   | 说明             | 类型                                                   |
| ------ | ---------------- | ------------------------------------------------------ |
| change | 下拉变更         | ^[Function]`(val:Array) => void`                       |
| done   | 数据加载完成回调 | ^[Function]`(list: Array,interfaceSourceData) => void` |
| blur   | 下拉失去焦点     | ^[Function]`(event) => void`                           |

### DictSelect Exposes

| 方法名         | 说明                 | 类型                     |
| -------------- | -------------------- | ------------------------ |
| getOptionsList | 获取下拉选项中的数据 | ^[Function]`() => Array` |

### DictSelect Slots

| 插槽名         | 说明               |
| -------------- | ------------------ |
| append         | 输入框后置内容     |
| labelModeValue | 只读模式的展示插槽 |
