<template>
  <div>
    <el-button @click="fetchBusiness">fetchBusiness</el-button>
  </div>
</template>
<script lang="ts" setup>
import { ElButton } from 'element-plus'
import { http } from '@setaria/setaria-ts'

const fetchBusiness = (p: any) => {
  http
    .admin({
      method: 'post',
      url: '/t-rmbs-dict/listByCode',
      isControllRepeat: true, // 通过此属性来控制在大量请求时的节流
    })
    .then((res) => {
      console.log('第1', res)
    })
  http
    .admin({
      method: 'post',
      url: '/t-rmbs-dict/listByCode',
      isControllRepeat: true, // 通过此属性来控制在大量请求时的节流
    })
    .then((res) => {
      console.log('第2', res)
    })
  http
    .admin({
      method: 'post',
      url: '/t-rmbs-dict/listByCode',
      isControllRepeat: true, // 通过此属性来控制在大量请求时的节流
    })
    .then((res) => {
      console.log('第3', res)
    })
}
</script>
