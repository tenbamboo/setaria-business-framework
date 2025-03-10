<template>
  <el-config-provider v-if="isReady" :locale="providerLocale">
    <router-view />
    <slot />
  </el-config-provider>
</template>

<script lang="ts" setup>
import { computed, nextTick, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'

// 这里在构建 pnpm run docs:deploy 会报错，如果报错了就注释掉相关代码在构建，构建完成之后再还原
import elementZh from 'element-plus/es/locale/lang/zh-cn'
import elementEN from 'element-plus/es/locale/lang/en'
import scZh from 'setaria-components/es/locale/lang/zh-cn'
import scEn from 'setaria-components/es/locale/lang/en'
import { merge } from 'lodash-unified'
import { useBaseStore } from '@setaria-business-framework/store'
// import { validateRouteNoRole } from '@setaria-business-framework/utils'

defineOptions({
  name: 'BfMainLayout',
  inheritAttrs: false,
})

const { locale } = useI18n()
const baseStore = useBaseStore()

const localeIsReady = ref(true)

watch(
  () => locale.value,
  () => {
    localeIsReady.value = false
    nextTick().then(() => {
      localeIsReady.value = true
      // console.log("locale", locale.value);
    })
  }
)

const providerLocale = computed(() => {
  if (locale.value === 'zh-cn') {
    return merge(elementZh, scZh)
  }
  return merge(elementEN, scEn)
  // return null
})

const isReady = computed(() => {
  console.log('isReady', localeIsReady.value && baseStore.getHasExistUser)
  return localeIsReady.value && baseStore.getHasExistUser
})

defineExpose({})
</script>
