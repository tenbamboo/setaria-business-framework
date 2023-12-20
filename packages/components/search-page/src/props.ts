// import { schemaFormProps } from 'setaria-components'
// import { schemaTableProps } from 'setaria-components'
import { buildProps, definePropType } from '@setaria-business-framework/utils'
import type { ExtractPropTypes, PropType } from 'vue'
import type {
  SchemaProps,
  SchemaUiPropsByTable,
  // schemaTablePropsReal,
} from 'setaria-components'

import type { FormRules } from 'element-plus'
import type { VxeTablePropTypes } from 'vxe-table'

export const searchPageProps = buildProps({
  ...{
    // schema: {
    //   type: Object as PropType<SchemaProps>,
    //   required: true,
    // },
    // uiSchema: {
    //   type: Object as PropType<Record<string, SchemaUiPropsByTable>>,
    //   default() {
    //     return {}
    //   },
    // },
    columnWidth: {
      type: [String, Number],
    },
    border: {
      type: definePropType<VxeTablePropTypes.Border>([Boolean, String]),
      default: true,
    },
    tableId: {
      type: String,
    },
    stripe: {
      type: Boolean,
    },
    showOverflow: {
      type: definePropType<VxeTablePropTypes.ShowOverflow>([Boolean, String]),
    },
    maxEditOnRow: {
      type: Number,
      default: 3,
    },
    data: {
      type: Array,
    },
    modelValue: {
      type: Array,
    },
    changeModeField: {
      type: String,
      required: false,
      default: '_MODE',
    },
    height: {
      type: [Number, String],
    },
    maxHeight: {
      type: [Number, String],
    },
    selectionType: {
      type: definePropType<'radio' | 'checkbox' | ''>([String]),
    },
    labelMode: {
      type: Boolean,
      default: true,
    },
    // 是否保留CheckBox选中状态
    isReserve: {
      type: Boolean,
      default: false,
    },
    // 单选复选底层相关配置，具体可查看 radio-config checkbox-config内容
    selectionConfig: {
      type: Object as PropType<Record<string, any>>,
    },
    sortConfig: {
      type: Object as PropType<VxeTablePropTypes.SortConfig>,
    },
    // 是否开启Y轴虚拟滚动
    virtualScroll: {
      type: Boolean,
      default: false,
    },
    // 合并单元格
    mergeCells: {
      type: Function,
    },
    showFooter: {
      type: Boolean,
      default: false,
    },
    footerMethod: {
      type: Function,
    },
    rowConfig: {
      type: Object as PropType<VxeTablePropTypes.RowConfig>,
    },
    treeConfig: {
      type: Object as PropType<VxeTablePropTypes.TreeConfig>,
    },
    seqColumn: {
      type: Boolean,
      default: false,
    },
    seqConfig: {
      type: Object as PropType<VxeTablePropTypes.SeqConfig>,
    },
    rowClassName: {
      type: [String, Function] as PropType<VxeTablePropTypes.RowClassName>,
    },
    cellClassName: {
      type: [String, Function] as PropType<VxeTablePropTypes.CellClassName>,
    },

    // 是否显示分页
    showPage: {
      type: Boolean,
      default: true,
    },
    pageLayouts: {
      type: Array,
      default() {
        return [
          'Total',
          'Sizes',
          'PrevPage',
          'JumpNumber',
          'NextPage',
          'FullJump',
        ]
      },
    },
    // 当前页号
    pageNum: Number,
    // 每页显示数据数量
    pageSize: Number,
    pageSizes: Array,
    pageTotal: Number,
    showOper: {
      type: Boolean,
      default: false,
    },
    operWidth: {
      type: [Number, String],
      default: '120px',
    },
    operMaxDisplayCount: {
      type: [Number, String],
      default: 3,
    },
    operButtons: {
      type: Function,
    },
    showColumnSetting: {
      type: Boolean,
      default: false,
    },
    columnSettingDraggable: {
      type: Boolean,
      default: false,
    },
    // 行主键
    rowKey: String,
    canAdd: {
      type: Boolean,
      default: true,
    },
    canUpdate: {
      type: Boolean,
      default: true,
    },
    canDelete: {
      type: Boolean,
      default: true,
    },
    canView: {
      type: Boolean,
      default: false,
    },
    canUpdateRow: {
      type: Function,
    },
    canDeleteRow: {
      type: Function,
    },
    canViewRow: {
      type: Function,
    },
    isShowTopButton: {
      type: Boolean,
      default: true,
    },
    /**
     * 新增一行按钮点击时的回调函数，用于对新增数据进行默认值设定
     */
    beforeAddRow: Function,
    /**
     * 修改按钮点击时的回调函数，用于对修改数据进行处理
     */
    beforeUpdateRow: Function,
    formSave: {
      type: Function,
    },
    formRules: {
      type: definePropType<FormRules>(Object),
    },
    dataAddPosition: {
      type: definePropType<'end' | 'begin' | '' | null>([String]),
      default: 'end',
    },
    formProps: {
      type: Object,
    },
    formWrapComponent: {
      type: definePropType<'dialog' | 'drawer' | ''>([String]),
      default: 'dialog',
    },
    formWrapComponentProps: {
      type: Object,
    },
  },
  schema: {
    type: Object as PropType<SchemaProps>,
    required: true,
  },
  conditionTitle: {
    type: String,
  },
  tableTitle: {
    type: String,
  },
  conditionButtonLayout: {
    type: Array,
    default: () => ['search', 'searchReset', 'collapse'],
  },
  /**
   * 查询条件schema
   */
  conditionSchema: {
    type: [Object, Array] as PropType<Record<string, any> | string[]>,
  },
  /**
   * 查询条件ui-schema
   */
  conditionUiSchema: {
    type: Object as PropType<Record<string, SchemaUiPropsByTable>>,
  },
  /**
   * 查询结果schema
   */
  tableSchema: {
    type: [Object, Array] as PropType<Record<string, any> | string[]>,
  },
  /**
   * 查询结果ui-schema
   */
  tableUiSchema: {
    type: Object as PropType<Record<string, SchemaUiPropsByTable>>,
  },
  /**
   * 查询条件值
   */
  conditionData: {
    type: Object as PropType<Record<string, any>>,
  },

  request: {
    type: Function,
  },

  isInitialSearch: {
    type: Boolean,
    default: true,
  },
  isResetAfterRequest: {
    type: Boolean,
    default: true,
  },
} as const)

export type SearchPageProps = ExtractPropTypes<typeof searchPageProps>
