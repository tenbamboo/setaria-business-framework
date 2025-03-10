import { withInstall } from '@setaria-business-framework/utils'

import ImportDropdown from './src/import-dropdown.vue'

export const BfImportDropdown = withInstall(ImportDropdown)
export default BfImportDropdown

export * from './src/import-dropdown.vue'
// export * from './src/propsAndEmit'

export type { ImportDropdownInstance } from './src/instance'
