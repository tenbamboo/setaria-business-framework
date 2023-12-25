import { defineStore } from 'pinia'
import { store } from '@setaria/setaria-ts'
// import type { StoreNullable } from '../types/'
// import type { UserInfo } from '../types/store'
import { get } from 'lodash-unified'
import type { SchemaProps } from 'setaria-components'

type StoreNullable<T> = T | null

interface SchemaInfo {
  schemaInfo: {
    [key: string]: StoreNullable<SchemaProps>
  }
}
export const useSchemaStore = defineStore({
  id: 'app-schema',
  state: (): SchemaInfo => ({
    schemaInfo: {},
  }),
  getters: {
    getSchemaItem: (state) => {
      return (apiKey: string, schemaKey: string): SchemaProps => {
        return get(state.schemaInfo, [apiKey, schemaKey])
      }
    },
    // getUserInfo(): StoreNullable<UserInfo> {
    //   return this.userInfo
    // },
  },
  actions: {
    setSchemaItem(schemaKey: string, schemaItem: StoreNullable<SchemaProps>) {
      this.schemaInfo[schemaKey] = schemaItem
    },
  },
})

// Need to be used outside the setup
export function useSchemaStoreWithOut() {
  return useSchemaStore(store)
}
