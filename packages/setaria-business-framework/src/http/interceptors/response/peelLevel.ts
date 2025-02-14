import type { AxiosResponse } from 'axios'
export default {
  onFulfilled: (res: AxiosResponse) => {
    return res.data
  },
}
