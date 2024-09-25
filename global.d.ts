// GlobalComponents for Volar
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    BfHelloWould: typeof import('setaria-business-framework')['BfHelloWould']
    BfSearchPage: typeof import('setaria-business-framework')['BfSearchPage']
    BfFakeComponent: typeof import('setaria-business-framework')['BfFakeComponent']
    BfRemoteSelect: typeof import('setaria-business-framework')['BfRemoteSelect']
    BfDictSelect: typeof import('setaria-business-framework')['BfDictSelect']
  }
}

export {}
