import { buildProps } from '@setaria-business-framework/utils'
import type { ExtractPropTypes } from 'vue'

export const helloWouldProps = buildProps({
  /**
   * @description image URL of empty
   */
  p1: {
    type: String,
    default: '',
  },
} as const)

export type HelloWouldProps = ExtractPropTypes<typeof helloWouldProps>
