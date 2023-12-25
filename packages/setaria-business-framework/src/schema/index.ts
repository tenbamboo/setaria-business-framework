import { useSchemaStore } from '../store'
import type { SchemaProps } from 'setaria-components'
import type { FrameworkConfig } from '@setaria/setaria-ts'

export const setupSchema = function (config: FrameworkConfig) {
  const schemStore = useSchemaStore()

  Object.keys(config.schema).forEach((apiKey: string) => {
    schemStore.setSchemaItem(apiKey, config.schema[apiKey] as SchemaProps)
  })
}
