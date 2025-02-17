<template>
  <el-sub-menu :key="parentItem.no" :index="parentItem.no">
    <template #title>
      <!-- <i v-if="parentItem.icon" :class="parentItem.icon" />
      <img v-if="parentItem.img" :src="parentItem.img" class="menu-item-img" /> -->
      <span>{{ getI18nName(parentItem) }}</span>
    </template>
    <template v-for="subItem in parentItem.children">
      <sub-menu
        v-if="
          subItem.children &&
          subItem.children.length > 0 &&
          subItem.hide === '0'
        "
        :key="subItem.functionid"
        :parent-item="subItem"
      />
      <el-menu-item
        v-else-if="subItem.hide === '0'"
        :key="`${subItem.functionid}`"
        :index="subItem.url"
        >{{ getI18nName(subItem) }}
      </el-menu-item>
    </template>
  </el-sub-menu>
</template>
<script lang="ts" setup>
// import { computed } from 'vue'
// import { useRoute } from 'vue-router'
// import { useI18n } from 'vue-i18n'
// import { useBaseStore, useLayoutStore } from '@setaria-business-framework/store'
import type { PropType } from 'vue'
import type { MenuProps } from '@setaria-business-framework/store'
// const { t } = useI18n()

defineOptions({
  name: 'SubMenu',
  inheritAttrs: false,
})

defineProps({
  parentItem: {
    type: Object as PropType<MenuProps>,
    required: true,
  },
})

const getI18nName = (item: MenuProps) => {
  return item.name
}
defineExpose({})
</script>
