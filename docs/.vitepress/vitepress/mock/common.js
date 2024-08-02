export const successCallback = (data, code = 200, message) => {
  return {
    code,
    data,
    message,
  }
}

export const errorCallback = (
  code = 500,
  message = '接口请求错误',
  data = {}
) => {
  return {
    code,
    message,
    data,
  }
}
