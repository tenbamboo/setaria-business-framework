<template>
  <el-dialog
    v-model="innerVisible"
    class="bf-search-help-dailog"
    :append-to-body="true"
    :close-on-click-modal="false"
    :draggable="true"
    :title="'选择要删除的数据'"
    :width="'80%'"
    :top="'10vh'"
    @opened="handlerBeforeOpened"
  >
    <ScSchemaTable
      ref="tableRef"
      :selection-type="'checkbox'"
      :show-page="false"
      :data="innerValue"
      :show-column-setting="false"
      :show-control-column="false"
      :schema="tableSchemaCom"
      @selection-change="handlerSelectionChange"
    >
      <template #batchControl>
        <el-button type="text" @click="handlerDeleteData">{{
          t('common.delete')
        }}</el-button>
      </template>
    </ScSchemaTable>
  </el-dialog>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { useI18n } from 'vue-i18n'

import { getSchemaByKeyArray } from '@setaria-business-framework/utils'

import { useSeachHelpCommon } from '../../../hooks/searchHelpHooks'

import type { PropType } from 'vue'

import type { SchemaProps } from 'setaria-components'

const props = defineProps({
  schema: {
    type: Object as PropType<SchemaProps>,
    required: true,
  },
  tableSchema: {
    type: Array,
    // required: true,
    default: () => [],
  },
  modelValue: {
    type: Array,
    default: undefined,
  },
  visible: {
    type: Boolean,
    default: false,
  },
})
const emit = defineEmits({
  change: (newList: Array<Record<string, any>>) => true,
})

const { t } = useI18n()

const selectedList = ref<Array<any>>([])

const { innerValue, innerVisible } = useSeachHelpCommon(props, emit)

const handlerBeforeOpened = () => {
  selectedList.value = []
}
const handlerSelectionChange = (val: Array<any>) => {
  selectedList.value = val
}
const handlerDeleteData = () => {
  if (!selectedList.value.length) {
    ElMessage({
      message: t('common.plsSelectFirst'),
      type: 'error',
    })

    return
  }

  ElMessageBox.confirm(t('common.confirmDelete'), t('common.tip'))
    .then(() => {
      selectedList.value.forEach((item) => {
        const index = innerValue.value.indexOf(item)
        if (index !== -1) {
          innerValue.value.splice(index, 1)
        }
      })

      emit('change', innerValue.value)
    })
    .catch(() => {
      !1
    })
}

const tableSchemaCom = computed<SchemaProps>(() => {
  const baseSchema = getSchemaByKeyArray(
    props.schema,
    props.tableSchema as Array<string>
  )
  return baseSchema
})

defineExpose({
  // getOptionsList,
})
</script>
