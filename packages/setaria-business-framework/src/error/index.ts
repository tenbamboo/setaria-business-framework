import { ElMessage } from 'element-plus'

export const errorHandler = function (type: number, error: any) {
  const { errorCode, errorMessage } = error
  // 生产环境不提示客户端错误
  if (process.env.NODE_ENV === 'production') {
    if (
      (errorCode && errorCode === 'SYSMSG-CLIENT-UNKNOWN-ERROR') ||
      (errorMessage && errorMessage.includes('SYSMSG-CLIENT-UNKNOWN-ERROR')) ||
      type === 0
    ) {
      return
    }
  }

  ElMessage({
    type: 'error',
    message: `${errorCode ? `[${errorCode}] ` : ''}${errorMessage}`,
  })
}
