import { defineStore } from 'pinia'
import { store } from '@setaria/setaria-ts'

import type { LayoutState } from './types'

export const useLayoutStore = defineStore('app-layout', {
  state: (): LayoutState => ({
    collapse: false,
    showMenu: false,
    showHeader: false,
  }),

  actions: {
    setCollapse(_collapse: boolean) {
      this.collapse = _collapse
    },
    setShowMenu(_showMenu: boolean) {
      this.showMenu = _showMenu
    },
    setShowHeader(_showHeader: boolean) {
      this.showHeader = _showHeader
    },
  },
})

// Need to be used outside the setup
export function useLayoutStoreWithOut() {
  return useLayoutStore(store)
}
