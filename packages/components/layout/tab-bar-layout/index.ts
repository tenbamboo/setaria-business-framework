import { withInstall } from '@setaria-business-framework/utils'

import TabBarLayout from './src/tab-bar-layout.vue'

export const BfTabBarLayout = withInstall(TabBarLayout)
export default BfTabBarLayout

export * from './src/tab-bar-layout.vue'
// export * from './src/propsAndEmit'

export type { TabBarLayoutInstance } from './src/instance'
