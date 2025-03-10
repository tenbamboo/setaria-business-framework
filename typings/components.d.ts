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
    BfImportDropdown: typeof import('../packages/setaria-business-framework')['BfImportDropdown']
    BfShadowUploader: typeof import('../packages/setaria-business-framework')['BfShadowUploader']
    BfRemoteSelect: typeof import('../packages/setaria-business-framework')['BfRemoteSelect']
    BfDictSelect: typeof import('../packages/setaria-business-framework')['BfDictSelect']
    BfBasicSearchHelp: typeof import('../packages/setaria-business-framework')['BfBasicSearchHelp']
    BfBasicInputSearchHelp: typeof import('../packages/setaria-business-framework')['BfBasicInputSearchHelp']
    BfMainLayout: typeof import('../packages/setaria-business-framework')['BfMainLayout']
    BfTabBarLayout: typeof import('../packages/setaria-business-framework')['BfTabBarLayout']
    BfBaseLayout: typeof import('../packages/setaria-business-framework')['BfBaseLayout']
  }
}

export {}
