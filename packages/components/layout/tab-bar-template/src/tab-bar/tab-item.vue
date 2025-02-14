<template>
  <span
    class="tab-item-container"
    :class="{ 'link-activated': itemData.fullPath === route.fullPath }"
    @click="goto(itemData)"
  >
    <span class="tag-link">
      {{ t(itemData.title) }}
    </span>
    <span class="close-btn" @click.stop="tagClose(itemData, index)">
      <el-icon>
        <Close />
      </el-icon>
    </span>
  </span>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { Close } from '@element-plus/icons-vue'
import { useI18n } from 'vue-i18n'
import { useTabBarStore } from '@setaria-business-framework/store'
import type { TagProps } from '@setaria-business-framework/store'
import type { PropType } from 'vue'
defineOptions({
  name: 'TabBarItem',
  inheritAttrs: false,
})
const props = defineProps({
  itemData: {
    type: Object as PropType<TagProps>,
    default() {
      return {} as TagProps
    },
  },
  index: {
    type: Number,
    default: 0,
  },
})

const { t } = useI18n()

const router = useRouter()
const route = useRoute()
const tabBarStore = useTabBarStore()

const goto = (tag: TagProps) => {
  router.push({ ...tag })
}
const tagList = computed(() => {
  return tabBarStore.getTabList
})

const tagClose = (tag: TagProps, idx: number) => {
  tabBarStore.deleteTag(idx, tag)
  if (props.itemData.fullPath === route.fullPath) {
    const latest = tagList.value[idx - 1] // 获取队列的前一个tab
    router.push({ name: latest.name })
  }
}
</script>
