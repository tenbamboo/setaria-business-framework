<template>
  <div class="base-layout-container">
    <CommonHeader />

    <div class="flex-wrapper">
      <CommonMenu />

      <CommonBaseContent>
        <router-view v-slot="{ Component, route }">
          <transition name="fade" mode="out-in" appear>
            <component :is="Component" :key="route.fullPath" />
            <!-- <keep-alive v-else :include="cacheList">
              <component :is="Component" :key="route.fullPath" />
            </keep-alive> -->
          </transition>
        </router-view>
      </CommonBaseContent>
    </div>
  </div>
</template>

<script lang="ts" setup>
import CommonHeader from '../../components/header.vue'
import CommonMenu from '../../components/menu.vue'
import CommonBaseContent from '../../components/base-content.vue'

defineOptions({
  name: 'BfBaseLayout',
  inheritAttrs: false,
})

defineExpose({})
</script>
