<template>
  <el-button @click="triggerUploader">上传</el-button>

  <bf-shadow-uploader
    ref="uploader"
    :accept="'.jpg,.jpeg,.png,.pdf,.ofd'"
    :limit="2"
    :before-upload="handlerBeforeFileUpload"
    :multiple="true"
    @success="handlerUploadSuccess"
    @exceed="handlerUploadExceed"
  />
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

const handlerUploadExceed = (files, fileList) => {
  console.log(files, fileList)
  ElMessage.error('超出上传上限')
}
</script>
