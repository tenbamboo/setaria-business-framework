<template>
  <bf-basic-search-help
    v-model:visible="visible"
    :schema="baseSchema"
    :condition-schema="conditionSchema"
    :table-schema="tableSchema"
    :request="handlerRequest"
    @submit="handdlerSubmit"
  >
    <!-- <template #condition.status="scope">
      <el-rate v-model="scope.data.status" />
    </template>

    <template #table.orderId="scope">
      {{ scope.data.orderId + '$$$$' }}
    </template> -->
  </bf-basic-search-help>
  <el-button @click="visible = true">打开</el-button><br />
  选择的数据: {{ selectedList }}
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { ApplicationError, http } from '@setaria/setaria-ts'
import { getSchema } from 'setaria-business-framework'
import type { SchemaProps } from 'setaria-components'
import type { SeachPageEvents } from 'setaria-business-framework'
const request = http.admin
const visible = ref<boolean>(false)
const selectedList = ref([])
const baseSchema = reactive<SchemaProps>(getSchema('Claim', 'Dict'))
// 可通过required 属性来控制搜索组件中的Item
baseSchema.required = ['dictName']

const tableSchema = ['dictName', 'dispValue', 'fldValue', 'orderId', 'status']

const conditionSchema = [
  'dictName',
  'dispValue',
  'fldValue',
  'orderId',
  'status',
]

const handlerRequest: SeachPageEvents.Request = (pageInfo) => {
  // if (!pageInfo.dispValue) {
  //   return Promise.reject(new ApplicationError('Error1000', '请输入展示值'))
  // }
  return request.post('/t-rmbs-dict/pageSize', pageInfo)
}
const handdlerSubmit = (list) => {
  selectedList.value = list
}
</script>
