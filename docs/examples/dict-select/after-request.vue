<template>
  <bf-remote-select
    v-model="selectedVal"
    :label-key="'dispValue'"
    :value-key="'fldValue'"
    :params="params"
    :http="'admin'"
    :url="'/t-rmbs-dict/listByCode'"
    :method="'post'"
    :after-request="afterRequest"
  />
  {{ selectedVal }}
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
const params = reactive<Record<string, any>>({
  dictName: 'yesNo',
})
const selectedVal = ref<string>()

const afterRequest = (list) => {
  console.log('afterRequest', list)
  // 这里可以对list做添加修改参数等一系列操作
  return list
}
</script>
