---
title: Layout
lang: zh-CN
---

# Layout

- 此章节介绍主要的页面布局组件，由于有路由渲染，暂不以 Demo 形式展示。

## MainLayout

- 主布局，包含`初始化国际化`、`初始化用户信息`等系统依赖的内容
- 一般用于`App.vue`中调用

```html
<script setup>
  import { BfMainLayout } from 'setaria-business-framework'
</script>

<template>
  <bf-main-layout />
</template>

<!-- 也可在默认插槽中加入全局组件 -->

<script setup>
  import { BfMainLayout } from 'setaria-business-framework'
</script>

<template>
  <bf-main-layout>
    <global-setting />
  </bf-main-layout>
</template>
```

## BaseLayout

- BaseLayout 包含了`Header`和`Menu`组件
- 一般用于 Router 定义中的 component 使用

```javascript
import { BfBaseLayout } from 'setaria-business-framework'

export default [
  {
    path: '/dashboard',
    component: () => BfBaseLayout,
    children: [
      {
        path: '',
        name: 'dashboard',
        meta: {
          title: '首页',
        },
        component: () =>
          import(
            /* webpackChunkName: "dashboard" */ '@/views/dashboard/index.vue'
          ),
      },
    ],
  },
]
```

## TabBarLayout

- TabBarLayout 包含了`Header`、`Menu`、`TabBar`组件，需要关注的是，`TabBar`组件自带`keep-alive`功能
- 一般用于 Router 定义中的 component 使用
- 在使用此功能时需要注意的是业务代码需要在 `script` 上挂`name`属性来定义组件名称

```javascript

/**  路由定义部分*/
import { BfTabBarLayout } from 'setaria-business-framework'

export default [
  {
    path: '/dashboard',
    component: () => BfTabBarLayout,
    children: [
      {
        path: '',
        name: 'dashboard', // 这里的内容需要和defineOptions.name的内容一致
        meta: {
          title: '首页',
        },
        component: () =>
          import(
            /* webpackChunkName: "dashboard" */ '@/views/dashboard/index.vue'
          ),
      },
    ],
  },
]
/**  业务代码部分 */
/**  这里的名称需要和路由的name一致 */
<script setup name="dashboard">
</script>


```
