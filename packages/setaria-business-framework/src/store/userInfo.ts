import { defineStore } from 'pinia'
import { store } from '@setaria/setaria-ts'
// import type { StoreNullable } from '../types/'
// import type { UserInfo } from '../types/store'

export declare interface UserInfo {
  userId?: string | number
  username?: string
  realName?: string
  avatar?: string
  desc?: string
  homePath?: string
  // roles: RoleInfo[];
}

type StoreNullable<T> = T | null

interface UserState {
  userInfo: StoreNullable<UserInfo>
}
export const useUserStore = defineStore({
  id: 'app-user',
  state: (): UserState => ({
    userInfo: null,
  }),
  getters: {
    getUserInfo(): StoreNullable<UserInfo> {
      return this.userInfo
    },
  },
  actions: {
    setUserInfo(info: UserInfo | null) {
      this.userInfo = info
    },
  },
})

// Need to be used outside the setup
export function useUserStoreWithOut() {
  return useUserStore(store)
}
