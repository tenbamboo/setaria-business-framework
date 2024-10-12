import { withInstall } from '@setaria-business-framework/utils'

import FileDragger from './src/file-dragger.vue'

export const BfFileDragger = withInstall(FileDragger)
export default BfFileDragger

export * from './src/file-dragger.vue'
// export * from './src/propsAndEmit'

export type { FileDraggerInstance } from './src/instance'
