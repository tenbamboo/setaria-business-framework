/* eslint-disable @typescript-eslint/ban-types */
// import { computed, nextTick, reactive, ref } from 'vue'
import { ref, watch } from 'vue'
import { ElCard, useLocale } from 'element-plus'
// import { Rank, Setting } from '@element-plus/icons-vue'
// import { isArray } from 'lodash-unified'
// import XEUtils from 'xe-utils'
import { ScSearchForm } from 'setaria-components'

import {
  getSchemaByKeyArray,
  isFunction,
} from '@setaria-business-framework/utils'
import type {
  SchemaFormInstance,
  SchemaProps,
  SearchFormEvents,
} from 'setaria-components'
// import type { CheckboxValueType } from 'element-plus'
// import type { VxeGridInstance } from 'vxe-table'
import type { Ref, Slots } from 'vue'
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
  const { t } = useLocale()
  const searchFormRef = ref<SchemaFormInstance>()

  return {
    searchFormRef,
    conditionFormRender: (tableInfo: any) => {
      const getConditionTitle = () => {
        return props.conditionTitle || t('common.title')
      }

      const handlerDataChange: SearchFormEvents.DataChange = (
        schemaKey,
        val,
        model
      ) => {
        emit('condition-change', schemaKey, val, model)
      }
      const handlerDataReset: SearchFormEvents.DataReset = () => {
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
          // customSlots[key] = (scope: any) => {
          //   return slots[key]?.({ status: 'edit', data: scope })
          // }
        })

        return conditionSlots
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
            modelValue={props.conditionData}
            button-layout={props.conditionButtonLayout}
            columns={COLUMNS}
            expand={props.expand}
            schema={innerConditionSchema.value}
            ui-schema={props.conditionUiSchema}
            submitting={handlerSubmitting}
            collapse={props.collapse}
            onData-change={handlerDataChange}
            onData-reset={handlerDataReset}
            // on-expandChange={onExpand}
            // nativeOnSubmit={onSubmit}
          >
            {getConditionSlots()}
          </ScSearchForm>
        </ElCard>
      )
    },
  }
}
