import type { ExtractPropTypes } from 'vue'

export const importDropdownProps = {
  title: {
    type: String,
    default: '导入',
    // default() {
    //   return this.$t('common.import')
    // },
  },
  downloadTemplateUrl: {
    type: String,
    default: null,
  },
  downloadTemplateMethod: {
    type: String,
    default: 'post',
  },
  downloadTemplateParams: {
    type: Object,
    default: null,
  },
  importUrl: {
    type: String,
    default: null,
  },
  importFileName: {
    type: String,
    default: 'file',
  },
  importUrlParams: {
    type: Object,
    default: null,
  },
  // 导入之前的函数钩子，如果返回false则不上传，返回true正常上传
  beforeImport: {
    type: Function,
    default() {
      return true
    },
  },
}

export type ImportDropdownProps = ExtractPropTypes<typeof importDropdownProps>

export const importDropdownEmits = {
  command: (key: string) => true,
  'import-success': (res: any) => true,
  'import-error': (res: any) => true,
}
