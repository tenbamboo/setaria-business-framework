<template>
  <el-config-provider v-if="isReady" :locale="providerLocale">
    <router-view />
    <slot />
  </el-config-provider>
</template>

<script lang="ts" setup>
import { computed, nextTick, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
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
})

const isReady = computed(() => {
  console.log('isReady', localeIsReady.value && baseStore.getHasExistUser)
  return localeIsReady.value && baseStore.getHasExistUser
})

defineExpose({})
</script>
