import type { ExtractPropTypes, PropType } from 'vue'
import type { UploadFile, UploadFiles, UploadUserFile } from 'element-plus'

export const shadowUploaderProps = {
  action: {
    type: String,
    default: '',
  },
  businessType: {
    type: String,
  },
  data: {
    type: Object as PropType<Record<string, any>>,
    default: () => ({}),
  },
  // 上传之前的函数钩子，如果返回false则不上传，返回true正常上传
  beforeUpload: {
    type: Function,
    default() {
      return true
    },
  },
  accept: {
    type: String,
    default: '',
  },
  name: {
    type: String,
    default: 'file',
  },
  multiple: {
    type: Boolean,
    default: false,
  },
  limit: {
    type: Number,
  },
}

export type ShadowUploaderProps = ExtractPropTypes<typeof shadowUploaderProps>

export const shadowUploaderEmits = {
  success: (res: any, file: UploadFile, fileList: UploadFiles) => true,
  error: (res: any, file: UploadFile, fileList: UploadFiles) => true,
  exceed: (files: File[], uploadFiles?: UploadUserFile[]) => true,
}
