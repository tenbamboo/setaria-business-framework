<template>
  <div>
    <el-upload
      ref="uploader"
      style="display: none"
      :action="actionCom"
      :with-credentials="true"
      :auto-upload="true"
      :accept="accept"
      :name="name"
      :limit="limit"
      :on-success="handlerUploadSuccess"
      :before-upload="handlerBeforeUpload"
      :on-error="handlerUploadError"
      :headers="headersDataCom"
      :data="data"
      :file-list="fileListProxy"
      :multiple="multiple"
      :on-exceed="handlerExceed"
    >
      <template #trigger>
        <el-button ref="uploaderBtn" type="primary">triggerBtn</el-button>
      </template>
    </el-upload>
  </div>
</template>

<script lang="ts" setup>
import { computed, reactive, ref } from 'vue'
import { ElLoading, ElMessage, ElUpload } from 'element-plus'
import { getOssUploadUrl } from '@setaria-business-framework/utils'
import { shadowUploaderEmits, shadowUploaderProps } from './propsAndEmit'
import type {
  UploadFile,
  UploadFiles,
  UploadRawFile,
  UploadUserFile,
} from 'element-plus'
defineOptions({
  name: 'BfShadowUploader',
  inheritAttrs: false,
})

const props = defineProps({ ...shadowUploaderProps })

const emit = defineEmits(shadowUploaderEmits)

const uploader = ref()
const uploaderBtn = ref()
const uploadList = reactive<Array<Record<string, any>>>([])
const fileErrorList = reactive<Array<Record<string, any>>>([])
const fileListProxy = ref<UploadUserFile[]>([])
const loadingInst = ref()

const actionCom = computed(() => {
  if (props.action) {
    if (!props.action.startsWith('/api/')) {
      return `/api${props.action}`
    }
    return props.action
  }
  return getOssUploadUrl()
})

const headersDataCom = computed(() => {
  return {}
})

const handlerUploadSuccess = (
  res: any,
  file: UploadFile,
  fileList: UploadFiles
) => {
  toggleLoading(false)
  if (res.code === 200) {
    if (res.data) {
      uploadList.push(res.data[0])
    }

    emit('success', res, file, fileList)
  } else {
    file.status = 'ready'
    fileErrorList.push(file)
    emit('error', res, file, fileList)
  }
}

const handlerUploadError = (
  res: any,
  file: UploadFile,
  fileList: UploadFiles
) => {
  toggleLoading(false)
  emit('error', res, file, fileList)
}

const handlerExceed = (files: File[], uploadFiles: UploadUserFile[]) => {
  emit('exceed', files, uploadFiles)
}

const handlerBeforeUpload = (file: UploadRawFile) => {
  if (!props.beforeUpload(file)) {
    return false
  }
  if (file && file.size === 0) {
    ElMessage.error('不能上传大小为0的文件！')
    return false
  }
  if (file && file.size >= 30 * 1024 * 1024) {
    // this.$message.error('不能上传大小为0的文件！');
    ElMessage.error('文件过大请重新上传')
    return false
  }

  toggleLoading(true)
  return true
}

const toggleLoading = (flag: boolean) => {
  if (flag) {
    loadingInst.value = ElLoading.service({
      lock: true,
      text: '上传处理中',
      background: 'rgba(0, 0, 0, 0.7)',
    })
  } else {
    loadingInst.value.close()
  }
}

const trigger = () => {
  uploaderBtn.value.$el.click()
}

const uploadFiles = (files: File[]) => {
  const fileList = Array.from(files || [])
  if (fileList.length) {
    if (props.limit && props.limit <= fileList.length) {
      emit('exceed', files)
      return
    }
    fileList.forEach((file) => {
      uploader.value.handleStart(file)
    })
    uploader.value.submit()
  }
}

defineExpose({
  trigger,
  uploadFiles,
})
</script>
