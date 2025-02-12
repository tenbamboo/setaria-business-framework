import {
  definePropType,
  //   isBoolean,
  //   isNumber,
  //   isString,
} from '@setaria-business-framework/utils'
// import { UPDATE_MODEL_EVENT } from '@setaria-business-framework/constants'
// import type { ExtractPropTypes } from 'vue'
import type { ExtractPropTypes, PropType } from 'vue'
import type { SchemaProps, SchemaUiPropsByTable } from 'setaria-components'
// export type SelectValueType = Array<string | number | boolean>

export const basicInputSearchHelpProps = {
  labelMode: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  modelValue: {
    type: [Number, String, Boolean, Array],
    default: undefined,
  },
  displayValue: {
    type: [Number, String, Boolean, Array],
    default: undefined,
  },
  beforeOpen: {
    type: Function,
    default: () => true,
  },
  pickType: {
    type: definePropType<'set' | 'append'>([String]),
    default: 'set',
    validator(value: string) {
      return ['set', 'append'].includes(value)
    },
  },
  deleteType: {
    type: definePropType<'all' | 'pick'>([String]),
    default: 'all',
    validator(value: string) {
      return ['all', 'pick'].includes(value)
    },
  },
  valueKey: {
    type: String,
    required: true,
  },
  displayKey: {
    type: String,
    required: true,
  },
  request: {
    type: Function,
  },
  isReserve: {
    type: Boolean,
    default: false,
  },
  autoSearch: {
    type: Boolean,
    default: true,
  },
  beforeSubmit: {
    type: Function,
    default: () => true,
  },
  appendToBody: {
    type: Boolean,
    default: true,
  },
  selectionType: {
    // 选取类型
    type: definePropType<'radio' | 'checkbox' | ''>([String]),
    default: 'radio',
    validator(value: string) {
      return ['radio', 'checkbox'].includes(value)
    },
  },
  dialogWidth: {
    type: [String, Number],
    default: '80%',
  },
  dialogTitle: {
    type: String,
    default: '选择数据',
  },
  // 是否显示确认选取按钮
  showConfirm: {
    type: Boolean,
    default: true,
  },
  schema: {
    type: Object as PropType<SchemaProps>,
    required: true,
  },
  tableSchema: {
    type: Array,
    // required: true,
    default: () => [],
  },
  tableUiSchema: {
    type: Object as PropType<Record<string, SchemaUiPropsByTable>>,
    default: () => ({}),
  },
  conditionSchema: {
    type: Array,
    default: () => [],
  },
  conditionUiSchema: {
    type: Object as PropType<Record<string, SchemaUiPropsByTable>>,
    default: () => ({}),
  },
  showPage: {
    type: Boolean,
    default: true,
  },
  selectionConfig: {
    type: Object as PropType<Record<string, any>>,
    default: () => ({}),
  },

  rowKey: {
    type: String,
  },

  // defaultFormValue: {
  //   type: Object,
  //   default: () => ({}),
  // },
  // excludeSchema: {
  //   type: Array,
  //   default: () => [],
  // },

  // uiSchema: {
  //   type: Object as PropType<Record<string, SchemaUiPropsByTable>>,
  //   default() {
  //     return {}
  //   },
  // },

  // columnWidth: {
  //   type: String,
  // },
  // autoPagination: {
  //   type: Boolean,
  //   default: false,
  // },
}

export const basicInputSearchHelpEmits = {
  'search-success': (res: Record<string, any>) => true,
  opened: () => true,
  submit: (res: Array<Record<string, any>>, operType?: string) => true,
  'update:visible': (val: boolean) => true,
  // change: (res: Array<Record<string, any>>, operType?: string) => true,
  'update:displayValue': (val: any) => true,
}

export type BasicInputSearchHelpProps = ExtractPropTypes<
  typeof basicInputSearchHelpProps
>
