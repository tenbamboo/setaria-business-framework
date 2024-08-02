<template>
  <bf-remote-select
    v-model="selectedVal"
    :label-key="'dispValue'"
    :value-key="'fldValue'"
    :params="params"
    :http="'admin'"
    :url="'/t-rmbs-dict/listByCode'"
    :method="'post'"
  >
    <template #append>
      <el-button :icon="Search" @click="handlerTest" />
    </template>
  </bf-remote-select>
  {{ selectedVal }}
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { ElButton } from 'element-plus'
import { Search } from '@element-plus/icons-vue'

const params = reactive<Record<string, any>>({
  dictName: 'yesNo',
})
const selectedVal = ref<string>()

const handlerTest = () => {
  alert('Hello would')
}
</script>
