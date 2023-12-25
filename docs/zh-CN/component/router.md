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

<!-- 1. 定义相关路由的位置如下，定义的路由信息应遵循以业务模块角度来划分定义 -->

![image](/images/tip2.png)

2. 定义路由名称时，应和当前物理路径名保持一致，这样后续直接可通过 url 找到对应的物理文件

3. 定义路由时，需关注`webpackChunkName`属性，此属性一般和`name`属性一致即可，比如：

```javascript
const BaseTemplate = import('@/components/BaseTemplate.vue')

export default [
  {
    path: '/demo1',
    name: 'demo1',
    component: BaseTemplate,
    children: [
      {
        path: 'demo1-1',
        name: 'demo1-1',
        component: import(
          /* webpackChunkName: "demo1-1" */ '@/views/demo1/demo1-1.vue'
        ),
      },
      {
        path: 'demo1-2',
        name: 'demo1-2',
        component: import(
          /* webpackChunkName: "demo1-2" */ '@/views/demo1/demo1-2.vue'
        ),
      },
      {
        path: 'demo1-3',
        name: 'demo1-3',
        component: import(
          /* webpackChunkName: "demo1-3" */ '@/views/demo1/demo1-3.vue'
        ),
      },
    ],
  },
]
```
