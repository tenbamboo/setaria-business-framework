<template>
  <bf-search-page
    ref="serachPage"
    :table-id="'myFirstStoragedTableByFull'"
    :schema="baseSchema"
    :condition-schema="conditionSchema"
    :request="handlerRequest"
    :export-data="handlerExportData"
    :column-width="'120px'"
    :seq-column="true"
    :label-mode="false"
    :show-oper="true"
    :selection-type="'checkbox'"
    :form-save="handlerFormSave"
    :form-rules="formRules"
    :show-column-setting="true"
    :column-setting-draggable="true"
  >
    <template #condition.status="scope">
      <el-rate v-model="scope.data.status" />
    </template>
    <template #table.status="scope">
      <div>
        <!-- 编辑模式下 -->
        <el-select v-if="scope.status === 'edit'" v-model="scope.data.status">
          <el-option :value="'1'" label="可用" />
          <el-option :value="'0'" label="不可用" />
        </el-select>
        <!-- 默认显示模式 -->
        <span v-if="scope.status === 'default'">
          {{
            scope.data.status === '1'
              ? '可用'
              : scope.data.status === '0'
              ? '不可用'
              : ''
          }}
        </span>
      </div>
    </template>
  </bf-search-page>
  <!-- <el-button @click="test1">test</el-button> -->
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import qs from 'qs'
import { ElMessage, ElRate } from 'element-plus'
import { http } from '@setaria/setaria-ts'
import { getSchema } from 'setaria-business-framework'
import type { SchemaProps } from 'setaria-components'
import type { SeachPageEvents } from 'setaria-business-framework'

const request = http.admin
const serachPage = ref()

// 可通过getSchema 来获取以下被注释的代码
const baseSchema = reactive<SchemaProps>(getSchema('Claim', 'Dict'))

// const baseSchema = reactive<SchemaProps>({
//   required: ['compId', 'dictId'],
//   properties: {
//     compId: {
//       type: 'string',
//       description: '',
//       title: '公司id',
//     },
//     dictId: { type: 'string', description: '', title: '字典id' },
//     dictName: { type: 'string', description: '', title: '字典名称' },
//     dispValue: { type: 'string', description: '', title: '展示值' },
//     fldValue: { type: 'string', description: '', title: '字典值' },
//     id: {
//       type: 'string',
//       description: '',
//       title: '主键id',
//     },
//     orderId: {
//       type: 'string',
//       description: '',
//       title: '排序',
//     },
//     parentId: {
//       type: 'string',
//       description: '',
//       title: '父级id',
//     },
//     status: { type: 'string', description: '', title: '状态' },
//   },
// })

const conditionSchema = [
  'dictName',
  'dispValue',
  'fldValue',
  'orderId',
  'status',
]
// const tableUi = reactive<Record<string, SchemaUiPropsByTable>>({})

const formRules = {
  dictName: [
    {
      validator: (rule: any, value: any, callback: any) => {
        if (!value?.includes('Hello')) {
          callback(new Error('需包含Hello字样'))
        }
        callback()
      },
      trigger: 'blur',
    },
  ],
}

const handlerRequest: SeachPageEvents.Request = (pageInfo) => {
  return request.post('/t-rmbs-dict/pageSize', pageInfo).then((res) => {
    console.log(res)
    return res
  })
}

const handlerFormSave = (data, mode) => {
  let fun = Promise.resolve()
  let label = ''
  // 这里用于快速获取数据，实际业务代码请将接口请求相关代码独立出来
  if (mode === 'add') {
    fun = request.post(
      `/t-rmbs-dict/save?${qs.stringify(data, { skipNulls: true })}`
    )
    label = '新增'
  } else if (mode === 'update') {
    fun = request.post(
      `/t-rmbs-dict/update?${qs.stringify(data, { skipNulls: true })}`
    )
    label = '修改'
  } else if (mode === 'delete') {
    fun = request.post(
      '/t-rmbs-dict/removeByIdList',
      data.map((item) => item.id)
    )
    label = '删除'
  }
  return fun.then(() => {
    serachPage.value.search()
    ElMessage.success(`${label}成功`)
  })
}

const handlerExportData: SeachPageEvents.ExportData = (parmas) => {
  return Promise.resolve(true)
}
</script>
