## Router 路由

继承`vue-router` API

### 基础使用

```html
<script setup lang="ts">
  import { useRouter } from 'vue-router'
  const router = useRouter()

  const gotoDemo1 = () => {
    router.push({
      path: '/demo1/demo1-1',
    })
  }
  const gotoDemo2 = () => {
    router.push({
      path: '/demo1/demo1-2',
    })
  }
  const gotoDemo3 = () => {
    router.push({
      path: '/demo1/demo1-3',
    })
  }
</script>
```

### 路由定义

![image](/images/tip2.png)

1. 定义路由名称时，应和当前物理路径名保持一致，这样后续直接可通过 url 找到对应的物理文件

2. 定义路由时，需关注`webpackChunkName`属性，此属性一般和`name`属性一致即可，比如：

```javascript
import { BfTabBarLayout } from 'setaria-business-framework'
// import { BfBaseLayout } from 'setaria-business-framework'

export default [
  {
    path: '/demo1',
    name: 'demo1',
    component: () => BfTabBarLayout,
    children: [
      {
        path: 'demo1-1',
        name: 'demo1-1',
        meta: {
          title: '演示1',
        },
        component: () =>
          import(/* webpackChunkName: "demo1-1" */ '@/views/demo1/demo1-1.vue'),
      },
      {
        path: 'demo1-2',
        name: 'demo1-2',
        meta: {
          title: '演示2',
        },
        component: () =>
          import(/* webpackChunkName: "demo1-2" */ '@/views/demo1/demo1-2.vue'),
      },
      {
        path: 'demo1-3',
        name: 'demo1-3',
        meta: {
          title: '演示3',
        },
        component: () =>
          import(/* webpackChunkName: "demo1-3" */ '@/views/demo1/demo1-3.vue'),
      },
    ],
  },
]
```

3. 如要使用`keep-alive`功能，请将页面组件中`script`添加`name`属性，示例如下

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

### Meta 路由属性

| 名称        | 说明                                                           | 类型    | 默认值 |
| ----------- | -------------------------------------------------------------- | ------- | ------ |
| hideInTab   | `tab-bar-layout`组件可用 是否在 tabbar 中隐藏当前页面          | Boolean | false  |
| ignoreCache | `tab-bar-layout`组件可用 是否在无视 keep-alive 的组件缓存机制  | Boolean | false  |
| ignoreRule  | 是否无视权限模型，即越过 RBAC 模型前端无权限时也可访问当前页面 | Boolean | false  |
