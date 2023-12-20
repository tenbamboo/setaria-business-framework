import type { AxiosResponse } from 'axios' // import { getCookie, removeCookie } from '../../../utils/'

export default {
  onFulfilled: (res: AxiosResponse) => {
    return res.data
  },
}
