import { errorCallback, successCallback } from './common'

const apis = [
  {
    url: '/api/admin/t-rmbs-dict/pageSize',
    type: 'post',
    response: (config) => {
      const list = []
      for (let index = 0; index < 10; index += 1) {
        list.push({
          compId: index,
          orderId: index,
          dictId: `test${index}`,
          dictName: `测试${index}`,
          dispValue: `显示值${index}`,
          fldValue: `字典值${index}`,
          status: `可用`,
        })
      }

      const res = successCallback({
        list,
        pageNo: 1,
        pageSize: 10,
        total: 30,
      })
      console.log(res)
      return res
    },
  },
  {
    url: '/api/admin/t-rmbs-dict/listByCode',
    type: 'post',
    response: (config) => {
      const list = []
      for (let index = 0; index < 10; index += 1) {
        list.push({
          compId: index,
          orderId: index,
          dictId: `test${index}`,
          dictName: `测试${index}`,
          dispValue: `显示值${index}`,
          fldValue: `${index}`,
          status: `可用`,
        })
      }

      const res = successCallback(list)
      console.log(res)
      return res
    },
  },
]

export default apis
