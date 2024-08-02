import Mock from 'setaria-mockjs'

import dictApis from './mock-dict'
// import systemInfoApis from'./mock-systemInfo'
// import boardApis from'./mock-dashboard'

const mocks = [...dictApis]
Mock.setup({
  timeout: 800, // setter delay time
  responseHeaders: {
    'content-type': 'application/json',
  },
})
for (const i of mocks) {
  Mock.mock(i.url, i.type, i.response)
}
