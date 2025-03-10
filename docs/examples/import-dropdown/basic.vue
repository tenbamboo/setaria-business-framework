<template>
  <div>
    <bf-import-dropdown
      ref="import"
      :download-template-url="'/fund/transFlow/fundManager/template'"
      :import-url="'/fund/transFlow/importTransFlow'"
      :import-url-params="importParams"
      @import-success="importSuccess"
      @import-error="importError"
    />
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { ElMessage } from 'element-plus'
const uploader = ref()

const importParams = ref({
  type: 'normal',
  test2: 2,
})

const importSuccess = (res) => {
  console.log(res)
  if (res.code === 200) {
    ElMessage.success('导入成功')
  } else {
    ElMessage({
      dangerouslyUseHTMLString: true,
      type: 'error',
      message: res.message,
    })
  }
}
const importError = (res) => {
  console.log(res)
}
</script>
