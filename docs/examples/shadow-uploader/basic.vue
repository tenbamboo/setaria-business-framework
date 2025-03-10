<template>
  <el-button @click="triggerUploader">上传</el-button>

  <bf-shadow-uploader
    ref="uploader"
    :accept="'.jpg,.jpeg,.png,.pdf,.ofd'"
    :before-upload="handlerBeforeFileUpload"
    :multiple="true"
    @success="handlerUploadSuccess"
  />
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
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
</script>
