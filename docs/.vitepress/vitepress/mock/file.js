import { errorCallback, successCallback } from './common'

const apis = [
  {
    url: '/api/claim/file/upload-files',
    type: 'post',
    response: (config) => {
      const res = successCallback({})
      return res
    },
  },
]

export default apis
