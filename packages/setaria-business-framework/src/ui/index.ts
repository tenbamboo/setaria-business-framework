import ElementPlus from 'element-plus'
import SetariaComponents from 'setaria-components'
// import CustomComponents from '../../packages/components'
import VXETable from 'vxe-table'
import { getEnvParams } from '../utils/envParams'
import Components from '../../defaults'
import type { App } from 'vue'
// import "element-plus/dist/index.css";
export const setupUI = function (app: App<Element>) {
  app.use(ElementPlus)
  app.use(VXETable)
  app.use(SetariaComponents)
  app.use(Components)

  console.log('getEnvParams', getEnvParams())
}
