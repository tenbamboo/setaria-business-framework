<template>
  <el-input
    v-if="!props.labelMode"
    v-model="innerInputDisplayValue"
    class="bf-input-search-help_input-area"
    :placeholder="t('请选择')"
    :disabled="props.disabled"
    :title="innerInputDisplayValue"
    :suffix-icon="Search"
    readonly
    @click="handlerShowDialog"
  >
    <template v-if="isShowDelete" #append>
      <el-button
        :icon="Delete"
        :disabled="props.disabled"
        @click.stop="handlerConfirmDelete"
      />
    </template>
  </el-input>
  <template v-else>
    {{ innerInputDisplayValue }}
  </template>

  <template v-if="!labelMode">
    <BfBasicSearchHelp
      ref="searchHelp"
      v-model:visible="visible"
      :request="props.request"
      :is-reserve="props.isReserve"
      :row-key="props.valueKey"
      :auto-search="props.autoSearch"
      :before-submit="props.beforeSubmit"
      :append-to-body="props.appendToBody"
      :selection-type="props.selectionType"
      :dialog-width="props.dialogWidth"
      :dialog-title="dialogTitleCom"
      :schema="props.schema"
      :table-schema="props.tableSchema"
      :condition-schema="props.conditionSchema"
      :table-ui-schema="props.tableUiSchema"
      :condition-ui-schema="props.conditionUiSchema"
      :show-pagination="props.showPage"
      :show-confirm="props.showConfirm"
      :selection-config="props.selectionConfig"
      @submit="handlerSubmitSelected"
      @done="handlerSelectDone"
    >
      <!-- @submit="handlerSelected"
    -->

      <template v-for="key in innerSlotList" #[key]="scope">
        <slot
          :name="key"
          :data="scope.data"
          :status="scope.status"
          :row-index="scope.rowIndex"
        />
      </template>
      <slot name="controlButtons" />
    </BfBasicSearchHelp>

    <DeleteDialog
      v-model:visible="deleteDialogVisible"
      v-model="readyDeleteList"
      :schema="delteteSchemaCom"
      :table-schema="[valueKey as string, displayKey as string]"
      @change="handlerDeleteDialogChange"
    />
  </template>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import { ElMessageBox } from 'element-plus'
import { useI18n } from 'vue-i18n'
import { get } from 'lodash-unified'
import { Delete, Search } from '@element-plus/icons-vue'
import { isBlank } from '@setaria-business-framework/utils'

import { BfBasicSearchHelp } from '../../dialog/index'
import { useSeachHelpCommon } from '../../../hooks/searchHelpHooks'
import {
  basicInputSearchHelpEmits,
  basicInputSearchHelpProps,
} from './propsAndEmit'
import DeleteDialog from './delete-dialog.vue'
import type { SchemaProps } from 'setaria-components'
import type { SearchHelpEvents } from '../../dialog/index'

defineOptions({
  name: 'BfBasicInputSearchHelp',
  inheritAttrs: false,
})

const props = defineProps({ ...basicInputSearchHelpProps })
const emit = defineEmits(basicInputSearchHelpEmits)

const { t } = useI18n()

const privateDisplayValue = ref<any>()
const visible = ref<boolean>(false)
const readyDeleteList = ref<Array<any>>([])
const deleteDialogVisible = ref<boolean>(false)

const slots = defineSlots()

const {
  innerValue,
  // innerVisible,
  // handlerSelectChange,
  // handlerSelectBlur,
  handlerSelectDone,
} = useSeachHelpCommon(props, emit)

const handlerShowDialog = () => {
  if (!props.disabled) {
    const afterFun = () => {
      visible.value = true
    }
    const fun = props.beforeOpen()
    if (fun.then) {
      fun.then(() => {
        afterFun()
      })
    } else if (fun) {
      afterFun()
    }
  }
}
const handlerConfirmDelete = () => {
  if (props.deleteType === 'all') {
    ElMessageBox.confirm(t('common.confirmDelete'), t('common.tip'))
      .then(() => {
        innerValue.value = ''
        innerDisplayValue.value = ''
        privateDisplayValue.value = ''
        emit('submit', [])
      })
      .catch(() => {
        !1
      })
  } else {
    // 处理选取删除的逻辑
    let displayVal = [] as Array<any>
    if (!isBlank(innerInputDisplayValue.value)) {
      displayVal = innerInputDisplayValue.value.split(',')
    }
    let proxyVal = innerValue.value as Array<any>
    if (!isBlank(innerValue.value) && !Array.isArray(innerValue.value)) {
      proxyVal = (innerValue.value as string).split(',')
    }

    readyDeleteList.value = proxyVal.map((item, index) => {
      const res = {} as Record<string, any>
      res[props.displayKey as string] = displayVal[index]
      res[props.valueKey as string] = item
      return res
    })
    deleteDialogVisible.value = true
  }
}

const handlerSubmitSelected: SearchHelpEvents.Submit = (list) => {
  // selectionType
  let val: any[] = []
  let displayVal: any[] = []
  if (props.selectionType === 'radio') {
    val = get(list, `[0].${props.valueKey}`, '')
    displayVal = get(list, `[0].${props.displayKey}`, '')
  } else {
    val = list.map((item) => item[props.valueKey as string])
    displayVal = list.map((item) => item[props.displayKey as string])

    if (props.pickType === 'append') {
      // 处理显示值
      if (!isBlank(innerDisplayValue.value)) {
        if (Array.isArray(innerDisplayValue.value)) {
          displayVal = [...innerDisplayValue.value, ...displayVal]
        } else {
          displayVal = [
            ...(innerDisplayValue.value as string).split(','),
            ...displayVal,
          ]
        }
        // 去重
        displayVal = [...new Set(displayVal)]
      }
      // 处理value
      if (!isBlank(innerValue.value)) {
        if (Array.isArray(innerValue.value)) {
          val = [...innerValue.value, ...val]
        } else {
          val = [...(innerValue.value as string).split(','), ...val]
        }
        // 去重
        val = [...new Set(val)]
      }
    }
  }
  innerDisplayValue.value = displayVal
  privateDisplayValue.value = displayVal
  innerValue.value = val

  emit('submit', list)
}
const handlerDeleteDialogChange = (list: Array<any>) => {
  const displayVal: Array<any> = []
  const val: Array<any> = []
  list.forEach((item) => {
    displayVal.push(item[props.displayKey as string])
    val.push(item[props.valueKey as string])
  })

  innerDisplayValue.value = displayVal
  privateDisplayValue.value = displayVal
  innerValue.value = val

  emit('submit', list, 'delete')
}

const innerInputDisplayValue = computed<string>(() => {
  if (innerValue.value) {
    // if (innerDisplayValue.value) {
    //   return Array.isArray(innerDisplayValue.value)
    //     ? innerDisplayValue.value.join()
    //     : innerDisplayValue.value
    // }
    if (privateDisplayValue.value) {
      return Array.isArray(privateDisplayValue.value)
        ? privateDisplayValue.value.join()
        : (privateDisplayValue.value as string)
    }
  }
  return Array.isArray(innerDisplayValue.value)
    ? innerDisplayValue.value.join()
    : (innerDisplayValue.value as string)
})
const isShowDelete = computed<boolean>(() => {
  return !!innerInputDisplayValue.value && !props.disabled
})
const dialogTitleCom = computed<string>(() => {
  return props.dialogTitle || t('common.selectData')
})

const innerSlotList = computed(() => {
  return Object.keys(slots)
  // return props.dialogTitle || t('common.selectData')
})

const delteteSchemaCom = computed(() => {
  return props.schema as SchemaProps
  // return props.dialogTitle || t('common.selectData')
})

const innerDisplayValue = computed({
  get: () => props.displayValue,
  set: (val) => {
    emit('update:displayValue', val as any)
  },
})

defineExpose({
  // getOptionsList,
})
</script>
