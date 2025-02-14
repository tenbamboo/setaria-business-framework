// GlobalComponents for Volar
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    BfHelloWould: typeof import('setaria-business-framework')['BfHelloWould']
    BfSearchPage: typeof import('setaria-business-framework')['BfSearchPage']
    BfFakeComponent: typeof import('setaria-business-framework')['BfFakeComponent']
    BfFileDragger: typeof import('setaria-business-framework')['BfFileDragger']
    BfChineseMoney: typeof import('setaria-business-framework')['BfChineseMoney']
    BfRemoteSelect: typeof import('setaria-business-framework')['BfRemoteSelect']
    BfDictSelect: typeof import('setaria-business-framework')['BfDictSelect']

    BfBasicSearchHelp: typeof import('setaria-business-framework')['BfBasicSearchHelp']
    BfBasicInputSearchHelp: typeof import('setaria-business-framework')['BfBasicInputSearchHelp']

    BfTabBarTemplate: typeof import('setaria-business-framework')['BfTabBarTemplate']
  }
}

export {}
