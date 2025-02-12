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
  />

  选择的数据: {{ selectedList }} <br />选择的显示数据: {{ displayValueList }}
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { ApplicationError, http } from '@setaria/setaria-ts'
import { getSchema } from 'setaria-business-framework'
import type { SchemaProps } from 'setaria-components'
import type { SeachPageEvents } from 'setaria-business-framework'

const request = http.admin
const selectedList = ref([])
const displayValueList = ref([])
const baseSchema = reactive<SchemaProps>(getSchema('Claim', 'Dict'))

// 通过required来做必填校验
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
  // 也可通过请求的回调来做自定义校验
  if (!pageInfo.dispValue) {
    return Promise.reject(new ApplicationError('Error1000', '请输入展示值'))
  }
  return request.post('/t-rmbs-dict/pageSize', pageInfo)
}
const handdlerSubmit = (list) => {
  selectedList.value = list
}
</script>
