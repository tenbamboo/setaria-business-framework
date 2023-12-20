import {
  // Fragment,
  computed,
  // defineExpose,
  defineComponent,
  // reactive,
  // nextTick,
  // onBeforeUnmount,
  // onMounted,
  // onUpdated,
  // computed,
  ref,
  watch,
} from 'vue'
import { isFunction } from '@vue/shared'
// import { useResizeObserver } from '@vueuse/core'
// import { throwError } from '@element-plus/utils'
// import { useNamespace } from '@setaria-business-framework/hooks'
// import { formContextKey, formItemContextKey } from './constants'
// import { ElForm } from 'element-plus'
//
// import { ElButton, ElCol, ElIcon, ElLink } from 'element-plus'
// import {
//   ArrowDown,
//   ArrowUp,
//   RefreshLeft,
//   Search,
// } from '@element-plus/icons-vue'
// import { cloneDeep, isEmpty } from 'lodash-unified'

// import {
//   createLayoutWrapper,
//   createSearchPageItem,
//   createSearchPageRules,
// } from '../../common-search/builder'
// import { useLocale } from '@setaria-business-framework/hooks'
// import ScSchemaForm from '@setaria-business-framework/components/schema-form'

import { searchPageProps } from './props'
// import type {
//   SchemaFormInstance,
//   SlotRowProps,
// } from '@setaria-business-framework/components/schema-form'
// import type { FormItemProp, FormValidateCallback } from 'element-plus'
// import type { SchemaUiProps } from '../../common-schema/schema.type'

// import { CHANGE_EVENT, UPDATE_MODEL_EVENT } from '@setaria-business-framework/constants'
import { useConditionForm } from './condition-form'
import { useResultTable } from './result-table'
export default defineComponent({
  name: 'BfSearchPage',
  props: searchPageProps,
  emits: [
    'condition-change',
    'search-success',
    'search-error',
    'update:pageSize',
    'update:pageNum',
    'page-change',
    'sort-change',
    // 'input',
    // 'data-change',
    // 'data-submit',
    // 'collapse-change',
    // 'data-reset',
  ],

  setup(props, { expose, slots, emit }) {
    const { conditionFormRender, searchFormRef } = useConditionForm(
      props,
      emit,
      slots
    )
    const conditionInfo = {
      searchFormRef,
    }
    const { resultTablemRender, search } = useResultTable(
      props,
      emit,
      slots,
      conditionInfo
    )
    const tableInfo = {
      search,
    }
    expose({
      search,
    })
    return () => {
      return [conditionFormRender(tableInfo), resultTablemRender()]
    }
  },
})
