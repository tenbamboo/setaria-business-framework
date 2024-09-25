import { withInstall } from '@setaria-business-framework/utils'

import FakeComponent from './src/fake-component.vue'

export const BfFakeComponent = withInstall(FakeComponent)
export default BfFakeComponent

export * from './src/fake-component.vue'
// export * from './src/propsAndEmit'

export type { FakeComponentInstance } from './src/instance'
