<template>
  <bf-search-page
    ref="serachPage"
    :schema="baseSchema"
    :condition-schema="conditionSchema"
    :request="handlerRequest"
    :label-mode="false"
    :export-data="handlerExportData"
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
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { ElRate } from 'element-plus'
import { http } from '@setaria/setaria-ts'
import type { SchemaProps } from 'setaria-components'
import type { SeachPageEvents } from 'setaria-business-framework'

const request = http.admin
const serachPage = ref()

const baseSchema = reactive<SchemaProps>({
  required: [],
  properties: {
    compId: {
      type: 'string',
      description: '',
      title: '公司id',
    },
    dictId: { type: 'string', description: '', title: '字典id' },
    dictName: { type: 'string', description: '', title: '字典名称' },
    dispValue: { type: 'string', description: '', title: '展示值' },
    fldValue: { type: 'string', description: '', title: '字典值' },
    id: {
      type: 'string',
      description: '',
      title: '主键id',
    },
    orderId: {
      type: 'string',
      description: '',
      title: '排序',
    },
    parentId: {
      type: 'string',
      description: '',
      title: '父级id',
    },
    status: { type: 'string', description: '', title: '状态' },
  },
})

const conditionSchema = [
  'dictName',
  'dispValue',
  'fldValue',
  'orderId',
  'status',
]

const handlerRequest: SeachPageEvents.Request = (pageInfo) => {
  return request.post('/t-rmbs-dict/pageSize', pageInfo).then((res) => {
    console.log(res)
    return res
  })
}
const handlerExportData: SeachPageEvents.ExportData = (parmas) => {
  return Promise.resolve(true)
}
</script>
