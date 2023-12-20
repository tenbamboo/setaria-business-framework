<template>
  <bf-search-page
    :schema="baseSchema"
    :condition-schema="conditionSchema"
    :condition-data="conditionData"
    :request="handlerRequest"
  />
  {{ conditionData }}
  <!-- <el-button @click="test1">test</el-button> -->
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { ElRate } from 'element-plus'
import { createDefaultObjectBySchema } from 'setaria-business-framework'
import { http } from '@setaria/setaria-ts'
import type { SchemaProps, SchemaUiPropsByTable } from 'setaria-components'

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
const conditionData = reactive(createDefaultObjectBySchema(baseSchema))

const conditionSchema = [
  'dictName',
  'dispValue',
  'fldValue',
  'orderId',
  'status',
]
// const tableUi = reactive<Record<string, SchemaUiPropsByTable>>({})

const handlerRequest = (pageInfo) => {
  return http.admin.post('/t-rmbs-dict/pageSize', pageInfo).then((res) => {
    console.log(res)
    return res
  })
}
</script>
