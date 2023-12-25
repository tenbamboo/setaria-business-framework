## JsonSchema

- 依赖[Json-Schema](https://json-schema.org/) 标准

### JsonSchema 从哪里来？

- JsonSchema 数据来源于后端的`Swagger`中暴露的每一个接口的实体 Bean

### Swagger 中的实体 Bean 怎么和前端协同？

- 框架已集成了相关功能，通过配置在子项目根路径中的`.swagger-to-jsonschema-config`文件来定向拉取对应`Swagger`中的实体 Bean 信息

- 通过在子项目中执行`npm run generate-json-schema`命令来生成本地的`JsonSchema`内容

- 当`JsonSchema`内容已生成之后，就可以使用如`schema-form`、`scheam-table`、`search-form`、`search-page`等组件，快速生成页面啦

### 后端小伙伴 注意事项

- 后端实体 Bean 的每一个属性上都需要带上`@ApiModelProperty`的注解，前端框架才可识别生成对应`JsonSchema`的内容，如：

```java

public class User {

  @ApiModelProperty("用户姓名")
  private String userName;

  @ApiModelProperty("用户编号")
  private String userNo;

}

```

### JsonSchema 精简内容

- `JsonSchema`中，有很多内容，其实我们现有场景都暂未使用，以下罗列了比较常用的`JsonSchema Item` 使用的内容（请关注 `"properties"`下的内容）：

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
```

### JsonSchema Sample & Demo

- 浏览底层 UI 库中的 Demo [Setaria-Components](https://tenbamboo.github.io/setaria-components/zh-CN/)

- 浏览业务复合组件中的`Search Page`组件

### Q&A

- 问：开发前期，后端小伙伴提供不了接口内容，间接导致实体 Bean 生成不了`JsonSchema`怎么办？

- 答 1：可规范后端小伙伴，先定义`Controller`并定义好`实体Bean`，最后再补`Service`与`Dao`层逻辑

- 答 2：如`答1`实现不了，那我们可在`json-schema`文件夹中临时手写`JsonSchema`，待后端接口提供之后，直接做替换即可。

<hr>

- 问：生产环境需要部署`Swagger`吗？

- 答：无需部署，前端会在做`发布生产前`或`接口实体Bean变更后`，可手动执行命令以更新`JsonSchema`

<hr>
