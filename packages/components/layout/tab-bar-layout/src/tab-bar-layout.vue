<template>
  <div class="tab-bar-layout-container">
    <CommonHeader />

    <div class="flex-wrapper">
      <CommonMenu />

      <CommonBaseContent>
        <el-affix :offset="58">
          <TabBar />
        </el-affix>
        <div ref="contentRef" class="tab-bar-layout-inner-content">
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
      </CommonBaseContent>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, nextTick, onMounted, onUnmounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import {
  setRouteEmitter,
  validateRouteNoRole,
} from '@setaria-business-framework/utils'
import { useTabBarStore } from '@setaria-business-framework/store'
import TabBar from '../../components/tab-bar/index.vue'
import CommonHeader from '../../components/header.vue'
import CommonMenu from '../../components/menu.vue'
import CommonBaseContent from '../../components/base-content.vue'

defineOptions({
  name: 'BfTabBarLayout',
  inheritAttrs: false,
})

const router = useRouter()
const route = useRoute()

const tabBarStore = useTabBarStore()
// reactive<Record<string, any>>({
//   dictName: 'yesNo',
// })
const scrollStorageInfo = ref<Record<string, any>>({})
const contentRef = ref<Element>()
const cacheList = computed(() => tabBarStore.getCacheList)

// 如果通过URL直接进入的逻辑
const defaultURLEnter = () => {
  const findObj = cacheList.value.find((item) => item === route.name)
  if (!findObj && !route.meta.hideInTab && !validateRouteNoRole(route)) {
    setRouteEmitter(route)
  }
}

const setScroll = (name: string) => {
  const scrollY = scrollStorageInfo.value[name as string]
  const dom = contentRef.value as Element
  nextTick(() => {
    if (scrollY) {
      dom.scrollTop = scrollY
    } else {
      dom.scrollTop = 0
    }
  })
}

const handleScroll = (e: Event) => {
  if (e.target === contentRef.value) {
    scrollStorageInfo.value[route.name as string] = (
      e.target as Element
    ).scrollTop
  }
}

router.beforeEach(async (to) => {
  // emit route change
  if (!to.meta.hideInTab && !validateRouteNoRole(to)) {
    setRouteEmitter(to)
  }
})

router.afterEach(async (to) => {
  setScroll(to.name as string)
})

onMounted(() => {
  defaultURLEnter()
  window.addEventListener('scroll', handleScroll, true)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll, true)
})

defineExpose({})
</script>
