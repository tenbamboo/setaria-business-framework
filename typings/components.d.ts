// For this project development
import '@vue/runtime-core'

declare module '@vue/runtime-core' {
  // GlobalComponents for Volar
  export interface GlobalComponents {
    BfHelloWould: typeof import('../packages/setaria-business-framework')['BfHelloWould']
    BfSearchPage: typeof import('../packages/setaria-business-framework')['BfSearchPage']
    BfFakeComponent: typeof import('../packages/setaria-business-framework')['BfFakeComponent']
    BfChineseMoney: typeof import('../packages/setaria-business-framework')['BfChineseMoney']
    BfFileDragger: typeof import('../packages/setaria-business-framework')['BfFileDragger']
    BfRemoteSelect: typeof import('../packages/setaria-business-framework')['BfRemoteSelect']
    BfDictSelect: typeof import('../packages/setaria-business-framework')['BfDictSelect']
  }
}

export {}
