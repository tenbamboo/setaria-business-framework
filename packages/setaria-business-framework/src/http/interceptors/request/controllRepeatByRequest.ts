import { requestControllRepeat } from '../controllRepeat'
import type { CustomAxiosRequestConfig } from '../../types/'
export default {
  onFulfilled: (config: CustomAxiosRequestConfig) => {
    requestControllRepeat(config)
    return config
  },
}
