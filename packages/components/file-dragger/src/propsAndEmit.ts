// import { UPDATE_MODEL_EVENT } from '@setaria-business-framework/constants'
import type { ExtractPropTypes } from 'vue'
export type InputValueType = string
export const fileDraggerProps = {
  disabled: {
    type: Boolean,
    default: false,
  },
}

export const fileDraggerEmits = {
  file: (files: any) => true,
}

export type FileDraggerProps = ExtractPropTypes<typeof fileDraggerProps>
