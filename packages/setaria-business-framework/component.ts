import { BfHelloWould } from '@setaria-business-framework/components/hello-would'
import { BfSearchPage } from '@setaria-business-framework/components/search-page'

import { BfFakeComponent } from '@setaria-business-framework/components/fake-component'
import { BfFileDragger } from '@setaria-business-framework/components/file-dragger'
import { BfChineseMoney } from '@setaria-business-framework/components/chinese-money'
import { BfImportDropdown } from '@setaria-business-framework/components/import-dropdown'
import { BfShadowUploader } from '@setaria-business-framework/components/shadow-uploader'

import { BfRemoteSelect } from '@setaria-business-framework/components/select/remote-select'
import { BfDictSelect } from '@setaria-business-framework/components/select/dict-select'

import { BfBasicSearchHelp } from '@setaria-business-framework/components/search-help/basic/dialog'
import { BfBasicInputSearchHelp } from '@setaria-business-framework/components/search-help/basic/input'

import { BfMainLayout } from '@setaria-business-framework/components/layout/main-layout'
import { BfTabBarLayout } from '@setaria-business-framework/components/layout/tab-bar-layout'
import { BfBaseLayout } from '@setaria-business-framework/components/layout/base-layout'

import type { Plugin } from 'vue'

export default [
  BfHelloWould,
  BfSearchPage,
  BfFakeComponent,
  BfChineseMoney,
  BfFileDragger,
  BfImportDropdown,
  BfShadowUploader,

  BfRemoteSelect,
  BfDictSelect,

  BfBasicSearchHelp,
  BfBasicInputSearchHelp,

  BfMainLayout,
  BfTabBarLayout,
  BfBaseLayout,
] as Plugin[]
