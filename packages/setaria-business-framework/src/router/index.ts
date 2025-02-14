import { router } from '@setaria/setaria-ts'
import { useUserStore } from '@setaria-business-framework/store'
import type { NavigationGuardWithThis } from 'vue-router'

const code403Guard: NavigationGuardWithThis<undefined> = (to, _, next) => {
  const userStore = useUserStore()

  console.log('code403Guard router', userStore)
  //   const store = getStore()
  // console.log('code403Guard');
  // && !to.path.includes('/redirect')
  //   if (
  //     store.getters['base/isExistUser'] &&
  //     isNoRole(to.path) &&
  //     // 自助投递箱逻辑 无视当前用户是否登录
  //     !whiteList2.find((url) => to.path.includes(url))
  //   ) {
  //     next({
  //       path: '/403',
  //     })
  //     return
  //   }
  next()
}

export const setupRouter = () => {
  if (router) {
    router.beforeResolve(code403Guard)
  }
}
