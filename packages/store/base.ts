import { defineStore } from 'pinia'
import { store } from '@setaria/setaria-ts'
import type { MenuProps, UserInfoProps } from './types'
// import type { UserInfo } from '../types/store'

function getTree(treeData: Array<MenuProps>, parentid: number) {
  const treeArr: Array<MenuProps> = []
  treeData.forEach((item) => {
    if (item.parentid === parentid) {
      // if (item.meta) {
      //   try {
      //     const meta = item.meta.replace(/g\\n/, '').replace(/g\\t/, '');
      //     const newMeta = JSON.parse(meta);
      //     item.icon = newMeta.icon;
      //     item.img = newMeta.img;
      //   } catch (e) {
      //     console.log(e);
      //   }
      // }
      treeArr.push({
        ...item,
        children: getTree(treeData, item.functionid).sort(
          (a, b) => a.orderid - b.orderid
        ),
      })
    }
  })
  return treeArr.sort((a, b) => a.orderid - b.orderid)
}

export interface BaseState {
  userInfo: UserInfoProps
  menuInfo: Array<MenuProps>
}
export const useBaseStore = defineStore({
  id: 'app-base',
  state: (): BaseState => ({
    userInfo: {},
    menuInfo: [],
  }),
  getters: {
    getUserInfo(): UserInfoProps {
      return this.userInfo
    },
    getMenuInfo(): Array<MenuProps> {
      return this.menuInfo
    },
    getHasExistUser(): boolean {
      return !!(
        this.userInfo.userId
        // || getCookie('gid')
      )
    },
    getTreeMemu(): Array<MenuProps> {
      return getTree(this.menuInfo, 1)
    },
  },
  actions: {
    setUserInfo(info: UserInfoProps) {
      this.userInfo = info
    },
    setMenuInfo(info: Array<MenuProps>) {
      this.menuInfo = info
    },
  },
})

// Need to be used outside the setup
export function useBaseStoreWithOut() {
  return useBaseStore(store)
}
