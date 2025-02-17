import type { SchemaProps } from 'setaria-components'

export type StoreNullable<T> = T | null

export interface TagProps {
  title: string
  name: string
  fullPath: string
  query?: any
  ignoreCache?: boolean
}

export interface TabBarState {
  tagList: TagProps[]
  cacheTabList: Set<string>
}

export interface SchemaState {
  schemaInfo: {
    [key: string]: StoreNullable<SchemaProps>
  }
}

export interface LayoutState {
  collapse: boolean
  showMenu: boolean
  showHeader: boolean
}

export interface MenuProps {
  functionid: number
  hide: string
  name: string
  parentid: number
  url: string
  orderid: number
  no: string
  children: Array<MenuProps>
}

export interface UserInfoProps {
  userId?: string | number
  username?: string
  realName?: string
  avatar?: string
  desc?: string
  homePath?: string
  // roles: RoleInfo[];
}
