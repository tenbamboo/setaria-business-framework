import {
  definePropType,
  isBoolean,
  isNumber,
  isString,
} from '@setaria-business-framework/utils'
import { UPDATE_MODEL_EVENT } from '@setaria-business-framework/constants'
import type { ExtractPropTypes } from 'vue'

export type SelectValueType = Array<string | number | boolean>

export const remoteSelectProps = {
  modelValue: {
    type: [Number, String, Boolean],
    default: undefined,
  },
  labelMode: {
    type: Boolean,
    default: false,
  },
  clearable: {
    type: Boolean,
    default: true,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  filterable: {
    type: Boolean,
    default: true,
  },
  disabledOptions: {
    type: Array,
    default: () => [],
  },
  // hiddenOptions: {
  //   type: Array,
  //   default: () => [],
  // },
  labelKey: {
    type: [String, Array],
    default: 'label',
  },
  labelSeparator: {
    type: String,
    default: ' ',
  },
  valueKey: {
    type: String,
    default: 'value',
  },
  url: {
    type: String,
    default: '',
  },
  params: null,
  appendList: {
    type: Array,
    default: () => [],
  },
  isStorage: {
    type: Boolean,
    default: false,
  },
  method: {
    type: String,
    default: 'post',
  },
  http: {
    type: String,
    default: 'base',
  },
  formatOptionType: {
    type: definePropType<'string' | 'int' | 'boolean' | ''>([String]),
    default: '',
    validator(value: string) {
      return ['', 'string', 'int', 'boolean'].includes(value)
    },
  },
  beforeChange: {
    type: Function,
    default: () => true,
  },
  afterRequest: {
    type: Function,
  },
  isClearByOptionNull: {
    type: Boolean,
    default: false,
  },
}

export const remoteSelectEmits = {
  change: (val: Array<Record<string, any>>) => true,
  blur: (evt: FocusEvent) => evt instanceof FocusEvent,
  focus: (evt: FocusEvent) => evt instanceof FocusEvent,
  clear: () => true,
  done: (
    dataList: Array<Record<string, any>>,
    sourceList: Array<Record<string, any>>
  ) => true,
  [UPDATE_MODEL_EVENT]: (val: SelectValueType) =>
    isString(val) || isNumber(val) || isBoolean(val),
}

export type RemoteSelectProps = ExtractPropTypes<typeof remoteSelectProps>
