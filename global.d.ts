// GlobalComponents for Volar
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    BfHelloWould: typeof import('setaria-business-framework')['BfHelloWould']
  }
}

export {}
