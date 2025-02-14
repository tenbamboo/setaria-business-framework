import { withInstall } from '@setaria-business-framework/utils'

import TabBarTemplate from './src/tab-bar-template.vue'

export const BfTabBarTemplate = withInstall(TabBarTemplate)
export default BfTabBarTemplate

export * from './src/tab-bar-template.vue'
// export * from './src/propsAndEmit'

export type { TabBarTemplateInstance } from './src/instance'
