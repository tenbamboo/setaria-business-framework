<template>
  <el-input v-model="selectedVal" />
  <hr />
  <bf-chinese-money v-model="selectedVal" disabled />
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
const selectedVal = ref<string>('123')
</script>
