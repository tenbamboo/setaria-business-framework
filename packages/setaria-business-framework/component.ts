import { BfHelloWould } from '@setaria-business-framework/components/hello-would'
import { BfSearchPage } from '@setaria-business-framework/components/search-page'

import { BfFakeComponent } from '@setaria-business-framework/components/fake-component'
import { BfChineseMoney } from '@setaria-business-framework/components/chinese-money'

import { BfRemoteSelect } from '@setaria-business-framework/components/select/remote-select'
import { BfDictSelect } from '@setaria-business-framework/components/select/dict-select'

import type { Plugin } from 'vue'

export default [
  BfHelloWould,
  BfSearchPage,
  BfFakeComponent,
  BfChineseMoney,

  BfRemoteSelect,
  BfDictSelect,
] as Plugin[]
