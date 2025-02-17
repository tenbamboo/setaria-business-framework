<template>
  <div class="tab-bar-layout-container">
    <CommonHeader />

    <div class="flex-wrapper">
      <CommonMenu />

      <CommonBaseContent>
        <el-affix :offset="58">
          <TabBar />
        </el-affix>
        <div class="tab-bar-inner-content">
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
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { setRouteEmitter } from '@setaria-business-framework/utils'
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
