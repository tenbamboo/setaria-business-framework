/* eslint-disable @typescript-eslint/ban-types */
// import { computed, nextTick, reactive, ref } from 'vue'
import { nextTick, ref, watch } from 'vue'
import { ElCard, useLocale } from 'element-plus'
// import { Rank, Setting } from '@element-plus/icons-vue'
import { cloneDeep, isEmpty } from 'lodash-unified'
// import XEUtils from 'xe-utils'
import { ScSchemaTable, schemaTableProps } from 'setaria-components'

import {
  getSchemaByKeyArray,
  isFunction,
} from '@setaria-business-framework/utils'
import type { Slots } from 'vue'
import type {
  SchemaProps,
  SchemaTableEvents,
  SchemaTableInstance,
  // SearchFormEvents,
} from 'setaria-components'
// import type { CheckboxValueType } from 'element-plus'
// import type { VxeGridInstance } from 'vxe-table'

// const visibleStorageKey = 'VXE_TABLE_CUSTOM_COLUMN_VISIBLE'
// const dragSortStorageKey = 'VXE_TABLE_CUSTOM_COLUMN_DRAG_SORT'

export declare interface PageRequestParams {
  pageSize?: number | string
  pageNum: number | string
  params?: any
  orderBy?: Array<{ name: string; type: string }>
}

export declare interface PageResponseParams {
  data: {
    total: number | string
    list: Array<any>
  }
  code: number | string
  message: string
}

export const useResultTable = (
  props: any,
  emit: Function,
  slots: Slots,
  conditionInfo: any
  // columnsBySchema: any[]
) => {
  const innerTableSchema = ref<SchemaProps>({
    properties: {},
    required: [],
  })
  const tableRef = ref<SchemaTableInstance>()
  const tableData = ref<any[]>([])
  const innerPageNum = ref<number>(1)
  const innerPageSize = ref<number>(10)
  const innerPageTotal = ref<number>()
  const innerOrderItem = ref<string>('')
  const innerOrderType = ref<string>('')
  const isLoading = ref<boolean>(false)
  const { t } = useLocale()

  const getResultTableTitle = () => {
    return props.tableTitle || t('common.title2')
  }

  // const handlerDataChange: SearchFormEvents.DataChange = (
  //   schemaKey,
  //   val,
  //   model
  // ) => {
  //   console.log(schemaKey, val, model)
  // }

  // const handlerDataReset: SearchFormEvents.DataReset = () => {
  //   console.log()
  // }

  const createSearchCondition = () => {
    const params = cloneDeep(props.conditionData)
    // if (isFunction(props.beforeRequest)) {
    //   params = props.beforeRequest(params)
    // }
    return params
  }

  const fetchData = () => {
    return new Promise((resolve, reject) => {
      const requestInterface = () => {
        if (isFunction(props.request)) {
          isLoading.value = true
          const params = {
            ...createSearchCondition(),
            pageSize: innerPageSize.value,
            pageNum: innerPageNum.value,
          } as PageRequestParams
          // 设置翻页信息
          if (!isEmpty(innerOrderType) && !isEmpty(innerOrderItem)) {
            params.orderBy = [
              {
                name: innerOrderItem.value,
                type: innerOrderType.value.toUpperCase(),
              },
            ]
          }
          // writeEnterDetailStorage(params)
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
              nextTick().then(() => {
                tableRef.value?.getTableInstance().recalculate(true)
                emit('search-success', tableData.value)
              })
              resolve(res)
            })
            .catch((e: any) => {
              emit('search-error', e)
              reject(e)
              throw e
            })
            .finally(() => {
              isLoading.value = false
            })
        } else {
          reject(new Error('未指定request参数'))
        }
      }
      // if (this.$refs.searchConditionCardRef) {
      conditionInfo.searchFormRef.value.validate(
        (conditionValidate: boolean) => {
          if (conditionValidate) {
            requestInterface()
          } else {
            reject(new Error(t('common.inputRequiredFirst')))
          }
        }
      )
      // } else {
      //   requestInterface()
      // }
    })
  }

  const handlerPageChange: SchemaTableEvents.PageChange = (params) => {
    search()
    emit('page-change', params)
  }
  const handlerSortChange: SchemaTableEvents.SortChange = (params) => {
    innerOrderItem.value = params.field
    innerOrderType.value = params.order || ''
    innerPageNum.value = 1
    search()
    emit('sort-change', params)
  }

  const search = (isReset = false) => {
    if (isReset) {
      innerPageNum.value = 1
      innerPageSize.value = props?.pageSizes?.[0] || 10
      innerOrderItem.value = ''
      innerOrderType.value = ''
      // this.clearCheckboxRow();
      // this.handleSelectionChange([]);
      // this.createSearchCondition();
    }
    return fetchData()
  }

  return {
    search,
    resultTablemRender: () => {
      watch(
        () => props.tableSchema,
        () => {
          if (Array.isArray(props.tableSchema)) {
            innerTableSchema.value = {
              ...getSchemaByKeyArray(props.schema, props.tableSchema),
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

      const geTableSlots = () => {
        const SLOT_PREFIX = 'table.'
        const tableSlots = {} as {
          [targetKey: string]: (scope: any) => any
        }
        Object.keys(slots).forEach((key: string) => {
          if (key.includes(SLOT_PREFIX)) {
            const slot = slots[key] as Function
            const targetKey = key.replace(SLOT_PREFIX, '')
            if (isFunction(slot)) {
              tableSlots[targetKey] = (scope: any) => {
                return slot(scope)
              }
            }
          }
          // customSlots[key] = (scope: any) => {
          //   return slots[key]?.({ status: 'edit', data: scope })
          // }
        })

        return tableSlots
      }

      const tableProps = Object.keys(props).reduce((res, key) => {
        if (key in schemaTableProps) {
          res[key as keyof typeof props] = props[key as keyof typeof props]
        }
        return res
      }, {} as any)

      if (props.isInitialSearch) {
        nextTick().then(() => {
          search()
        })
      }

      return (
        <ElCard
          class="bf-search-page_result-table"
          shadow="never"
          v-slots={{
            header: getResultTableTitle,
          }}
        >
          <ScSchemaTable
            v-loading={isLoading.value}
            ref={tableRef}
            show-page={true}
            {...tableProps}
            data={tableData.value}
            schema={innerTableSchema.value}
            ui-schema={props.tableUiSchema}
            v-model:page-num={innerPageNum.value}
            v-model:page-size={innerPageSize.value}
            page-total={innerPageTotal.value}
            onPage-change={handlerPageChange}
            onSort-change={handlerSortChange}
            // {...{
            //   'onUpdate:pageSize': (val: any) => {
            //     innerPageSize.value = val
            //     emit('update:pageSize', val)
            //   },
            //   'onUpdate:currentPage': (val: any) => {
            //     innerPageNum.value = val
            //     emit('update:pageNum', val)
            //   },
            // }}

            // submitting={props.submitting}
            // 需要内置各种默认属性
            // 需要暴露各种事件与内置逻辑

            // onData-change={handlerDataChange}
            // onData-reset={handlerDataReset}
            // on-expandChange={onExpand}
            // nativeOnSubmit={onSubmit}
          >
            {geTableSlots()}
          </ScSchemaTable>
        </ElCard>
      )
    },
  }
}
