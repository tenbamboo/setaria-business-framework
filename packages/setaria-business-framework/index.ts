import installer from './defaults'
export * from '@setaria-business-framework/components'
export * from '@setaria-business-framework/constants'
export * from '@setaria-business-framework/directives'
export * from '@setaria-business-framework/hooks'
export * from '../utils/schema'
export * from '../utils/uiSchema'
export * from './make-installer'
export * from './src/'

export const install = installer.install
export const version = installer.version
export default installer

export { default as dayjs } from 'dayjs'
