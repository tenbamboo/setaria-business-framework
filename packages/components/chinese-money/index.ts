import { withInstall } from '@setaria-business-framework/utils'

import ChineseMoney from './src/chinese-money.vue'

export const BfChineseMoney = withInstall(ChineseMoney)
export default BfChineseMoney

export * from './src/chinese-money.vue'
// export * from './src/propsAndEmit'

export type { ChineseMoneyInstance } from './src/instance'
