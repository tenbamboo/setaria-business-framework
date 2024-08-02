---
title: RequestApi
lang: zh-CN
---

# Http 服务调用

页面开发中常用示例。

## 服务调用测试

:::demo

request-api/http1

:::

## 接口节流

- 有时在一瞬间页面会请求大量相同的接口,这时对页面性能来说造成了巨大的压力,这里提供了这个解决方案,`isControllRepeat` 设置为`true`即可
- 当侦察到有多次相同请求时,框架会放行第一次的请求并拦截其他相同请求
- 当第一次请求返回时,会复制`response`信息给之前拦截的请求,并做相关操作
- 被拦截的请求会在 console 报错，请无视

:::demo

request-api/http2

:::

## 应用定义服务实例

- 请找到应用的以下路径`/src/config/http/index.js`并增加对应实例名即可

- `key`为实例名称，`value`为`axios`配置对象内容，可直接参考`axios`配置内容。 `axios`的拦截器，请往下查看。

```javascript
export default {
  myFirstInterface: {
    baseURL: '/api/myFirstInterface',
  },
}
```

## 框架内置服务

当然，框架内容也集成了当前后端所有的微服务实例信息

```javascript
export default {
  // 基础base服务
  base: {
    baseURL: '/api',
  },
  // 报账单服务
  claim: {
    baseURL: '/claim',
  },
  // 系统配置服务
  config: {
    baseURL: '/config',
  },
  // 关账驾驶舱服务
  cac: {
    baseURL: '/cac',
  },
  // 资金服务
  fund: {
    baseURL: '/fund',
  },
  // 绩效考核
  pi: {
    baseURL: '/pi',
  },
  // 规则引擎
  re: {
    baseURL: '/re',
  },
}
```

## 服务请求规范

- 如无特殊场景，所有调用服务相关代码都应该放在对应 vue 文件同级的`service.ts`中

- `config` 为服务实例名，当然系统也提供了`base`基础服务

```javascript
import { http } from 'setaria'

// 我是子应用定义的服务
const request = http.config

// 我是基础服务
const requestBase = http.base

export const getDataList = (params) => {
  return request.post('url', params)
}

export const deleteData = () => {
  return request.get(`url?id=${id}`)
}

export const getDetail = () => {
  return request.get(`url?id=${id}`)
}

export const updateData = (params) => {
  return request.post(`url`, params)
}

export const addData = (params) => {
  return request.post(`url`, params)
}

// 导出数据，需要指定 responseType
export const exportData = (params) => {
  return request.post(`url`, params, {
    responseType: 'arraybuffer',
  })
}
```
