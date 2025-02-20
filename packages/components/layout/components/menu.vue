<template>
  <div class="common-menu-container">
    <!-- style="background-image: url(static/images/menu.jpg)" -->
    <el-scrollbar>
      <div class="collapse" @click="hadnlerCollapseChage">
        <el-icon>
          <Fold v-if="!collapse" />
          <Expand v-else />
        </el-icon>

        <span v-if="!collapse">{{ t('菜单') }}</span>
      </div>
      <!-- <div class="search-area" v-if="!this.collapse">
          <el-input  class="searchInputMenu" placeholder="搜索" v-model="searchTxt" clearable  />
        </div> -->
      <el-menu
        class="menu-bar"
        :default-active="onRoutes"
        :collapse="collapse"
        unique-opened
        @select="handlerSelect"
      >
        <template v-for="item in flattenMenuList">
          <template
            v-if="
              item.children && item.children.length > 0 && item.hide === '0'
            "
          >
            <sub-menu :key="item.functionid" :parent-item="item" />
          </template>
          <template v-else-if="item.hide === '0'">
            <el-menu-item
              :key="item.functionid"
              :index="item.url"
              :title="getI18nName(item)"
            >
              <!-- <i v-if="item.icon" :class="item.icon" />
              <img v-if="item.img" :src="item.img" class="menu-item-img" /> -->
              <template #title>{{ getI18nName(item) }}</template>
            </el-menu-item>
          </template>
        </template>
      </el-menu>
    </el-scrollbar>
  </div>
</template>
<script lang="ts" setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { Expand, Fold } from '@element-plus/icons-vue'
import { useBaseStore, useLayoutStore } from '@setaria-business-framework/store'
// import {
//   listenerRouteChange,
// } from '@setaria-business-framework/utils'
import SubMenu from './sub-menu.vue'
import type { MenuProps } from '@setaria-business-framework/store'

const route = useRoute()
const router = useRouter()

const baseStore = useBaseStore()
const layoutStore = useLayoutStore()
const { t } = useI18n()

// defineOptions({
//   name: 'CommonHeader',
//   inheritAttrs: false,
// })

// const tabBarStore = useTabBarStore()

const collapse = computed(() => layoutStore.collapse)
const menuInfo = computed(() => baseStore.menuInfo)

const onRoutes = computed(() => route?.path)

const flattenMenuList = computed(() => {
  // menuList是组成固定结构的数据对象，并且排序好了的，只需要平铺开，过滤出来即可
  // eslint-disable-next-line vue/no-side-effects-in-computed-properties
  // this.filterMenuArrList = [];
  // if (!this.collapse && this.searchTxt) {
  //   const list = JSON.parse(JSON.stringify(this.menuList));
  //   this.tiledArrAndUnfolded(list);
  //   return this.filterMenuArrList.filter((item) => this.getI18nName(item)?.includes(this.searchTxt) && item.url && item.hide === '0' && item.parentid !== 1372);
  // }

  return baseStore.getTreeMemu
})

const hadnlerCollapseChage = () => {
  layoutStore.setCollapse(!collapse.value)
}
const handlerSelect = (url: string) => {
  const findObj = menuInfo.value.find((item) => `${item.url}` === url)
  if (findObj) {
    // 外部逻辑
    // if (findObj.url.startsWith('http')) {
    //   if (findObj.newwindow === 1) {
    //     window.open(findObj.url)
    //   }
    // } else
    if (findObj.url !== route.fullPath) {
      router.push(findObj.url)
    }
    // else if (findObj.url === this.$route.fullPath) {
    //   this.$router.push(`/redirect?path=${findObj.url}`);
    // }
  }
  // else {
  //   router.push('/404')
  //   console.error('未找到对应的菜单信息')
  // }
}
const getI18nName = (item: MenuProps) => {
  return item.name
}

// listenerRouteChange((newRoute) => {
//   const { requiresAuth, hideInMenu } = newRoute.meta
//   if (requiresAuth && (!hideInMenu || activeMenu)) {
//     const menuOpenKeys = findMenuOpenKeys(
//       (activeMenu || newRoute.name) as string
//     )

//     const keySet = new Set([...menuOpenKeys, ...openKeys.value])
//     openKeys.value = [...keySet]

//     selectedKey.value = [activeMenu || menuOpenKeys[menuOpenKeys.length - 1]]
//   }
// }, true)

defineExpose({})
</script>
