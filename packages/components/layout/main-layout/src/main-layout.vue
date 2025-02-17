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

defineOptions({
  name: 'BfMainLayout',
  inheritAttrs: false,
})

const { locale } = useI18n()
const isReady = ref(true)

watch(
  () => locale.value,
  () => {
    isReady.value = false
    nextTick().then(() => {
      isReady.value = true
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

defineExpose({})
</script>
