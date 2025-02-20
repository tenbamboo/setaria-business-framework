import { defineStore } from 'pinia'
import { store } from '@setaria/setaria-ts'

import {
  DEFAULT_ROUTE,
  DEFAULT_ROUTE_NAME,
  REDIRECT_ROUTE_NAME,
} from '@setaria-business-framework/constants'

import type { TabBarState, TagProps } from './types'
import type { RouteLocationNormalized } from 'vue-router'

const BAN_LIST = [REDIRECT_ROUTE_NAME]

const formatTag = (route: RouteLocationNormalized): TagProps => {
  const { name, meta, fullPath, query } = route
  return {
    title: (meta.title || '') as string, // TODO 这里需要从接口中item.name取最新的名称数据
    name: String(name),
    fullPath,
    query,
    ignoreCache: !!meta.ignoreCache,
  }
}

const setStorageByTag = (tagList: TagProps[] = []) => {
  localStorage.setItem('app-tab-bar', JSON.stringify(tagList))
}

const getStorageByTag = () => {
  const tagListStr = localStorage.getItem('app-tab-bar')
  let tagList: TagProps[] = []
  if (tagListStr) {
    tagList = JSON.parse(tagListStr)
  } else {
    tagList = [DEFAULT_ROUTE]
  }
  return tagList
}

const getStorageByCacheTag = () => {
  const tagList = getStorageByTag()

  const cacheTabList = new Set<string>()
  tagList
    .filter((el) => !el.ignoreCache)
    .map((el) => el.name)
    .forEach((x) => cacheTabList.add(x))

  return cacheTabList
}

export const useTabBarStore = defineStore('app-tab-bar', {
  state: (): TabBarState => ({
    cacheTabList: getStorageByCacheTag(),
    tagList: getStorageByTag(),
  }),

  getters: {
    getTabList(state): TagProps[] {
      return state.tagList
    },
    getCacheList(state): string[] {
      return Array.from(state.cacheTabList)
    },
  },

  actions: {
    updateTabList(route: RouteLocationNormalized) {
      if (BAN_LIST.includes(route.name as string)) return
      this.tagList.push(formatTag(route))
      if (!route.meta.ignoreCache) {
        this.cacheTabList.add(route.name as string)
      }
      setStorageByTag(this.tagList)
    },
    deleteTag(idx: number, tag: TagProps) {
      this.tagList.splice(idx, 1)
      this.cacheTabList.delete(tag.name)

      setStorageByTag(this.tagList)
    },
    addCache(name: string) {
      if (name && name !== '') {
        this.cacheTabList.add(name)
      }
    },
    deleteCache(tag: TagProps) {
      this.cacheTabList.delete(tag.name)
    },
    freshTabList(tags: TagProps[]) {
      this.tagList = tags
      this.cacheTabList.clear()
      // 要先判断ignoreCache
      this.tagList
        .filter((el) => !el.ignoreCache)
        .map((el) => el.name)
        .forEach((x) => this.cacheTabList.add(x))

      setStorageByTag(this.tagList)
    },
    resetTabList() {
      this.tagList = [DEFAULT_ROUTE]
      this.cacheTabList.clear()
      this.cacheTabList.add(DEFAULT_ROUTE_NAME)

      setStorageByTag(this.tagList)
    },
  },
})

// Need to be used outside the setup
export function useTabBarStoreWithOut() {
  return useTabBarStore(store)
}
