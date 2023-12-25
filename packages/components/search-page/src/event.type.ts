/* eslint-disable @typescript-eslint/no-namespace */
export namespace SeachPageEvents {
  export type Request = (params: any) => Promise<any>

  export type ExportData = (params: any) => Promise<any>

  export type ConditionChange = (
    schemaKey: string,
    val: string | number,
    model: any
  ) => void

  export type SearchSuccess = (list: any[]) => void

  export type SearchError = (e: any) => void

  export type ExportSuccess = (res: any) => void

  export type ExportError = (e: any) => void
}
