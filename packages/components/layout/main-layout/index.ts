import { withInstall } from '@setaria-business-framework/utils'

import MainLayout from './src/main-layout.vue'

export const BfMainLayout = withInstall(MainLayout)
export default BfMainLayout

export * from './src/main-layout.vue'
// export * from './src/propsAndEmit'

export type { MainLayoutInstance } from './src/instance'
