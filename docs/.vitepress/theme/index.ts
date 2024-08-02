import { Framework } from 'setaria-business-framework'
// import ElementPlus from 'element-plus'
// import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'
import { createI18n } from 'vue-i18n'
// import elementZh from 'element-plus/dist/locale/zh-cn.mjs'
// import zhCn from 'setaria-components/dist/locale/zh-cn.mjs'
// import { merge } from 'lodash-unified'
import VPApp, { NotFound, globals } from '../vitepress'

import { define } from '../utils/types'
import 'uno.css'
import './style.css'
import schema from '../../json-schema/'
import type { Theme } from 'vitepress'

export default define<Theme>({
  NotFound,
  Layout: VPApp,
  enhanceApp: ({ app }) => {
    // app.use(ElementPlus)
    // app.use(SetariaComponents, {
    //   framework: {
    //     config: {},
    //   },
    // })
    // app.use(VXETable)

    new Framework(
      {
        schema,
      },
      {},
      app
    )

    const i18n = createI18n({
      legacy: false,
      locale: 'zh-cn', // 设置语言环境
      fallbackLocale: 'zh-cn',
      silentTranslationWarn: true, // 关闭警告
      silentFallbackWarn: true,
      messages: {
        'zh-cn': {}, //merge(elementZh, zhCn),
        'en-us': {}, //merge(elementZh, zhCn),
      }, // 设置语言环境信息
    })
    app.use(i18n)

    globals.forEach(([name, Comp]) => {
      app.component(name, Comp)
    })
  },
})
