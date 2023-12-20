import { withInstall } from '@setaria-business-framework/utils'

import SearchPage from './src/search-page'

export const BfSearchPage = withInstall(SearchPage)
export default BfSearchPage

export * from './src/search-page'
export * from './src/props'
export type { SearchPageInstance } from './src/instance'
