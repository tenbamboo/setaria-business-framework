<template>
  <div class="base-layout-container">
    <CommonHeader />

    <div class="flex-wrapper">
      <CommonMenu />

      <CommonBaseContent>
        <div ref="contentRef" class="base-layout-inner-content">
          <router-view v-slot="{ Component }">
            <transition name="fade" mode="out-in" appear>
              <component :is="Component" />
            </transition>
          </router-view>
        </div>
      </CommonBaseContent>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { nextTick, ref } from 'vue'

import { useRouter } from 'vue-router'
import CommonHeader from '../../components/header.vue'
import CommonMenu from '../../components/menu.vue'
import CommonBaseContent from '../../components/base-content.vue'

defineOptions({
  name: 'BfBaseLayout',
  inheritAttrs: false,
})

const router = useRouter()

const contentRef = ref<Element>()

router.afterEach(() => {
  nextTick(() => {
    const dom = contentRef.value as Element
    if (dom) {
      dom.scrollTop = 0
    }
  })
})
defineExpose({})
</script>
