<template>
  <div
    class="fssc-file-dragger"
    :class="{
      'is-dragover': dragover,
    }"
    @drop.prevent="onDrop"
    @dragover.prevent="onDragover"
    @dragleave.prevent="dragover = false"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
// import { UPDATE_MODEL_EVENT } from '@setaria-business-framework/constants'
// import { isBlank } from '@setaria-business-framework/utils'
import { fileDraggerEmits, fileDraggerProps } from './propsAndEmit'
// import type { InputValueType } from './propsAndEmit'

defineOptions({
  name: 'BfFileDragger',
  inheritAttrs: false,
})

const props = defineProps({ ...fileDraggerProps })
const emit = defineEmits(fileDraggerEmits)

const dragover = ref<boolean>(false)

const onDragover = () => {
  if (!props.disabled) {
    dragover.value = true
  }
}
const onDrop = (e: DragEvent) => {
  if (props.disabled) return
  dragover.value = false
  emit('file', e.dataTransfer?.files)
}

// const emit = defineEmits(remoteSelectEmits)

// defineExpose({
//   getOptionsList,
// })
</script>
