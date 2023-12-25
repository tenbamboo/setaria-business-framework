import { i18n } from '@setaria/setaria-ts'
import { cloneDeep } from 'lodash-unified'
import { useSchemaStore } from '@setaria-business-framework/store'
import type { SchemaProps } from 'setaria-components'
declare type AnyObj = { [key: string]: any }

// import { Message } from 'setaria';
/**
 * 获取原始Schema数据
 * @param {String} apiKey 服务名
 * @param {String} schemaKey 类名
 * @returns SchemaProps
 */
export function getSchema(apiKey: string, schemaKey: string): SchemaProps {
  const schemaStore = useSchemaStore()
  return cloneDeep(schemaStore.getSchemaItem(apiKey, schemaKey)) as SchemaProps
}

/**
 * 根据字符串数组取得对应的schema对象
 * @param {Object} schema
 * @param {Array} arr
 * @returns
 */
export function getSchemaByKeyArray(schema: SchemaProps, arr: string[]) {
  const ret = {} as { [key: string]: any }
  if (schema && schema.properties && arr.length > 0) {
    arr.forEach((key) => {
      if (typeof key === 'string') {
        const prop = schema.properties[key]
        if (prop === undefined) {
          console.log('当前使用的Schema为', schema)
          console.error(`[${key}] 字段未找到！请查看对应Schema并联系后端补全`)
        }
        if (prop) {
          ret[key] = prop
        }
      }
      //    else {
      //     ret[key.key] = key
      //   }
    })
  }
  return {
    properties: {
      ...ret,
    },
  } as SchemaProps
}

/**
 * 根据 schemaArray 数组及 excludeSchemaArray 计算真实的schema
 * @param schema 完整的schema
 * @param schemaArray 需展示的字段列表（字符串或对象列表） (对应的formSchema、tableSchema属性)
 * @param excludeSchemaArray 不需展示的字段列表（字符串列表）
 *
 * @return {*} 最终的 JSON Schema
 */
// export function calculateSchema(schema, schemaArray, excludeSchemaArray) {
//   if (!schema || !schema.properties) {
//     return { properties: {} }
//   }
//   // if (schemaArray && _.isArray(schemaArray) && schemaArray.length > 0) {
//   if (schemaArray && _.isArray(schemaArray)) {
//     return {
//       ...schema,
//       properties: getSchemaByKeyArray(schema, schemaArray).properties,
//     }
//   }

//   const remainKeys = Object.keys(schema.properties)
//   if (
//     excludeSchemaArray &&
//     _.isArray(excludeSchemaArray) &&
//     excludeSchemaArray.length > 0
//   ) {
//     _.remove(remainKeys, (key) => excludeSchemaArray.includes(key))
//   }
//   return {
//     ...schema,
//     properties: getSchemaByKeyArray(schema, remainKeys).properties,
//   }
// }

/**
 * 取得指定Property的初始值
 * @param {Object} property
 * @returns
 */
function getItemDefaultValue() {
  return null
}

/**
 * 根据schema定义生成对应的初始化对象
 * @param {Object} schema
 * @returns
 */
export function createDefaultObjectBySchema(schema = {} as SchemaProps) {
  const ret = {} as AnyObj
  Object.keys(schema.properties).forEach((key) => {
    ret[key] = getItemDefaultValue()
  })
  return ret
}

/**
 * 批量自定义schmea的属性
 * @param {Object} self Vue上下文对象
 * @param {Object} schema schema对象
 * @param {Array} origin 需要操作的对象key
 * @param {Object} property 需要添加的属性
 * @Demo
 * schemaFiledCustomAppend(this, this.schema, ['transactionDateMin', 'transactionDateMax', 'signDateMin', 'signDateMax',
    'amountMin', 'amountMax'], { format: 'date' })
 *
 *
 */
// export function schemaFiledCustomAppend(self, schema, origin, property) {
//   if (!Array.isArray(origin)) {
//     return
//   }

//   const { properties } = schema
//   origin.forEach((key) => {
//     self.$set(properties, key, { ...properties[key], ...property })
//   })
// }

/**
 * 设置 schema 任意字段的ui:options 属性
 * @param {Object} self Vue上下文对象
 * @param {Array} origin Schema的对象
 * @param {Object} origin UiSchema的对象
 * @param {Object} property 需要添加的属性
 * @Demo
 *  schemaFiledUiSet(this, this.conditionSchema, this.conditionUiSchema, {
        clearable: true,
      });
 */
// export function schemaFiledUiSet(self, origin, uiSchema, property) {
//   if (!Array.isArray(origin)) {
//     return
//   }
//   if (self && self.$set && uiSchema) {
//     origin.forEach((key) => {
//       const options = {
//         ...(uiSchema[key] && uiSchema[key]['ui:options']),
//         ...property,
//       }
//       self.$set(uiSchema, key, {
//         ...uiSchema[key],
//         'ui:options': options,
//       })
//     })
//     // self.$set(self, 'oneOf', target);
//   }
// }

/**
 * 设置 schema 任意字段的oneOf 属性
 */
// export function schemaFiledOneOfSet(self, schema, key, origin, reverse) {
//   if (!Array.isArray(origin)) {
//     return
//     // throw new Error('arguments[0] must a Array');
//   }
//   let target = origin
//   if (reverse) {
//     target = target.map((item) => {
//       Object.assign(item, {
//         const: item[reverse.const],
//         title: item[reverse.title],
//       })
//       return item
//     })
//   }

//   if (self && self.$set && schema) {
//     const { properties } = schema
//     if (Object.prototype.hasOwnProperty.call(properties, key)) {
//       self.$set(properties[key], 'oneOf', target)
//     }
//   }
// }

/**
 * 批量替换schmea的label内容
 * @param {Object} schema schema对象
 * @param {Object} labels 需要操作的对象
 * @Demo
 *
 * replaceSchemaLabels( schema,{applyUserNum:'我是新的用户Num'})
 *
 *
 */
export function replaceSchemaLabels(
  schema: SchemaProps,
  labels = {} as AnyObj
) {
  Object.keys(labels).forEach((key) => {
    if (schema.properties[key]) {
      schema.properties[key].title = labels[key]
    }
  })
  return schema
}
/**
 * 批量国际化 替换schmea的label内容
 * @param {Object} schema schema对象
 * @param {Object} 前置信息 需要操作的对象
 * @Demo
 *
 * replaceLabelsToI18n( this.schema,'vo.ClaimPageParamsRes')
 *
 *
 */
export function replaceLabelsToI18n(schema: SchemaProps, prefix: string) {
  if (schema?.properties) {
    Object.keys(schema.properties).forEach((key) => {
      const i18nKey = `${prefix}.${key}`
      let value = i18n.t(i18nKey)
      if (value === i18nKey) {
        value = schema.properties[key].title
      }
      schema.properties[key].title = value
    })
  }
  return schema
}

export default {
  getSchema,
  getSchemaByKeyArray,
  createDefaultObjectBySchema,
  replaceSchemaLabels,
  replaceLabelsToI18n,
}
