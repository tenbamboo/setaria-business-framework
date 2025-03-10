import { withInstall } from '@setaria-business-framework/utils'

import ShadowUploader from './src/shadow-uploader.vue'

export const BfShadowUploader = withInstall(ShadowUploader)
export default BfShadowUploader

export * from './src/shadow-uploader.vue'
// export * from './src/propsAndEmit'

export type { ShadowUploaderInstance } from './src/instance'
