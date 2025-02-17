import { withInstall } from '@setaria-business-framework/utils'

import BaseLayout from './src/base-layout.vue'

export const BfBaseLayout = withInstall(BaseLayout)
export default BfBaseLayout

export * from './src/base-layout.vue'
// export * from './src/propsAndEmit'

export type { BaseLayoutInstance } from './src/instance'
