<template>
  <bf-remote-select
    ref="remoteSelect"
    v-model="innerValue"
    :http="'admin'"
    :method="'post'"
    :url="url"
    :params="paramsCom"
    :label-mode="props.labelMode"
    :label-key="props.labelKey"
    :value-key="props.valueKey"
    :format-option-type="props.formatOptionType"
    :is-storage="props.isStorage"
    :disabled="props.disabled"
    v-bind="$attrs"
    :clearable="props.clearable"
    :disabled-options="props.disabledOptions"
    :before-change="props.beforeChange"
    @change="handlerSelectChange"
    @blur="handlerSelectBlue"
    @done="handlerSelectDone"
  >
    <template #append>
      <slot name="append" />
    </template>
  </bf-remote-select>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import {
  remoteSelectEmits,
  remoteSelectProps,
} from '../../remote-select/src/propsAndEmit'
import { useSelectCommon } from '../../hooks/selectHooks'
import { dictSelectProps } from './propsAndEmit'

defineOptions({
  name: 'BfDictSelect',
  inheritAttrs: false,
})

const props = defineProps({ ...remoteSelectProps, ...dictSelectProps })
const emit = defineEmits(remoteSelectEmits)

const {
  innerValue,
  handlerSelectChange,
  handlerSelectBlue,
  handlerSelectDone,
} = useSelectCommon(props, emit)

const remoteSelect = ref()

const url = '/t-rmbs-dict/listByCode'

const paramsCom = computed<Record<string, any>>(() => {
  return {
    dictName: props.dictId,
  }
})

const getOptionsList = () => {
  return remoteSelect.value.getOptionsList()
}

defineExpose({
  getOptionsList,
})
</script>
