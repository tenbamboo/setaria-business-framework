<template>
  <bf-fake-component v-model="selectedVal" :label-mode="true">
    只读模式下的值显示：<el-input v-model="selectedVal" />
  </bf-fake-component>
  <br />
  <bf-fake-component v-model="selectedVal" :label-mode="false">
    非只读模式下的值显示：<el-input v-model="selectedVal" />
  </bf-fake-component>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
const selectedVal = ref<string>('123123123')
</script>
