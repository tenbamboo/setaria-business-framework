import { withInstall } from '@setaria-business-framework/utils'

import DictSelect from './src/dict-select.vue'

export const BfDictSelect = withInstall(DictSelect)
export default BfDictSelect

export * from './src/dict-select.vue'
export * from './src/propsAndEmit'

export type { DictSelectInstance } from './src/instance'
