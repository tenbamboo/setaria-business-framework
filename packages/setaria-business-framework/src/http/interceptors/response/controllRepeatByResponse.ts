import axios from 'axios'
import { errorControllRepeat, responseControllRepeat } from '../controllRepeat'
import type { ServiceError } from '@setaria/setaria-ts'
import type { AxiosResponse } from 'axios'
export default {
  onFulfilled: (res: AxiosResponse) => {
    responseControllRepeat(res)
    return res
  },
  onRejected: (res: ServiceError) => {
    return new Promise((_resolve, reject) => {
      if (res.detail instanceof axios.Cancel) {
        errorControllRepeat(res, reject)
        return
      }
      // return res;
      reject(res)
    })
  },
}
