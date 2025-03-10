// GlobalComponents for Volar
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    BfHelloWould: typeof import('setaria-business-framework')['BfHelloWould']
    BfSearchPage: typeof import('setaria-business-framework')['BfSearchPage']
    BfFakeComponent: typeof import('setaria-business-framework')['BfFakeComponent']
    BfFileDragger: typeof import('setaria-business-framework')['BfFileDragger']
    BfChineseMoney: typeof import('setaria-business-framework')['BfChineseMoney']
    BfImportDropdown: typeof import('setaria-business-framework')['BfImportDropdown']
    BfShadowUploader: typeof import('setaria-business-framework')['BfShadowUploader']

    BfRemoteSelect: typeof import('setaria-business-framework')['BfRemoteSelect']
    BfDictSelect: typeof import('setaria-business-framework')['BfDictSelect']

    BfBasicSearchHelp: typeof import('setaria-business-framework')['BfBasicSearchHelp']
    BfBasicInputSearchHelp: typeof import('setaria-business-framework')['BfBasicInputSearchHelp']

    BfMainLayout: typeof import('setaria-business-framework')['BfMainLayout']
    BfTabBarLayout: typeof import('setaria-business-framework')['BfTabBarLayout']
    BfBaseLayout: typeof import('setaria-business-framework')['BfBaseLayout']
  }
}

export {}
