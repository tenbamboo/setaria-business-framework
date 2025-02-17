<template>
  <div class="common-header-container">
    <div class="header-left" />
    <div class="header-right" />
  </div>
</template>

<script lang="ts" setup>
// import { computed } from 'vue'
// import { useRouter } from 'vue-router'
// import { setRouteEmitter } from '@setaria-business-framework/utils'
// import { useTabBarStore } from '@setaria-business-framework/store'

// defineOptions({
//   name: 'CommonHeader',
//   inheritAttrs: false,
// })

// const router = useRouter()

// const tabBarStore = useTabBarStore()

// const cacheList = computed(() => tabBarStore.getCacheList)

// router.beforeEach(async (to) => {
//   // emit route change
//   if (!to.meta.hideInTab) {
//     setRouteEmitter(to)
//   }
// })

defineExpose({})
</script>
