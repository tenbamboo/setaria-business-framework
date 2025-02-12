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
    :before-open="beforeOpen"
    :before-submit="beforeSubmit"
    @submit="handdlerSubmit"
  />

  选择的数据: {{ selectedList }} <br />选择的显示数据: {{ displayValueList }}
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { http } from '@setaria/setaria-ts'
import { getSchema } from 'setaria-business-framework'
import { ElMessage } from 'element-plus'
import type { SchemaProps } from 'setaria-components'
import type { SeachPageEvents } from 'setaria-business-framework'

const request = http.admin
const selectedList = ref([])
const displayValueList = ref([])
const baseSchema = reactive<SchemaProps>(getSchema('Claim', 'Dict'))

const tableSchema = ['dictName', 'dispValue', 'fldValue', 'orderId', 'status']

const conditionSchema = [
  'dictName',
  'dispValue',
  'fldValue',
  'orderId',
  'status',
]

const handlerRequest: SeachPageEvents.Request = (pageInfo) => {
  return request.post('/t-rmbs-dict/pageSize', pageInfo)
}
const handdlerSubmit = (list) => {
  console.log('选择的值为：', list)
}

const beforeOpen = () => {
  console.log('打开了Dialog')
  // 返回 true 则代表拦截通过
  return true
}

const beforeSubmit = (selectedList) => {
  console.log(selectedList)
  ElMessage({
    type: 'success',
    message: '提交了Dialog',
  })

  // 返回 true 则代表拦截通过
  // 也支持Promise 对象
  return true
}
</script>
