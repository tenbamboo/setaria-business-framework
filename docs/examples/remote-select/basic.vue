<template>
  <bf-remote-select
    v-model="selectedVal"
    :label-key="'dispValue'"
    :value-key="'fldValue'"
    :params="params"
    :http="'admin'"
    :url="'/t-rmbs-dict/listByCode'"
    :method="'post'"
    @change="handlerChange"
  />
  {{ selectedVal }}
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
const params = reactive<Record<string, any>>({
  dictName: 'yesNo',
})
const selectedVal = ref<string>()

const handlerChange = (list) => {
  console.log('change', list)
}
</script>
