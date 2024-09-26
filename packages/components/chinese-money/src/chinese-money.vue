<template>
  <bf-fake-component v-model="innerValue" :label-mode="labelMode">
    <el-input v-model="innerValue" :disabled="disabled" />
  </bf-fake-component>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
// import { UPDATE_MODEL_EVENT } from '@setaria-business-framework/constants'
import { convertChineseMoney, isBlank } from '@setaria-business-framework/utils'
import { chineseMoneyEmits, chineseMoneyProps } from './propsAndEmit'
import type { InputValueType } from './propsAndEmit'
defineOptions({
  name: 'BfChineseMoney',
  inheritAttrs: false,
})

const props = defineProps({ ...chineseMoneyProps })
const emit = defineEmits(chineseMoneyEmits)

const innerValue = computed({
  get: () => {
    if (isBlank(props.modelValue)) {
      return ''
    }
    return convertChineseMoney(props.modelValue as InputValueType)
  },
  set: (val) => {
    //   emit(UPDATE_MODEL_EVENT, val as unknown as InputValueType)
  },
})

// const emit = defineEmits(remoteSelectEmits)

// defineExpose({
//   getOptionsList,
// })
</script>
