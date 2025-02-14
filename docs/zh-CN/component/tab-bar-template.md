---
title: TabBarTemplate
lang: zh-CN
---

# TabBarTemplate

## 基础用法

:::demo

tab-bar-template/basic

:::

## TabBarTemplate API

### TabBarTemplate Attributes

此组件已继承`el-select`和`remote-select`，可使用以上组件所有属性。

| 名称       | 说明    | 类型                    | 默认值 | 必填 |
| ---------- | ------- | ----------------------- | ------ | ---- |
| modelValue | 值      | Number, String, Boolean | —      | 是   |
| dict-id    | 字典 Id | String                  | —      | 是   |

### TabBarTemplate Events

| 名称   | 说明             | 类型                                                   |
| ------ | ---------------- | ------------------------------------------------------ |
| change | 下拉变更         | ^[Function]`(val:Array) => void`                       |
| done   | 数据加载完成回调 | ^[Function]`(list: Array,interfaceSourceData) => void` |
| blur   | 下拉失去焦点     | ^[Function]`(event) => void`                           |

### TabBarTemplate Exposes

| 方法名         | 说明                 | 类型                     |
| -------------- | -------------------- | ------------------------ |
| getOptionsList | 获取下拉选项中的数据 | ^[Function]`() => Array` |

### TabBarTemplate Slots

| 插槽名         | 说明               |
| -------------- | ------------------ |
| append         | 输入框后置内容     |
| labelModeValue | 只读模式的展示插槽 |
