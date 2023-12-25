## JsonRule

- 上二章节，介绍了`JsonSchema`与 `JsonUISchema`的内容

- 这一章节介绍表格提交或表单提交时的逻辑校验功能

### 必填校验用法

- `JsonSchema`中其实已经暴露了`required`属性，类型为 Array，内容为需要做必填校验的 key，比如：

```javascript
const schema = {
  UserAccount: {
    title: 'User',
    required: [],
    type: 'object',
    properties: {
      userName: {
        // 字符型
        type: 'string',
        title: '用户名',
      },
      startDate: {
        // 日期型
        type: 'string',
        format: 'date',
        title: '生效日期',
      },
      createdTime: {
        // 日期时间型
        type: 'string',
        format: 'date-time',
        title: '创建时间',
      },
      accountMoney: {
        // 金额型
        type: 'number',
        format: 'price',
        scale: 2, // 保留2位小数
        title: '账号金额',
      },
    },
    description: '',
  },
}

// 通过此方式来定义必填校验
schema.required = ['userName', 'accountMoney']
```

### 其他校验用法

- 对应相关`JsonSchema`组件都暴露了相关`rule`的属性来对每一项内容做控制

- `rule`属性与 ElementUI Form Rule 提供的逻辑一致，比如：

```javascript
const rule = {
  name: [{ min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }],
  pass: [
    {
      validator: (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'))
        } else {
          callback()
        }
      },
      trigger: 'blur',
    },
  ],
}
```
