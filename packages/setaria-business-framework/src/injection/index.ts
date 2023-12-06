import { http } from '../http'
import { errorHandler } from '../error'
import type { FrameworkConfig } from '@setaria/setaria-ts'

export const injectConfig = (config: FrameworkConfig) => {
  config.http = (config.http ?? []).concat(http)

  config.errorHandler = errorHandler
}
