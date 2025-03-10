---
title: ImportDropdown
lang: zh-CN
---

# ImportDropdown

此组件一般业务导入时使用

## 基础用法

:::demo

import-dropdown/basic

:::

## 只显示导入按钮

:::demo `downloadTemplateUrl`属性不赋值即可

import-dropdown/only-btn

:::

### 通过插槽自定义下拉数据

:::demo 使用默认插槽即可自定义内容并，通过`@command`回调获取自定义点击的内容

import-dropdown/slot

:::

## ImportDropdown API

### ImportDropdown Attributes

| 名称                     | 说明                                                   | 类型                | 默认值 | 必填 |
| ------------------------ | ------------------------------------------------------ | ------------------- | ------ | ---- |
| title                    | 按钮文本                                               | String              | 导入   | —    |
| download-template-url    | 下载模板 URL，如此参数为空则隐藏下拉项                 | String              | —      | —    |
| download-template-params | 下载模板参数                                           | Object              | —      | —    |
| download-template-method | 下载模板请求 Method                                    | ^[String]`get post` | get    | —    |
| import-url               | 导入 URL，如此参数为空则隐藏下拉项                     | String              | —      | —    |
| import-url-params        | 导入参数                                               | Object              | —      | —    |
| before-import            | 点击导入时的前置回调需要返回 Boolean 或者 Promise 内容 | Function            | —      | —    |

### ImportDropdown Events

| 名称           | 说明                     | 类型                              |
| -------------- | ------------------------ | --------------------------------- |
| command        | 点击菜单项触发的事件回调 | ^[Function]`(key:String) => void` |
| import-success | 导入文件成功回调         | ^[Function]`(res:any) => void`    |
| import-error   | 导入文件失败回调         | ^[Function]`(res:any) => void`    |

### ImportDropdown Exposes

| 方法名 | 说明 | 类型 |
| ------ | ---- | ---- |

### ImportDropdown Slots

| 插槽名  | 说明                    |
| ------- | ----------------------- |
| default | 自定义下拉 dropdownItem |
