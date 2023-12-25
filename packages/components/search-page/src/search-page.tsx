import { defineComponent } from 'vue'

import { searchPageProps } from './props'
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
    'selection-change',
    'selection-all',
    'cell-click',
    'cell-dbclick',
    'oper-button-click',
    'export-success',
    'export-error',
    // 'input',
    // 'data-change',
    // 'data-submit',
    // 'collapse-change',
    // 'data-reset',
  ],

  setup(props, { expose, slots, emit }) {
    const { conditionFormRender, searchFormRef, innerConditionData } =
      useConditionForm(props, emit, slots)
    const conditionInfo = {
      searchFormRef,
      innerConditionData,
    }
    const {
      resultTablemRender,
      search,
      tableRef,
      setSelection,
      getSelection,
      clearSelection,
    } = useResultTable(props, emit, slots, conditionInfo)
    const tableInfo = {
      search,
      tableRef,
    }
    expose({
      search,
      setSelection,
      getSelection,
      clearSelection,
      getTableRef: () => {
        return tableRef
      },
      getConditionRef: () => {
        return searchFormRef
      },
    })
    return () => {
      return [conditionFormRender(tableInfo), resultTablemRender()]
    }
  },
})
