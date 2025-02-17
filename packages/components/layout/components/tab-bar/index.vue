<template>
  <div class="tab-bar-container">
    <div class="tab-bar-box">
      <el-scrollbar>
        <div class="tab-bar-inner">
          <tab-item
            v-for="(tag, index) in tagList"
            :key="tag.fullPath"
            :index="index"
            :item-data="tag"
          />
        </div>
      </el-scrollbar>
      <tab-oper :tag-list="tagList" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, onUnmounted } from 'vue'
import { useTabBarStore } from '@setaria-business-framework/store'

import {
  listenerRouteChange,
  removeRouteListener,
} from '@setaria-business-framework/utils'
import TabItem from './tab-item.vue'
import TabOper from './tab-oper.vue'

defineOptions({
  name: 'TabBar',
  inheritAttrs: false,
})

// const appStore = useAppStore();
const tabBarStore = useTabBarStore()

const tagList = computed(() => {
  return tabBarStore.getTabList
})

// watch(
//   () => appStore.navbar,
//   () => {
//     affixRef.value.update();
//   },
// );
listenerRouteChange((route) => {
  if (
    !route.meta.noAffix &&
    !tagList.value.some((tag) => tag.fullPath === route.fullPath)
  ) {
    tabBarStore.updateTabList(route)
  }
}, true)

onUnmounted(() => {
  removeRouteListener()
})
</script>
