## 其他 Tips

### 获取当前登陆用户与用户角色信息信息

当前登陆用户信息已被放入全局属性`$getUserInfo()`下，直接使用即可

```javascript
// 获取用户信息
const userInfo = this.$getUserInfo()

userInfo.userName

// 获取用户角色信息
const userRoleList = this.$getUserRoleInfo()
```

### 隐藏左侧菜单内容

方式 1：

框架已监控 URL 参数，如 URL 参数中有`hideMenu=1`时，则隐藏左侧菜单，比如：

```html
https://testest/dict?hideMenu=1
```

方式 2：

通过 Vuex 手动设置，代码如下

```javascript
// 设置隐藏
this.$store.commit('layout/setMenuStatus', false)

// 设置显示
this.$store.commit('layout/setMenuStatus', true)
```

### 隐藏 Header

方式 1：

框架已监控 URL 参数，如 URL 参数中有`hideHeader=1`时，则隐藏左侧菜单，比如：

```html
https://testest/dict?hideHeader=1
```

方式 2：

通过 Vuex 手动设置，代码如下

```javascript
// 设置隐藏
this.$store.commit('layout/setHeaderStatus', false)

// 设置显示
this.$store.commit('layout/setHeaderStatus', true)
```

### Scss 引入图片

1. 首先在项目中找到地址`public/static/images/`下创建一个和业务相关的文件夹，比如:`home`

![image](/images/tip1.png)

1. 将对应的图片放入到`home`文件夹下，比如`demo.png`

2. 在对应的业务代码中写以下代码

```scss
.demoBg {
  background: url('/static/images/home/demo.png');
}
```

### Img 引用图片

1. 首先在项目中找到地址`public/static/images/`下创建一个和业务相关的文件夹，比如:`home`

![image](/images/tip1.png)

1. 将对应的图片放入到`home`文件夹下，比如`demo.png`

2. 在对应的业务代码中写以下代码

```javascript

<template>
 <img :src="`static/image/fssc/404.png`" />
</template>
```
