<template>
  <el-button @click="triggerUploader">上传</el-button>

  <bf-shadow-uploader
    ref="uploader"
    :limit="2"
    :accept="'.jpg,.jpeg,.png,.pdf,.ofd'"
    :before-upload="handlerBeforeFileUpload"
    :multiple="true"
    @success="handlerUploadSuccess"
    @exceed="handlerUploadExceed"
  />

  <bf-file-dragger @file="handlerDragFile">
    <div
      style="
        width: 100%;
        height: 200px;
        background: #efbbc4;
        border: 1px solid #ff6060;
      "
    >
      我是代理区域，文件拖拽到这里就可以执行上传了
    </div>
  </bf-file-dragger>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { ElMessage } from 'element-plus'

const uploader = ref()

const handlerBeforeFileUpload = (file) => {
  console.log('before-upload', file)
  return true
}
const triggerUploader = () => {
  uploader.value.trigger()
}
const handlerUploadSuccess = (response, file, fileList) => {
  console.log(response, file, fileList)
}
const handlerDragFile = (files) => {
  uploader.value.uploadFiles(files)
  console.log(files)
}
const handlerUploadExceed = (files, fileList) => {
  console.log(files, fileList)
  ElMessage.error('超出上传上限')
}
</script>
