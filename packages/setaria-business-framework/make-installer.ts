import { provideGlobalConfig } from 'element-plus'
import { INSTALLED_KEY } from '@setaria-business-framework/constants'
import { version } from './version'
import type { App, Plugin } from '@vue/runtime-core'
import type { ConfigProviderContext } from 'element-plus'

export declare interface CustomConfigProviderContext
  extends ConfigProviderContext {
  framework: any
}

export const makeInstaller = (components: Plugin[] = []) => {
  const install = (app: App, options?: CustomConfigProviderContext) => {
    if (app[INSTALLED_KEY]) return

    app[INSTALLED_KEY] = true
    components.forEach((c) => app.use(c))

    if (options) provideGlobalConfig(options, app, true)
  }

  return {
    version,
    install,
  }
}
