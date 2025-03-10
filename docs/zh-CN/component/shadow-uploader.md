---
title: ShadowUploader
lang: zh-CN
---

# ShadowUploader

此组件一般用于单独的上传功能，且上传组件不显示出来。

## 基础用法

:::demo

shadow-uploader/basic

:::

## 控制上传文件个数

通过`limit`、并配合`exceed`事件来实现，点击上传时，请选择多个文件

:::demo

shadow-uploader/limit

:::

## 拖拽上传

通过`bf-file-dragger`组件并配合`uploadFiles`方法来实现

:::demo

shadow-uploader/dragger

:::

## ShadowUploader API

### ShadowUploader Attributes

| 名称          | 说明                                                                            | 类型     | 默认值          | 必填 |
| ------------- | ------------------------------------------------------------------------------- | -------- | --------------- | ---- |
| action        | 上传的地址,如果为空则为 OSS 文件服务的 URL（且必须指定`business-type`字段内容） | String   | —               | —    |
| multiple      | 下是否支持多选文件                                                              | Boolean  | false           | —    |
| data          | 上传时附带的额外参数                                                            | Object   | —               | —    |
| name          | 上传的文件字段名                                                                | String   | 'uploadObjects' | —    |
| accept        | 选择上传文件时的类型                                                            | String   | file            | —    |
| before-upload | 上传之前的函数钩子，如果返回 false 则不上传，返回 true 正常上传                 | Function | —               | —    |
| limit         | 最大允许上传个数                                                                | Number   | —               | —    |

### ShadowUploader Events

| 名称    | 说明                     | 类型                                      |
| ------- | ------------------------ | ----------------------------------------- |
| success | 上传成功回调             | ^[Function]`(res,file, fileList) => void` |
| error   | 上传失败回调             | ^[Function]`(res,file, fileList) => void` |
| exceed  | 文件超出个数限制时的钩子 | ^[Function]`(file, fileList) => void`     |

### ShadowUploader Exposes

| 方法名      | 说明                               | 类型                         |
| ----------- | ---------------------------------- | ---------------------------- |
| trigger     | 触发选择文件功能（并上传）         | ^[Function]`() => void`      |
| uploadFiles | 给定相关文件对象并触发文件再次上传 | ^[Function]`(files) => void` |

### ShadowUploader Slots

| 插槽名 | 说明 |
| ------ | ---- |
