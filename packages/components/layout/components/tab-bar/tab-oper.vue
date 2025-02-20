<template>
  <el-space :spacer="spacer" class="tab-oper-container">
    <el-icon size="18px" @click="handlerOper('reload')">
      <Refresh />
    </el-icon>

    <el-dropdown @command="handlerOper">
      <el-icon><Menu /></el-icon>
      <template #dropdown>
        <el-dropdown-menu>
          <!-- <el-dropdown-item command="current">
            <el-icon><Close /></el-icon> 关闭当前</el-dropdown-item
          > -->
          <el-dropdown-item command="left"
            ><el-icon><Back /></el-icon> 关闭左侧
          </el-dropdown-item>
          <el-dropdown-item command="right"
            ><el-icon><Right /></el-icon> 关闭右侧</el-dropdown-item
          >
          <el-dropdown-item command="others"
            ><el-icon><Close /></el-icon> 关闭其他</el-dropdown-item
          >
          <el-dropdown-item command="all"
            ><el-icon><Close /></el-icon> 关闭所有</el-dropdown-item
          >
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </el-space>
</template>

<script lang="ts" setup>
import { computed, h } from 'vue'

import { useRoute, useRouter } from 'vue-router'
import { Back, Close, Menu, Refresh, Right } from '@element-plus/icons-vue'
import { ElDivider } from 'element-plus'
import { useTabBarStore } from '@setaria-business-framework/store'

import {
  DEFAULT_ROUTE_NAME,
  REDIRECT_ROUTE_NAME,
} from '@setaria-business-framework/constants'
import type { TagProps } from '@setaria-business-framework/store'

defineOptions({
  name: 'TabBarOper',
  inheritAttrs: false,
})
// document.documentElement.requestFullscreen()
const Action = {
  reload: 'reload',
  current: 'current',
  left: 'left',
  right: 'right',
  others: 'others',
  all: 'all',
}

const props = defineProps({
  tagList: {
    type: Array,
    default() {
      return []
    },
  },
})

const router = useRouter()
const route = useRoute()
const tabBarStore = useTabBarStore()

const spacer = h(ElDivider, { direction: 'vertical' })

const storeTagList = computed(() => {
  return tabBarStore.getTabList
})
const tagClose = (tag: TagProps, idx: number) => {
  tabBarStore.deleteTag(idx, tag)
  if (tag.fullPath === route.fullPath) {
    const latest = storeTagList.value[idx - 1] // 获取队列的前一个tab
    router.push({ name: latest.name })
  }
}
const findCurrentRouteIndex = () => {
  return storeTagList.value.findIndex((el) => el.fullPath === route.fullPath)
}
const findCurrnetItemDataInfo = () => {
  const index = props.tagList.findIndex(
    (el) => (el as TagProps).fullPath === route.fullPath
  )
  return {
    index,
    curerntTag: props.tagList[index] as TagProps,
  }
}

const handlerOper = async (value: string) => {
  const { curerntTag, index } = findCurrnetItemDataInfo()
  const copyTagList = [...storeTagList.value]
  if (value === Action.current) {
    tagClose(curerntTag, index)
  } else if (value === Action.left) {
    const currentRouteIdx = findCurrentRouteIndex()
    copyTagList.splice(1, index - 1)

    tabBarStore.freshTabList(copyTagList)
    if (currentRouteIdx < index) {
      router.push({ name: curerntTag.name })
    }
  } else if (value === Action.right) {
    const currentRouteIdx = findCurrentRouteIndex()
    copyTagList.splice(index + 1)

    tabBarStore.freshTabList(copyTagList)
    if (currentRouteIdx > index) {
      router.push({ name: curerntTag.name })
    }
  } else if (value === Action.others) {
    const filterList = storeTagList.value.filter((el, idx) => {
      return idx === 0 || idx === index
    })
    tabBarStore.freshTabList(filterList)
    router.push({ name: curerntTag.name })
  } else if (value === Action.reload) {
    tabBarStore.deleteCache(curerntTag)
    await router.push({
      name: REDIRECT_ROUTE_NAME,
      params: {
        path: route.fullPath,
      },
    })
    tabBarStore.addCache(curerntTag.name)
  } else {
    tabBarStore.resetTabList()
    router.push({ name: DEFAULT_ROUTE_NAME })
  }
}
</script>
