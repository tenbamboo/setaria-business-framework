---
title: FileDragger
lang: zh-CN
---

# FileDragger

一般用于包装既有组件，使既有组件支持文件拖动功能

## 基础用法

:::demo

file-dragger/basic

:::

## FileDragger API

### FileDragger Attributes

| 名称     | 说明     | 类型    | 默认值 | 必填 |
| -------- | -------- | ------- | ------ | ---- |
| disabled | 是否禁用 | Boolean | —      | —    |

### FileDragger Events

| 名称 | 说明             | 类型                                     |
| ---- | ---------------- | ---------------------------------------- |
| file | 文件拖动后的回调 | ^[Function]`(files:Array<File>) => void` |

### FileDragger Slots

| 插槽名  | 说明         |
| ------- | ------------ |
| default | 代理拖动区域 |
