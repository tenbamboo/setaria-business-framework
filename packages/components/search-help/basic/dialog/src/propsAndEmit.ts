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

export const basicSearchHelpProps = {
  visible: {
    type: Boolean,
    default: false,
  },
  beforeSubmit: {
    type: Function,
    default: () => true,
  },
  request: {
    type: Function,
  },
  isReserve: {
    type: Boolean,
    default: false,
  },
  rowKey: {
    type: String,
  },
  autoSearch: {
    type: Boolean,
    default: true,
  },
  appendToBody: {
    type: Boolean,
    default: true,
  },
  // 是否显示确认选取按钮
  showConfirm: {
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
  // defaultFormValue: {
  //   type: Object,
  //   default: () => ({}),
  // },
  // excludeSchema: {
  //   type: Array,
  //   default: () => [],
  // },
  dialogWidth: {
    type: [String, Number],
    default: '80%',
  },
  dialogTitle: {
    type: String,
    default: '选择数据',
  },

  schema: {
    type: Object as PropType<SchemaProps>,
    required: true,
  },
  // uiSchema: {
  //   type: Object as PropType<Record<string, SchemaUiPropsByTable>>,
  //   default() {
  //     return {}
  //   },
  // },
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
  // columnWidth: {
  //   type: String,
  // },
  // autoPagination: {
  //   type: Boolean,
  //   default: false,
  // },
}

export const basicSearchHelpEmits = {
  'search-success': (res: Record<string, any>) => true,
  opened: () => true,
  submit: (res: Array<Record<string, any>>) => true,
  'update:visible': (val: boolean) => true,
}

export type BasicSearchHelpProps = ExtractPropTypes<typeof basicSearchHelpProps>
