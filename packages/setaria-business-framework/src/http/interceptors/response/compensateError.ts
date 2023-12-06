import { ServiceError } from '@setaria/setaria-ts'
// import { ServiceError } from "@setaria/setaria-ts";
import type { AxiosResponse } from 'axios'
export default {
  onFulfilled: (res: AxiosResponse) => {
    const data = res?.data
    if (
      res.headers['content-type'].includes('application/json') &&
      `${data.code}` !== '200'
    ) {
      throw new ServiceError(data.code, data.message)
    }
    return res
  },
}
