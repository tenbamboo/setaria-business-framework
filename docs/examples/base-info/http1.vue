<template>
  <div>
    <el-button @click="fetchBusiness">fetchBusiness</el-button>
  </div>
</template>
<script lang="ts" setup>
import { ElButton } from 'element-plus'
import { http } from '@setaria/setaria-ts'

const fetchBusiness = (p: any) => {
  return http.admin.post('sys-user/pageByCondition', p)
}
</script>
