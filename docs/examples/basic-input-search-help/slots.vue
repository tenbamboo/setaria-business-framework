<template>
  <span>点击Input框选取数据:</span>
  <bf-basic-input-search-help
    v-model="selectedList"
    v-model:displayValue="displayValueList"
    :value-key="'fldValue'"
    :display-key="'dispValue'"
    :schema="baseSchema"
    :condition-schema="conditionSchema"
    :table-schema="tableSchema"
    :request="handlerRequest"
    @submit="handdlerSubmit"
  >
    <template #condition.status="scope">
      <el-rate v-model="scope.data.status" />
    </template>

    <template #table.orderId="scope">
      {{ scope.data.orderId + '$$$$' }}
    </template>
  </bf-basic-input-search-help>

  选择的数据: {{ selectedList }} <br />选择的显示数据: {{ displayValueList }}
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { http } from '@setaria/setaria-ts'
import { getSchema } from 'setaria-business-framework'
import type { SchemaProps } from 'setaria-components'
import type { SeachPageEvents } from 'setaria-business-framework'

const request = http.admin
const selectedList = ref([])
const displayValueList = ref([])
const baseSchema = reactive<SchemaProps>(getSchema('Claim', 'Dict'))

const tableSchema = ['dictName', 'dispValue', 'fldValue', 'orderId', 'status']

const conditionSchema = [
  'status',
  'dictName',
  'dispValue',
  'fldValue',
  'orderId',
]

const handlerRequest: SeachPageEvents.Request = (pageInfo) => {
  return request.post('/t-rmbs-dict/pageSize', pageInfo)
}
const handdlerSubmit = (list) => {
  selectedList.value = list
}
</script>
