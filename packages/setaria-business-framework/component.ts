import { BfHelloWould } from '@setaria-business-framework/components/hello-would'
import { BfSearchPage } from '@setaria-business-framework/components/search-page'

import { BfFakeComponent } from '@setaria-business-framework/components/fake-component'

import { BfRemoteSelect } from '@setaria-business-framework/components/select/remote-select'
import { BfDictSelect } from '@setaria-business-framework/components/select/dict-select'

import type { Plugin } from 'vue'

export default [
  BfHelloWould,
  BfSearchPage,
  BfFakeComponent,

  BfRemoteSelect,
  BfDictSelect,
] as Plugin[]
