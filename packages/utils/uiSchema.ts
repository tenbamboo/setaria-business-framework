// import cloneDeep from 'lodash/cloneDeep';
// import { get, merge } from 'lodash-unified'
import type { SchemaProps, SchemaUiPropsByTable } from 'setaria-components'

declare type UiSchemaType = { [key: string]: SchemaUiPropsByTable }

// export const disabled = () => ({
//   'ui:disabled': true,
// })

// export const unDisabled = () => ({
//   'ui:disabled': false,
// })

// export const hidden = () => ({
//   'ui:hidden': true,
// })

// export const unHidden = () => ({
//   'ui:hidden': false,
// })

// 获取表格序号的column信息,
// 并配合tableSchema中增加 tableIndex  属性即可
export const getIndexItem = () => ({
  tableIndex: {
    title: '序号',
    type: 'index',
  },
})

// 格式化金额内容
export const formatPriceType = { format: 'price', type: 'number', scale: 2 }

// 格式化成日期
export const formatDateType = { format: 'date' }

// 格式化成日期时间
export const formatDateTimeType = { format: 'date-time' }

// 'ui:options': {
//   visible: false,
// },
// // 只在表格上隐藏字段（form中并不会隐藏）
// export const tableHidden = (basevalue = {}) =>
//   merge({}, basevalue, {
//     'ui:options': {
//       visible: false,
//     },
//   })

// // 只在表格上隐藏字段（form中并不会隐藏）
// export const tableUnHidden = (basevalue = {}) =>
//   merge({}, basevalue, {
//     'ui:options': {
//       visible: true,
//     },
//   })

// // 只在表格组件中的表单上隐藏字段
// export const formItemHidden = () => ({
//   'ui:formItemHidden': true,
// })

// // 只在表格组件中的表单上隐藏字段
// export const formItemUnHidden = () => ({
//   'ui:formItemHidden': false,
// })

// 控制表格列的最小宽度
// export const columnMinWidth = (minWidth, basevalue = {}) =>
//   merge({}, basevalue, {
//     'ui:options': {
//       minWidth,
//     },
//   })

// 添加必填校验
export function addRequired(schema: SchemaProps, keyList: string[]) {
  keyList.forEach((key: string) => {
    if (schema?.required && !schema.required.includes(key)) {
      schema.required.push(key)
    }
  })
}
// 移除必填校验
export function removeRequired(schema: SchemaProps, keyList: string[]) {
  keyList.forEach((key) => {
    if (schema?.required) {
      const i = schema.required.indexOf(key)
      if (i !== -1) {
        schema.required.splice(i, 1)
      }
    }
  })
}

// 添加禁用
export function addDisabled(uiSchema: UiSchemaType, keyList: string[]) {
  keyList.forEach((key) => {
    if (!uiSchema[key]) {
      uiSchema[key] = {}
    }
    uiSchema[key].disabled = true
  })
}

// 移除禁用
export function removeDisabled(uiSchema: UiSchemaType, keyList: string[]) {
  keyList.forEach((key) => {
    if (!uiSchema[key]) {
      uiSchema[key] = {}
    }
    uiSchema[key].disabled = false
  })
}

// 添加隐藏
export function addHidden(uiSchema: UiSchemaType, keyList: string[]) {
  keyList.forEach((key) => {
    if (!uiSchema[key]) {
      uiSchema[key] = {}
    }
    uiSchema[key].visible = true
  })
}

// 移除隐藏
export function removeHidden(uiSchema: UiSchemaType, keyList: string[]) {
  keyList.forEach((key) => {
    if (!uiSchema[key]) {
      uiSchema[key] = {}
    }
    uiSchema[key].visible = false
  })
}

// 添加表格隐藏
export function addTableItemHidden(uiSchema: UiSchemaType, keyList: string[]) {
  keyList.forEach((key) => {
    if (!uiSchema[key]) {
      uiSchema[key] = {}
    }
    uiSchema[key].columnVisible = true
  })
}

// 移除表格隐藏
export function removeTableItemHidden(
  uiSchema: UiSchemaType,
  keyList: string[]
) {
  keyList.forEach((key) => {
    if (!uiSchema[key]) {
      uiSchema[key] = {}
    }
    uiSchema[key].columnVisible = false
  })
}

// 添加表单隐藏
export function addFormItemHidden(uiSchema: UiSchemaType, keyList: string[]) {
  keyList.forEach((key) => {
    if (!uiSchema[key]) {
      uiSchema[key] = {}
    }
    uiSchema[key].formItemVisible = true
  })
}

// 移除表单隐藏
export function removeFormItemHidden(
  uiSchema: UiSchemaType,
  keyList: string[]
) {
  keyList.forEach((key) => {
    if (!uiSchema[key]) {
      uiSchema[key] = {}
    }
    uiSchema[key].formItemVisible = false
  })
}
// // 设置uischema item下的某个属性值
// export function setUiSchemaProps(
//   uiSchemaItem: SchemaUiPropsByTable,
//   key: string,
//   value: any
// ) {
//   uiSchemaItem[key] = value
// }

// 获取datePicker的开始与结束时间的禁用逻辑(开始逻辑)
// getStartDateOptions(this,'conditionData.endDate')
// export function getStartDateOptions(self, key) {
//   return {
//     'ui:options': {
//       'picker-options': {
//         disabledDate: (time) => {
//           const endDate = get(self, key)
//           if (endDate) {
//             return time.getTime() > new Date(endDate)
//           }
//           return false
//         },
//       },
//     },
//   }
// }
// 获取datePicker的开始与结束时间的禁用逻辑(结束逻辑)
// getEndDateOptions(this,'conditionData.startDate')
// export function getEndDateOptions(self, key) {
//   return {
//     'ui:options': {
//       'picker-options': {
//         disabledDate: (time) => {
//           const startDate = get(self, key)
//           if (startDate) {
//             const date = new Date(startDate)
//             date.setDate(date.getDate() - 1)
//             return time.getTime() <= date
//           }
//           return false
//         },
//       },
//     },
//   }
// }

export default {
  // disabled,
  // unDisabled,
  // hidden,
  // unHidden,
  formatPriceType,
  formatDateType,
  formatDateTimeType,
  // tableHidden,
  // tableUnHidden,
  addHidden,
  removeHidden,
  addRequired,
  removeRequired,
  addDisabled,
  removeDisabled,
  // columnMinWidth,
  // formItemHidden,
  // formItemUnHidden,
  addFormItemHidden,
  removeFormItemHidden,
  getIndexItem,
  // getStartDateOptions,
  // getEndDateOptions,
}
