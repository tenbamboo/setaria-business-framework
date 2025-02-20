/* eslint-disable @typescript-eslint/ban-types */
// import { computed, nextTick, reactive, ref } from 'vue'
import { ref, watch } from 'vue'
import { ElCard } from 'element-plus'
// import { Rank, Setting } from '@element-plus/icons-vue'
// import { isArray } from 'lodash-unified'
// import XEUtils from 'xe-utils'
import { ScSearchForm } from 'setaria-components'
import { cloneDeep, merge } from 'lodash-unified'
import {
  createDefaultObjectBySchema,
  getSchemaByKeyArray,
  isFunction,
} from '@setaria-business-framework/utils'
import { getStorageData } from './common'

import type {
  SchemaFormInstance,
  SchemaProps,
  SearchFormEvents,
} from 'setaria-components'
// import type { CheckboxValueType } from 'element-plus'
// import type { VxeGridInstance } from 'vxe-table'
import type { Slots } from 'vue'
// const visibleStorageKey = 'VXE_TABLE_CUSTOM_COLUMN_VISIBLE'
// const dragSortStorageKey = 'VXE_TABLE_CUSTOM_COLUMN_DRAG_SORT'
const COLUMNS = 3

export const useConditionForm = (
  props: any,
  emit: Function,
  slots: Slots
  // columnsBySchema: any[]
) => {
  const innerConditionSchema = ref<SchemaProps>({
    properties: {},
    required: [],
  })
  const innerConditionData = ref({})
  // const { t } = useLocale()
  const searchFormRef = ref<SchemaFormInstance>()

  return {
    searchFormRef,
    innerConditionData,
    conditionFormRender: (tableInfo: any) => {
      const getConditionTitle = () => {
        return props.conditionTitle || '搜索条件'
      }

      const handlerDataChange: SearchFormEvents.DataChange = (
        schemaKey,
        val,
        model
      ) => {
        // props.conditionData[schemaKey] = val
        emit('condition-change', schemaKey, val, model)
      }
      const handlerDataReset: SearchFormEvents.DataReset = () => {
        if (tableInfo.tableRef.value.getSelection()?.length) {
          emit('selection-change', [])
          // 清空选择的数据
          tableInfo.tableRef.value.clearSelection()
        }

        innerConditionData.value = merge(
          createDefaultObjectBySchema(props.schema)
          // 这块有一个争议，是否在重置的时候把默认的值赋值进来
          // cloneDeep(props.defaultConditionData)
        )

        if (props.isResetAfterRequest) {
          tableInfo.search(true)
        }
      }
      const handlerSubmitting: SearchFormEvents.Submitting = () => {
        return tableInfo.search(true)
      }

      watch(
        () => props.conditionSchema,
        () => {
          if (Array.isArray(props.conditionSchema)) {
            innerConditionSchema.value = getSchemaByKeyArray(
              props.schema,
              props.conditionSchema
            )
          } else {
            innerConditionSchema.value = props.conditionSchema
          }
        },
        {
          immediate: true,
          deep: true,
        }
      )

      watch(
        () => props.defaultConditionData,
        () => {
          const storageData = getStorageData(props.tableId)
          innerConditionData.value = merge(
            createDefaultObjectBySchema(props.schema),
            cloneDeep(props.defaultConditionData),
            storageData
          )
        },
        {
          immediate: true,
          deep: true,
        }
      )

      const getConditionSlots = () => {
        const SLOT_PREFIX = 'condition.'
        const conditionSlots = {} as {
          [targetKey: string]: (scope: any) => any | undefined
        }
        Object.keys(slots).forEach((key: string) => {
          if (key.includes(SLOT_PREFIX)) {
            const slot = slots[key] as Function
            const targetKey = key.replace(SLOT_PREFIX, '')
            if (isFunction(slot)) {
              conditionSlots[targetKey] = (scope: any) => {
                return slot({ status: 'edit', data: scope })
              }
            }
          }
        })
        if (Object.keys(conditionSlots).length) {
          return conditionSlots
        }

        return null
      }

      const getFormButtonSlot = () => {
        if (isFunction(slots.conditionButton)) {
          return (slots.conditionButton as Function)()
        }
        return null
      }
      return (
        <ElCard
          class="bf-search-page_condition-form"
          shadow="never"
          v-slots={{
            header: getConditionTitle,
          }}
        >
          <ScSearchForm
            ref={searchFormRef}
            label-position="top"
            label-suffix=":"
            modelValue={innerConditionData.value}
            button-layout={props.conditionButtonLayout}
            columns={COLUMNS}
            expand={props.expand}
            schema={innerConditionSchema.value}
            ui-schema={props.conditionUiSchema}
            submitting={handlerSubmitting}
            collapse={props.collapse}
            onData-change={handlerDataChange}
            onData-reset={handlerDataReset}
            v-slots={{
              button: getFormButtonSlot,
              ...getConditionSlots(),
            }}
            // on-expandChange={onExpand}
            // nativeOnSubmit={onSubmit}
          >
            {/* {getConditionSlots()} */}
          </ScSearchForm>
        </ElCard>
      )
    },
  }
}
