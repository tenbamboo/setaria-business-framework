<template>
  <el-dialog
    v-model="innerVisible"
    class="bf-search-help-dailog"
    :append-to-body="props.appendToBody"
    :close-on-click-modal="false"
    :draggable="true"
    :title="dialogTitleCom"
    :width="props.dialogWidth"
    :top="'10vh'"
    @opened="handlerBeforeOpened"
  >
    <div v-loading="isLoading">
      <ScSearchForm
        v-if="conditionSchema.length"
        ref="conditionRef"
        v-model="conditionData"
        label-position="top"
        label-suffix=":"
        :columns="CONDITION_COLUMNS"
        :schema="innerConditionSchema"
        :ui-schema="props.conditionUiSchema"
        :submitting="handlerSubmitting"
        :button-layout="['search', 'searchReset', 'slot', 'collapse']"
        @data-reset="handlerDataReset"
      >
        <template v-for="item in conditionSlots" #[item.targetKey]="scope">
          <slot :name="item.sourceKey" :data="scope" :status="'default'" />
        </template>

        <template #button>
          <el-button
            v-if="props.showConfirm"
            type="success"
            :icon="Check"
            @click="handlerSubmitSelect"
            >确认选取</el-button
          >
          <slot name="controlButtons" />
        </template>
      </ScSearchForm>

      <div v-else class="only-pick-area">
        <el-button
          v-if="props.showConfirm"
          type="primary"
          :icon="Check"
          @click="handlerSubmitSelect"
          >确认选取</el-button
        >
        <slot name="controlButtons" />
      </div>

      <ScSchemaTable
        ref="tableRef"
        v-model:page-num="innerPageNum"
        v-model:page-size="innerPageSize"
        :selection-type="props.selectionType"
        :data="tableData"
        :show-page="true"
        :schema="innerTableSchema"
        :ui-schema="props.tableUiSchema"
        :page-total="innerPageTotal"
        :is-reserve="props.isReserve"
        :selection-config="props.selectionConfig"
        :row-key="props.rowKey"
        @page-change="handlerPageChange"
        @selection-change="handlerSelectionChange"
        @cell-dbclick="handlerCellDbClick"
      >
        <template v-for="item in tableSlots" #[item.targetKey]="scope">
          <slot
            :name="item.sourceKey"
            :data="scope.data"
            :status="scope.status"
          />
        </template>
      </ScSchemaTable>
    </div>
  </el-dialog>
</template>

<script lang="ts" setup>
import { computed, nextTick, ref, watch } from 'vue'
import { ElMessage } from 'element-plus'
import { useI18n } from 'vue-i18n'
import { ScSchemaTable, ScSearchForm } from 'setaria-components'
import { ApplicationError } from '@setaria/setaria-ts'
import { Check } from '@element-plus/icons-vue'
import {
  createDefaultObjectBySchema,
  getSchemaByKeyArray,
  isFunction,
} from '@setaria-business-framework/utils'
import { useSeachHelpCommon } from '../../../hooks/searchHelpHooks'
import { basicSearchHelpEmits, basicSearchHelpProps } from './propsAndEmit'
import type {
  SchemaFormInstance,
  SchemaProps,
  SchemaTableEvents,
  SchemaTableInstance,
  SearchFormEvents,
} from 'setaria-components'
import type {
  PageRequestParams,
  PageResponseParams,
  TableRef,
} from '../../../../search-page/src/result-table'
// remoteSelectEmits,
// remoteSelectProps,

defineOptions({
  name: 'BfBasicSearchHelp',
  inheritAttrs: false,
})

const props = defineProps({ ...basicSearchHelpProps })
const emit = defineEmits(basicSearchHelpEmits)
const slots = defineSlots()
const { t } = useI18n()

const {
  innerVisible,
  // handlerSelectChange,
  // handlerSelectBlue,
  // handlerSelectDone,
} = useSeachHelpCommon(props, emit)

const CONDITION_COLUMNS = 3
const CONDITION_SLOT_PREFIX = 'condition.'
const TABLE_SLOT_PREFIX = 'table.'

const innerConditionSchema = ref<SchemaProps>({
  properties: {},
  required: [],
})
const innerTableSchema = ref<SchemaProps>({
  properties: {},
  required: [],
})
const conditionData = ref({})
const tableRef = ref<SchemaTableInstance>()
const conditionRef = ref<SchemaFormInstance>()
const tableData = ref<any[]>([])
const selectedList = ref<any[]>([])
const innerPageNum = ref<number>(1)
const innerPageSize = ref<number>(10)
const innerPageTotal = ref<number>()
// const innerOrderItem = ref<string>('')
// const innerOrderType = ref<string>('')
const isLoading = ref<boolean>(false)

const handlerSubmitting: SearchFormEvents.Submitting = () => {
  return search() as Promise<void>
}

const handlerDataReset: SearchFormEvents.DataReset = () => {
  // if (tableInfo.tableRef.value.getSelection()?.length) {
  //   emit('selection-change', [])
  //   // 清空选择的数据
  //   tableInfo.tableRef.value.clearSelection()
  // }

  conditionData.value = createDefaultObjectBySchema(innerConditionSchema.value)
  resetData()
  search(true)
  // tableInfo.search(true)
}

const handlerBeforeOpened = () => {
  resetData()
  emit('opened')
  if (props.autoSearch) {
    nextTick().then(() => {
      search(true)
    })
  }
}
const handlerSubmitSelect = () => {
  if (selectedList.value.length) {
    const afterFun = () => {
      emit('submit', selectedList.value)
      innerVisible.value = false
      resetData()
    }
    const fun = props.beforeSubmit(selectedList.value)
    if (fun.then) {
      fun.then(() => {
        afterFun()
      })
    } else if (fun) {
      afterFun()
    }
  } else {
    ElMessage({
      message: t('请先选择数据'),
      type: 'warning',
    })
  }
}

const handlerPageChange: SchemaTableEvents.PageChange = (
  currentPage,
  pageSize
) => {
  search()
}

const handlerSelectionChange: SchemaTableEvents.SelectionChange = (list) => {
  selectedList.value = list
}

const handlerCellDbClick: SchemaTableEvents.CellDbClick = () => {
  if (props.selectionType === 'radio') {
    handlerSubmitSelect()
  }
}
const getTableRef = () => {
  return tableRef.value as unknown as TableRef
}
const resetData = () => {
  conditionRef?.value?.resetFields()
  tableData.value = []
  selectedList.value = []
  getTableRef().clearSelection()
}

const search = (isReset = false) => {
  if (isReset) {
    innerPageNum.value = 1
    innerPageSize.value = 10
    // this.clearCheckboxRow();
    // this.handleSelectionChange([]);
    // this.createSearchCondition();
  }
  return fetchData()
}

const fetchData = () => {
  return new Promise((resolve, reject) => {
    const requestInterface = () => {
      if (isFunction(props.request)) {
        isLoading.value = true
        const params = {
          ...conditionData.value,
          pageSize: innerPageSize.value,
          pageNum: innerPageNum.value,
        } as PageRequestParams
        // 设置翻页信息
        // if (innerOrderType.value && innerOrderItem.value) {
        //   params.orderBy = [
        //     {
        //       name: innerOrderItem.value,
        //       type: innerOrderType.value.toUpperCase(),
        //     },
        //   ]
        // }
        // 设置存储各个数据
        // setStorageData(props.tableId, params)
        // 执行请求
        props
          .request(params)
          .then((res: PageResponseParams) => {
            const { data } = res
            const total = data.total ? +data.total : 0
            if (Array.isArray(data?.list)) {
              tableData.value = data?.list ?? []
              innerPageTotal.value = total
            } else {
              tableData.value = []
              innerPageTotal.value = 0
            }
            // nextTick().then(() => {
            //   .getTableInstance()!.recalculate(true)
            emit('search-success', tableData.value)
            // })
            resolve(res)
          })
          .catch((e: any) => {
            reject(e)
            throw e
          })
          .finally(() => {
            isLoading.value = false
          })
      } else {
        reject(new ApplicationError('AppError', '未指定request参数'))
      }
    }
    // if (this.$refs.searchConditionCardRef) {
    conditionRef?.value?.validate((conditionValidate: boolean) => {
      if (conditionValidate) {
        requestInterface()
      } else {
        reject(new ApplicationError('AppError', t('相关数据必填')))
      }
    })
  })
}

const dialogTitleCom = computed<string>(() => {
  return props.dialogTitle || t('选择数据')
})

const conditionSlots = computed(() => {
  const scopedSlots: any[] = []
  Object.keys(slots).forEach((key: string) => {
    if (key.includes(CONDITION_SLOT_PREFIX)) {
      // eslint-disable-next-line @typescript-eslint/ban-types
      const slot = slots[key] as Function
      if (isFunction(slot)) {
        scopedSlots.push({
          targetKey: key.replace(CONDITION_SLOT_PREFIX, ''),
          sourceKey: key,
        })
      }
    }
  })
  return scopedSlots
})

const tableSlots = computed(() => {
  const scopedSlots: any[] = []
  Object.keys(slots).forEach((key: string) => {
    if (key.includes(TABLE_SLOT_PREFIX)) {
      // eslint-disable-next-line @typescript-eslint/ban-types
      const slot = slots[key] as Function
      if (isFunction(slot)) {
        scopedSlots.push({
          targetKey: key.replace(TABLE_SLOT_PREFIX, ''),
          sourceKey: key,
        })
      }
    }
  })
  return scopedSlots
})

// const getOptionsList = () => {
//   return remoteSelect.value.getOptionsList()
// }

watch(
  () => props.conditionSchema,
  () => {
    if (Array.isArray(props.conditionSchema)) {
      innerConditionSchema.value = getSchemaByKeyArray(
        props.schema as SchemaProps,
        props.conditionSchema
      )
    } else {
      innerConditionSchema.value = props.conditionSchema
    }
    innerConditionSchema.value.required = props?.schema?.required || []
    // 初始化搜索值
    conditionData.value = createDefaultObjectBySchema(
      innerConditionSchema.value
    )
  },
  {
    immediate: true,
    deep: true,
  }
)

watch(
  () => props.tableSchema,
  () => {
    if (Array.isArray(props.tableSchema)) {
      innerTableSchema.value = {
        ...getSchemaByKeyArray(props.schema as SchemaProps, props.tableSchema),
        ...{ required: props.schema?.required || [] },
      }
    } else {
      innerTableSchema.value = props.tableSchema || props.schema
    }
  },
  {
    immediate: true,
    deep: true,
  }
)

defineExpose({
  // getOptionsList,
})
</script>
