/**
 * @public
 * @function
 * @todo 判断是否为空
 * @memberof Cain
 * @param {Object} obj 需要校验对象
 */
export function isBlank(obj: any) {
  if (
    typeof obj === 'undefined' ||
    obj === undefined ||
    obj == null ||
    obj === 'null' ||
    obj === 'undefined' ||
    obj === '' ||
    obj.length === 0
  ) {
    return true
  }
  if (typeof obj === 'object' && obj instanceof Date) {
    return false
  }
  if (typeof obj === 'object' && obj.length === undefined) {
    for (const _name in obj) {
      return false
    }
    return true
  }
  return false
}

/**
 * @public
 * @function
 * @todo 获取Url中的值
 * @memberof Cain
 * @param {String} name key的名字
 */
export function getUrlParam(name: string) {
  const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`)

  const array = window.location.hash.split('?')
  if (array.length > 1) {
    const r = array[1].match(reg)
    if (r != null) {
      return unescape(r[2])
    }
  }

  return null
}

/**
 * @function getUUID
 * @memberof Cain
 * @public
 * @param {string} key uuid 的前缀标识
 * @returns {boolean} 生成的 uuid 字符串
 */
export function getUUID(prefix = '') {
  let d = Date.now()
  const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    // eslint-disable-next-line unicorn/prefer-math-trunc
    const r = (d + Math.random() * 16) % 16 | 0
    d = Math.floor(d / 16)
    return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16)
  })
  return prefix + uuid
}

/**
 * @public
 * @function
 * @todo 对日期进行格式化
 * @memberof Cain
 * @param {Date} date 要格式化的日期
 * @param {String} format 进行格式化的模式字符串
 *     支持的模式字母有：
 *     y:年,
 *     M:年中的月份(1-12),
 *     d:月份中的天(1-31),
 *     h:小时(0-23),
 *     m:分(0-59),
 *     s:秒(0-59),
 *     S:毫秒(0-999),
 *     q:季度(1-4)
 */
export function formatDate(date: [Date, string], format: string) {
  if (isBlank(date) && !(date instanceof Date)) {
    return null
  }
  if (isBlank(format)) {
    format = 'yyyy-MM-dd hh:mm:ss'
  }
  let dateStr = ''
  let dateReal: Date = new Date()
  if (typeof date === 'string') {
    dateStr = date as string

    if (dateStr.slice(0, Math.max(0, dateStr.lastIndexOf('.'))) !== '') {
      dateStr = dateStr.slice(0, Math.max(0, dateStr.lastIndexOf('.')))
    }
    dateStr = dateStr.replace(/-/g, '/')
    dateReal = new Date(dateStr)
  } else {
    dateReal = date as unknown as Date
  }

  const map: Record<string, any> = {
    M: dateReal.getMonth() + 1, // 月份
    d: dateReal.getDate(), // 日
    h: dateReal.getHours(), // 小时
    m: dateReal.getMinutes(), // 分
    s: dateReal.getSeconds(), // 秒
    q: Math.floor((dateReal.getMonth() + 3) / 3), // 季度
    S: dateReal.getMilliseconds(), // 毫秒
  }
  format = format.replace(/([yMdhmsqS])+/g, (all, t) => {
    if (!['y', 'M', 'd', 'h', 'm', 's', 'q', 'S'].includes(t)) {
      return all
    }
    let v = map[t]
    if (v !== undefined) {
      if (all.length > 1) {
        v = `0${v}`
        v = v.slice(-2)
      }

      return v
    }
    if (t === 'y') {
      return `${dateReal.getFullYear()}`.slice(4 - all.length)
    }

    return all
  })

  return format
}

/**
 * @public
 * @function
 * @todo 获取Cookie
 * @memberof Cain
 * @param {String} name Cookie key
 */
export function getCookie(name: string) {
  const reg = new RegExp(`(^| )${name}=([^;]*)(;|$)`)
  const arr = document.cookie.match(reg)
  if (arr) return unescape(arr[2])
  return null
}

/**
 * @public
 * @function
 * @todo 设置Cookie
 * @memberof Cain
 * @param name cookie的名称
 * @param value cookie的值
 * @param day cookie的过期时间
 */
export function setCookie(name: string, value: string, day: number) {
  if (day !== 0) {
    // 当设置的时间等于0时，不设置expires属性，cookie在浏览器关闭后删除
    const expires = day * 24 * 60 * 60 * 1000
    const date = new Date(Date.now() + expires)

    document.cookie = `${name}=${escape(
      value
    )};expires=${date.toUTCString()};path=/`
  } else {
    document.cookie = `${name}=${escape(value)};path=/`
  }
}
/**
 * @public
 * @function
 * @todo 获取Cookie
 * @memberof Cain
 * @param name cookie的名称
 */
export function removeCookie(name: string) {
  document.cookie = `${name}=` + ';path=/;expires=Thu, 01 Jan 1970 00:00:01 GMT'
}

/**
 * 针对过滤接口的处理，去除请求参数中的空值或者null
 * @param {Object} parObj 参数对象
 *
 */
export function filterTrueValue(parObj: Record<string, any>) {
  const newObj: Record<string, any> = {}
  Object.keys(parObj).forEach((el) => {
    if (!isBlank(parObj[el])) {
      newObj[el] = parObj[el]
    }
  })
  return newObj
}

/**
 * 转换为金额格式
 * @param {string | number} val
 */
export function priceFormatter(val: any) {
  const current = `${val}`
  if (isBlank(current)) {
    return val
  }
  const format = (v: string) => {
    const ret = v.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    return ret
  }
  if (current.indexOf('.')) {
    const arr = current.split('.')
    arr[0] = format(arr[0])
    return arr.join('.')
  }
  return format(current)
}

/**
 * 将字符串格式金额转换为数字格式
 * @param {string} val
 * @returns
 */
export function priceParser(val: string) {
  return val.replace(/(,*)/g, '')
}

/**
 * 将数字转换为中文钱币内容
 *
 */
export function convertChineseMoney(money: number | string) {
  if (!/^-?(0|[1-9]\d*)(\.\d+)?$/.test(`${money}`)) {
    return '数据非法'
  }

  const isNegative = (money as number) < 0
  money = Math.abs(Number.parseFloat(`${money}`))

  const cnNums = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖']
  const cnIntRadice = ['', '拾', '佰', '仟']
  const cnIntUnits = ['', '万', '亿', '兆']
  const cnDecUnits = ['角', '分', '毫', '厘']
  const cnInteger = '整'
  const cnIntLast = '元'
  const maxNum = 999999999999.9999

  if (money >= maxNum) {
    return ''
  }

  let integerNum
  let decimalNum
  let chineseStr = ''
  money = money.toString()

  if (!money.includes('.')) {
    integerNum = money
    decimalNum = ''
  } else {
    const parts = money.split('.')
    ;[integerNum] = parts
    decimalNum = parts[1].slice(0, 4)
  }

  if (Number.parseInt(integerNum, 10) > 0) {
    let zeroCount = 0
    const IntLen = integerNum.length

    for (let i = 0; i < IntLen; i += 1) {
      const n = integerNum.charAt(i)
      const p = IntLen - i - 1
      const q = p / 4
      const m = p % 4

      if (n === '0') {
        zeroCount += 1
      } else {
        if (zeroCount > 0) {
          chineseStr += cnNums[0]
        }
        zeroCount = 0
        // eslint-disable-next-line radix
        chineseStr += cnNums[Number.parseInt(n)] + cnIntRadice[m]
      }
      if (m === 0 && zeroCount < 4) {
        chineseStr += cnIntUnits[q]
      }
    }
    chineseStr += cnIntLast
  }

  if (decimalNum !== '') {
    const decLen = decimalNum.length
    for (let i = 0; i < decLen; i += 1) {
      const n = decimalNum.charAt(i)
      if (n !== '0') {
        chineseStr += cnNums[Number(n)] + cnDecUnits[i]
      }
    }
  }

  if (chineseStr === '') {
    chineseStr = cnNums[0] + cnIntLast + cnInteger
  } else if (decimalNum === '') {
    chineseStr += cnInteger
  }

  if (isNegative) {
    chineseStr = `负${chineseStr}`
  }

  return chineseStr
}
