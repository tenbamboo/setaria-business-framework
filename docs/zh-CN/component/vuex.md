## 状态管理

继承`Pinia` API，原则上来说，业务代码不允许使用状态管理，如需使用，请联系相关前端架构师。

### 快速获取当前用户信息

```html
<script lang="ts" setup>
  import { computed } from 'vue'
  import { useUserStore } from 'setaria-business-framework'
  // //
  const userStore = useUserStore()
  const userinfo = computed(() => userStore.getUserInfo)
</script>
```
