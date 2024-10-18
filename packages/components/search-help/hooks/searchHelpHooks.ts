import { computed } from 'vue'
// import { UPDATE_MODEL_EVENT } from '@setaria-business-framework/constants'
// import type { SelectValueType } from '../remote-select/src/propsAndEmit'

export const useSeachHelpCommon = (props: any, emit: any) => {
  // const innerValue = computed({
  //   get: () => props.modelValue,
  //   set: (val) => {
  //     emit(UPDATE_MODEL_EVENT, val as unknown as SelectValueType)
  //   },
  // })

  const innerVisible = computed({
    get: () => props.visible,
    set: (val) => {
      emit('update:visible', val)
    },
  })

  const handlerSelectChange = (val: Array<Record<string, any>>) => {
    emit('change', val)
  }

  const handlerSelectBlue = (evt: FocusEvent) => {
    emit('blur', evt)
  }

  const handlerSelectDone = (
    dataList: Array<Record<string, any>>,
    sourceList: Array<Record<string, any>>
  ) => {
    emit('done', dataList, sourceList)
  }

  return {
    // innerValue,
    innerVisible,
    handlerSelectChange,
    handlerSelectBlue,
    handlerSelectDone,
  }
}
