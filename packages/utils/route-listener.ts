/**
 * Listening to routes alone would waste rendering performance. Use the publish-subscribe model for distribution management
 * 单独监听路由会浪费渲染性能。使用发布订阅模式去进行分发管理。
 */
import { computed } from 'vue'
import mitt from 'mitt'
import { useBaseStore } from '@setaria-business-framework/store'
import { REDIRECT_ROUTE_NAME } from '@setaria-business-framework/constants'
import type { Handler } from 'mitt'
import type { RouteLocationNormalized } from 'vue-router'
const emitter = mitt()

const key = Symbol('ROUTE_CHANGE')

const whiteList = [
  '/login',
  '/404',
  '/403',
  '/500',
  '/networkError',
  '/',
  '/refreshToken',
  // '/redirect',
]

let latestRoute: RouteLocationNormalized

export function setRouteEmitter(to: RouteLocationNormalized) {
  emitter.emit(key, to)
  latestRoute = to
}

export function listenerRouteChange(
  handler: (route: RouteLocationNormalized) => void,
  immediate = true
) {
  emitter.on(key, handler as Handler)
  if (immediate && latestRoute) {
    handler(latestRoute)
  }
}

export function removeRouteListener() {
  emitter.off(key)
}

export const validateRouteNoRole = (to: RouteLocationNormalized) => {
  const { path, meta } = to
  const baseStore = useBaseStore()
  const menuInfo = computed(() => baseStore.getMenuInfo)
  const findObj = menuInfo.value.find((item) => item?.url?.includes(path))
  let redirectFlag = false
  if (to.name === REDIRECT_ROUTE_NAME) {
    // 补偿重定向的地址校验
    const redirectFindObj = menuInfo.value.find((item) =>
      item?.url?.includes(to.params.path as string)
    )
    redirectFlag = redirectFindObj !== undefined
  }

  return (
    !redirectFlag &&
    !whiteList.includes(path) &&
    !meta.ignoreRule &&
    findObj === undefined
  )
}
