<template>
  <div>
    <template v-if="!props.labelMode">
      <slot />
    </template>
    <template v-else>
      {{ props.modelValue }}
    </template>
  </div>
</template>

<script lang="ts" setup>
// import { ref } from 'vue'
import { fakeComponentProps } from './propsAndEmit'

defineOptions({
  name: 'BfFakeComponent',
  inheritAttrs: false,
})

const props = defineProps({ ...fakeComponentProps })
// const emit = defineEmits(remoteSelectEmits)

// defineExpose({
//   getOptionsList,
// })
</script>
