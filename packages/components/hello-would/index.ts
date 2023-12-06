import { withInstall } from '@setaria-business-framework/utils'

import HelloWould from './src/hello-would.vue'

export const BfHelloWould = withInstall(HelloWould)
export default BfHelloWould

export * from './src/hello-would'
export type { HelloWouldInstance } from './src/instance'
