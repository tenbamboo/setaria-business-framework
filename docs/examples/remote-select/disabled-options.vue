<template>
  <bf-remote-select
    v-model="selectedVal"
    :label-key="'dispValue'"
    :value-key="'fldValue'"
    :params="params"
    :http="'admin'"
    :url="'/t-rmbs-dict/listByCode'"
    :method="'post'"
    :disabled-options="disabledOptions"
  />
  {{ selectedVal }}
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
const params = reactive<Record<string, any>>({
  dictName: 'yesNo',
})
const selectedVal = ref<string>()

const disabledOptions = reactive<Array<string>>(['1', '2', '3'])
</script>
