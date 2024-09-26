import { UPDATE_MODEL_EVENT } from '@setaria-business-framework/constants'
import type { ExtractPropTypes } from 'vue'
export type InputValueType = string
export const chineseMoneyProps = {
  labelMode: {
    type: Boolean,
    default: false,
  },
  modelValue: {
    type: [Number, String, Boolean],
    default: undefined,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
}

export const chineseMoneyEmits = {
  [UPDATE_MODEL_EVENT]: (val: InputValueType) => true,
}

export type ChineseMoneyProps = ExtractPropTypes<typeof chineseMoneyProps>
