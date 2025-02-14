<template>
  <div>
    <TabBar />
    <router-view v-slot="{ Component, route }">
      <transition name="fade" mode="out-in" appear>
        <component
          :is="Component"
          v-if="route.meta.ignoreCache"
          :key="route.fullPath"
        />
        <keep-alive v-else :include="cacheList">
          <component :is="Component" :key="route.fullPath" />
        </keep-alive>
      </transition>
    </router-view>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { setRouteEmitter } from '@setaria-business-framework/utils'
import { useTabBarStore } from '@setaria-business-framework/store'
import TabBar from './tab-bar/index.vue'

defineOptions({
  name: 'BfTabBarTemplate',
  inheritAttrs: false,
})

const router = useRouter()

const tabBarStore = useTabBarStore()

const cacheList = computed(() => tabBarStore.getCacheList)

router.beforeEach(async (to) => {
  // emit route change
  if (!to.meta.hideInTab) {
    setRouteEmitter(to)
  }
})

defineExpose({})
</script>
