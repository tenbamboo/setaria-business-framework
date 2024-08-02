<template>
  <p>返回true 或者false 控制</p>
  <bf-remote-select
    v-model="selectedVal"
    :label-key="'dispValue'"
    :value-key="'fldValue'"
    :params="params"
    :http="'admin'"
    :url="'/t-rmbs-dict/listByCode'"
    :method="'post'"
    :before-change="beforeChange1"
  />
  {{ selectedVal }}

  <p>返回Promise对象的demo</p>
  <bf-remote-select
    v-model="selectedVal"
    :label-key="'dispValue'"
    :value-key="'fldValue'"
    :params="params"
    :http="'admin'"
    :url="'/t-rmbs-dict/listByCode'"
    :method="'post'"
    :before-change="beforeChange2"
  />
  {{ selectedVal }}
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'

const params = reactive<Record<string, any>>({
  dictName: 'yesNo',
})
const selectedVal = ref<string>()

const beforeChange1 = (newVal, oldVal) => {
  console.log(newVal, oldVal)
  if (newVal === '1') {
    ElMessage({
      type: 'error',
      message: '不允许选',
    })
    return false
  }
  return true
}

const beforeChange2 = (newVal, oldVal) => {
  return new Promise((resolve, reject) => {
    if (newVal === '1') {
      ElMessageBox.confirm('确认选Yes吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
      })
        .then(() => {
          resolve(true)
        })
        .catch(() => {
          reject()
        })
    } else {
      resolve(new Error('回滚啦'))
    }
  })
}
</script>
