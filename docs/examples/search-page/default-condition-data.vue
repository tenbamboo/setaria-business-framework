<template>
  <bf-search-page
    :schema="baseSchema"
    :condition-schema="conditionSchema"
    :default-condition-data="conditionData"
    :request="handlerRequest"
  />
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { http } from '@setaria/setaria-ts'
import type { SchemaProps } from 'setaria-components'
import type { SeachPageEvents } from 'setaria-business-framework'

const baseSchema = reactive<SchemaProps>({
  required: [],
  properties: {
    compId: {
      type: 'string',
      description: '',
      title: '公司id',
    },
    dictId: { type: 'string', description: '', title: '字典id' },
    dictName: { type: 'string', description: '', title: '字典名称' },
    dispValue: { type: 'string', description: '', title: '展示值' },
    fldValue: { type: 'string', description: '', title: '字典值' },
    id: {
      type: 'string',
      description: '',
      title: '主键id',
    },
    orderId: {
      type: 'string',
      description: '',
      title: '排序',
    },
    parentId: {
      type: 'string',
      description: '',
      title: '父级id',
    },
    status: { type: 'string', description: '', title: '状态' },
  },
})
const conditionData = reactive({
  dictName: 'Hello1',
})

const conditionSchema = [
  'dictName',
  'dispValue',
  'fldValue',
  'orderId',
  'status',
]
// const tableUi = reactive<Record<string, SchemaUiPropsByTable>>({})

const handlerRequest: SeachPageEvents.Request = (pageInfo) => {
  return http.admin.post('/t-rmbs-dict/pageSize', pageInfo).then((res) => {
    console.log(res)
    return res
  })
}
</script>
