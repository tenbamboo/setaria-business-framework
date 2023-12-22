import { useRoute } from 'vue-router'

const STORAGE_KEY = 'SearchPageStorage'

export const getStorageKey = (tableId: string) => {
  const route = useRoute()
  return `${STORAGE_KEY}-${tableId}-${route?.path || 'ssr'}`
}

export const setStorageData = (tableId: string, params: any) => {
  if (tableId) {
    sessionStorage.setItem(getStorageKey(tableId), JSON.stringify(params))
  }
}

export const getStorageData = (tableId: string) => {
  if (tableId) {
    const jsonStr = sessionStorage.getItem(getStorageKey(tableId))
    if (jsonStr) {
      return JSON.parse(jsonStr)
    }
  }
  return {}
}
