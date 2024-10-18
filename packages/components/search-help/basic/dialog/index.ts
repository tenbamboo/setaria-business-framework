import { withInstall } from '@setaria-business-framework/utils'

import BasicSearchHelp from './src/basic-search-help.vue'

export const BfBasicSearchHelp = withInstall(BasicSearchHelp)
export default BfBasicSearchHelp

export * from './src/basic-search-help.vue'
export * from './src/propsAndEmit'

export type { BasicSearchHelpInstance } from './src/instance'
