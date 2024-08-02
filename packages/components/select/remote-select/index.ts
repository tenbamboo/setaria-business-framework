import { withInstall } from '@setaria-business-framework/utils'

import RemoteSelect from './src/remote-select.vue'

export const BfRemoteSelect = withInstall(RemoteSelect)
export default BfRemoteSelect

export * from './src/remote-select.vue'
export * from './src/propsAndEmit'
// export * from './src/event.type'

export type { RemoteSelectInstance } from './src/instance'
