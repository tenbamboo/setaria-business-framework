import { computed } from 'vue'
import { router } from '@setaria/setaria-ts'
import { ElMessage } from 'element-plus'
import { useBaseStore } from '@setaria-business-framework/store'
import { validateRouteNoRole } from '@setaria-business-framework/utils'
import type { NavigationGuardWithThis } from 'vue-router'

const code403Guard: NavigationGuardWithThis<undefined> = (to, _, next) => {
  const baseStore = useBaseStore()
  const hasExistUser = computed(() => baseStore.getHasExistUser)
  // console.log('hasExistUser', hasExistUser, validateRouteNoRole(to))
  if (hasExistUser.value && validateRouteNoRole(to)) {
    console.log('已被拦截')
    next({
      path: '/403',
    })
    return
  }
  // console.log('可以访问')

  next()
}

export const setupRouter = () => {
  if (router) {
    router.beforeResolve(code403Guard)
    // 默认执行一次
    if (validateRouteNoRole(router.currentRoute.value)) {
      ElMessage.error('当前访问的页面无权访问， 请联系管理员。')
      setTimeout(() => {
        // 这里有个bug，就是虽然拦截了，但是页面返回的是空白，暂时不知道为啥，先用Messsage提示一下吧
        router.replace({
          path: '/403',
        })
      }, 500)
    }

    // router.beforeEach(code403Guard)
  }
}

export default {
  setupRouter,
  validateRouteNoRole,
}
