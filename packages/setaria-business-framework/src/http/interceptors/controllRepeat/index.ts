/* eslint-disable @typescript-eslint/ban-types */
import axios from 'axios'
import { getUUID } from '../../../utils/'
import type { CustomAxiosRequestConfig } from '../../types/'
import type { AxiosResponse } from 'axios'
import type { ServiceError } from '@setaria/setaria-ts'

const SPLIT_KEY = '||&&'
const pendingList: string[] = [] // 声明一个数组用于存储每个请求的取消函数和axios标识
let cancelList: CancelItem[] = [] // 已取消 待回溯的列表

interface CancelItem {
  key: string
  uuid: string
  callback: Function
}

/**
 * 阻止重复请求
 * @param {array} reqList - 请求缓存列表
 * @param {string} url - 当前请求地址
 * @param {function} cancel - 请求中断函数
 * @param {string} errorMessage - 请求中断时需要显示的错误信息
 */
const stopRepeatRequest = (key: string, cancel: Function) => {
  // const errorMsg = errorMessage || '';
  for (const element of pendingList) {
    if (element === key) {
      const uuid = getUUID()

      cancelList.push({
        key,
        uuid,
        callback: () => {
          !1
        },
      })
      // console.log('ControllRepeat 拦截：', uuid, key);

      cancel(`${key}${SPLIT_KEY}${uuid}`)
      return
    }
  }
  pendingList.push(key)
}

/**
 * 允许某个请求可以继续进行
 * @param {array} reqList 全部请求列表
 * @param {string} url 请求地址
 */
const allowRequest = (key: string) => {
  for (let i = 0; i < pendingList.length; i += 1) {
    if (pendingList[i] === key) {
      pendingList.splice(i, 1)
      break
    }
  }
}

// 获取统一Key
const getKey = (config: CustomAxiosRequestConfig) =>
  config.url + JSON.stringify(config.data) + config.method

// 请求拦截
export const requestControllRepeat = (config: CustomAxiosRequestConfig) => {
  if (config.isControllRepeat) {
    let cancel: Function = () => {
      !1
    }
    config.cancelToken = new axios.CancelToken((c) => {
      cancel = c
    })
    stopRepeatRequest(
      getKey({ ...config, ...{ data: JSON.stringify(config.data) } }),
      cancel
    )
  }
}
// 返回拦截
export const responseControllRepeat = (res: AxiosResponse) => {
  const config = res.config as CustomAxiosRequestConfig
  if (config.isControllRepeat) {
    const data = res?.data
    const key = getKey(config)
    allowRequest(key)

    // 查找已取消的信息
    cancelList
      .filter((item: CancelItem) => item.key === key)
      .forEach((item: CancelItem) => {
        // console.log('ControllRepeat  消费：', item.uuid, item.key);
        item.callback(data)
      })
    // 移除已消费的
    cancelList = cancelList.filter((item) => item.key !== key)
    // console.log('ControllRepeat  原始返回：', data);
    // console.log('ControllRepeat  CancelList 队列中有：', cancelList);
  }
}
// 错误拦截
export const errorControllRepeat = (res: ServiceError, resolve: Function) => {
  // eslint-disable-next-line no-unsafe-optional-chaining
  const [_key, uuid] = res?.detail?.message?.split(SPLIT_KEY)
  const findObj = cancelList.find((item) => item.uuid === uuid) as CancelItem
  // console.log('ControllRepeat 生产：', uuid, key);
  findObj.callback = resolve
}
// };
