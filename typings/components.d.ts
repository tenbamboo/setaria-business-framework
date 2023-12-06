// For this project development
import '@vue/runtime-core'

declare module '@vue/runtime-core' {
  // GlobalComponents for Volar
  export interface GlobalComponents {
    BfHelloWould: typeof import('../packages/setaria-business-framework')['BfHelloWould']
  }
}

export {}
