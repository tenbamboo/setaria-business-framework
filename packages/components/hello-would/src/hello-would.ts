import { buildProps } from '@setaria-business-framework/utils'
import type { ExtractPropTypes } from 'vue'

export const helloWouldProps = buildProps({
  p1: {
    type: String,
    default: '',
  },
} as const)

export type HelloWouldProps = ExtractPropTypes<typeof helloWouldProps>
