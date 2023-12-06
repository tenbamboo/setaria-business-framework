import { componentSizeMap } from '@setaria-business-framework/constants'

import type { ComponentSize } from '@setaria-business-framework/constants'

export const getComponentSize = (size?: ComponentSize) => {
  return componentSizeMap[size || 'default']
}
