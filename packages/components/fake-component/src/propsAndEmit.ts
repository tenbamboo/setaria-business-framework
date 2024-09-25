import type { ExtractPropTypes } from 'vue'

export const fakeComponentProps = {
  labelMode: {
    type: Boolean,
    default: false,
  },
  modelValue: {
    type: [Number, String, Boolean],
    default: undefined,
  },
}

export type FakeComponentProps = ExtractPropTypes<typeof fakeComponentProps>
