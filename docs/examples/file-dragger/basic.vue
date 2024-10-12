<template>
  <bf-file-dragger disabled @file="handlerFiles">
    <div
      style="
        width: 100%;
        height: 200px;
        background: #efbbc4;
        border: 1px solid #ff6060;
      "
    >
      我是代理区域，文件拖拽到这里就可以了，并查看console
    </div>
  </bf-file-dragger>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'

const handlerFiles = (files) => {
  console.log(files)
}
</script>
