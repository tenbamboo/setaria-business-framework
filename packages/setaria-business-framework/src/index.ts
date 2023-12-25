import { Setaria } from '@setaria/setaria-ts'
import { setupUI } from './ui/'
import { setupSchema } from './schema/'
import { injectConfig } from './injection'
import { setEnvParams } from './utils/envParams'
import type { FrameworkConfig, ViteEnv } from '@setaria/setaria-ts'
import type { App } from 'vue'

export class Framework extends Setaria {
  constructor(
    config: FrameworkConfig,
    envParmas: ViteEnv,
    outterApp?: App<Element>
  ) {
    // 注入常量内容
    setEnvParams(envParmas)
    // 注入配置内容
    injectConfig(config)
    super(config, envParmas, outterApp)
    setupUI(this.app, config)
    setupSchema(config)
  }
}
export default {
  install: (app: App<Element>, config: any) => {
    new Framework(config.config, config.envParmas, app)
  },
}

// export type * from './types/store'
