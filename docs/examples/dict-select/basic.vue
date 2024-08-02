<template>
  <bf-dict-select
    v-model="selectedVal"
    :dict-id="'test1'"
    @change="handlerChange"
  />
  {{ selectedVal }}
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
const selectedVal = ref<string>()

const handlerChange = (list) => {
  console.log('change', list)
}
</script>
