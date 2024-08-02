<template>
  <div
    class="remote-select-container"
    :class="{ 'remote-select-container__append': $slots.append }"
  >
    <!-- filter-method -->
    <template v-if="!labelMode">
      <el-select
        ref="selectRef"
        v-bind="$attrs"
        v-model="innerValue"
        v-loading="isLoading"
        :clearable="clearable"
        :disabled="disabled"
        :filterable="filterable"
        @change="handlerChange"
        @blur="handlerBlur"
        @clear="handlerClear"
      >
        <el-option
          v-for="(item, index) in optionsCom"
          :key="index"
          :label="getLabelInfo(item)"
          :value="item[valueKey]"
          :disabled="getDisabledOption(item[valueKey])"
        />
      </el-select>
      <div v-if="$slots.append" class="remote-append">
        <slot name="append" />
      </div>
    </template>
    <template v-else-if="$slots.labelModeValue">
      <slot name="labelModeValue" />
    </template>
    <template v-else>
      {{ formatValCom }}
    </template>
  </div>
</template>

<script lang="ts" setup>
import {
  computed,
  //   nextTick,
  //   onMounted,
  ref,
  watch,
  //   shallowRef,
  //   toRef,
  //   useAttrs,
  //   useSlots,
  //   watch,
} from 'vue'
import { useI18n } from 'vue-i18n'
import { http } from '@setaria/setaria-ts'
import { ElMessage } from 'element-plus'
import { cloneDeep } from 'lodash-unified'
import { isBlank } from '@setaria-business-framework/utils'
import { UPDATE_MODEL_EVENT } from '@setaria-business-framework/constants'
import { remoteSelectEmits, remoteSelectProps } from './propsAndEmit'
import type { SelectValueType } from './propsAndEmit'

defineOptions({
  name: 'BfRemoteSelect',
  inheritAttrs: false,
})

const props = defineProps(remoteSelectProps)
const emit = defineEmits(remoteSelectEmits)
const selectRef = ref()

// const rawAttrs = useRawAttrs()
// const slots = useSlots()
const { t } = useI18n()

const dataList = ref<any[]>([])
const isLoading = ref<boolean>(false)

const innerValue = computed({
  get: () => props.modelValue,
  set: (val) => {
    emit(UPDATE_MODEL_EVENT, val as unknown as SelectValueType)
  },
})

const optionsCom = computed<Array<any>>(() => {
  if (props?.appendList?.length) {
    return dataList.value.concat(props.appendList)
  }
  return dataList.value
})

const formatValCom = computed<string>(() => {
  const select = optionsCom.value.filter((row) => {
    const val = row[props.valueKey]
    if (Array.isArray(innerValue.value)) {
      return innerValue.value.includes(val)
    }
    return innerValue.value === val
  })
  if (select.length) {
    return select.map((item) => getLabelInfo(item)).join(',')
  }
  //   if (props.backUpValue) {
  //     return props.backUpValue
  //   }
  return ''
})

const storageKeyCom = computed<string>(() => {
  return `${props.http}||${props.url}||${props.method}||${JSON.stringify(
    props.params
  )}`
})

const getDataList = () => {
  if (props.url) {
    if (!http[props.http]) {
      ElMessage({
        type: 'error',
        message: `组件remote-select：未找到对应Http实例，当前指定实例为[${
          props.http ?? '未指定'
        }]`,
      })
      return
    }
    if (props.isStorage) {
      const item = sessionStorage.getItem(storageKeyCom.value)
      if (item) {
        const data = JSON.parse(item)
        dataList.value = formatList(data.list)
        emit('done', dataList.value, data.data)
        // props.triggerDefaultOnePorxy();
        return
      }
    }
    isLoading.value = true

    http[props.http]({
      method: props.method,
      url: props.url,
      data: props.params ?? null,
      // isControllRepeat: true, // 控制重复请求 TODO:Mock阶段，临时关掉
    })
      .then((res: Record<string, any>) => {
        // 控制不可控的调用resovle导致错乱的问题
        // controllRepeatFlag 赋值定义在 controllRepeat.js
        // console.log('remote-select', res);
        // mock时候需要注释掉这个逻辑
        // if (res.controllRepeatFlag !== getControllRepeatKey()) {
        //   return
        // }

        let list = cloneDeep(res.data)
        if (props.afterRequest) {
          list = props.afterRequest(list)
        }

        if (props.isStorage && list.length) {
          sessionStorage.setItem(
            storageKeyCom.value,
            JSON.stringify({
              list,
              data: res.data,
            })
          )
        }
        dataList.value = formatList(list)
        emit('done', dataList.value, res.data)
        // props.triggerDefaultOnePorxy()
      })
      .catch(() => {
        !1
      })
      .finally(() => {
        isLoading.value = false
      })
  } else {
    dataList.value = []
    if (props.isClearByOptionNull) {
      innerValue.value = undefined
    }
  }
}

const getControllRepeatKey = () => {
  const config = {
    url: props.url,
    data: props.params ?? null,
    method: props.method,
  }
  if (
    config.data &&
    !Array.isArray(config.data) &&
    typeof config.data === 'object'
  ) {
    const newData: Record<string, any> = {}
    Object.keys(config.data).forEach((key) => {
      if (config.data[key] !== undefined && config.data[key] !== null) {
        newData[key] = config.data[key]
      }
    })
    config.data = JSON.stringify(newData)
  } else if (config.data) {
    config.data = JSON.stringify(config.data)
  }
  return config.url + JSON.stringify(config.data) + config.method
}

const formatList = (list: Array<any>) => {
  return list
    .filter((item) => !isBlank(item[props.valueKey]))
    .map((item) => {
      if (props.formatOptionType === 'string') {
        item[props.valueKey] = `${item[props.valueKey]}`
        return item
      }
      if (props.formatOptionType === 'int') {
        item[props.valueKey] = +item[props.valueKey]
        return item
      }
      if (props.formatOptionType === 'boolean') {
        item[props.valueKey] = item[props.valueKey] === 'true'
        return item
      }
      return item
    })
}

// 获取格式化后的Option内容
const getLabelInfo = (
  labelItem: Record<string, any>
  // | Array<string>
) => {
  // if (Array.isArray(labelItem)) {
  //   if (Array.isArray(props.labelKey)) {
  //     return labelItem
  //       .map((item: any) =>
  //         (props.labelKey as Array<string>)
  //           .map((key: string) => t(item[key]))
  //           .join(props.labelSeparator)
  //       )
  //       .join()
  //   }
  //   return labelItem
  //     .map((item: any) => t(item[props.labelKey as string]))
  //     .join()
  // }
  if (Array.isArray(props.labelKey)) {
    return props.labelKey
      .map((key) => t(labelItem[key as string]))
      .join(props.labelSeparator)
  }
  return t(labelItem[props.labelKey])
}
// 获取不可用的Options状态
const getDisabledOption = (val: string) => {
  const res = props.disabledOptions.find((item) => item === val)
  return !!res
}

// 对外暴露方法
const getOptionsList = () => {
  return optionsCom
}

//  start Emit

const handlerChange = (chagneItem: SelectValueType) => {
  const oldValue = innerValue.value

  const successCallback = () => {
    let val = chagneItem
    if (!Array.isArray(chagneItem)) {
      val = [chagneItem]
    }
    emit(
      'change',
      optionsCom.value.filter((item) => val.includes(item[props.valueKey]))
    )
    // selectRef.value && selectRef.value.blur()
  }
  const errorCallback = () => {
    console.log('errorCallback')
    innerValue.value = oldValue
  }
  const callbak = props.beforeChange(chagneItem, innerValue.value)
  if (callbak.then) {
    callbak
      .then(() => {
        successCallback()
      })
      .catch(() => {
        errorCallback()
      })
  } else if (callbak) {
    successCallback()
  } else {
    errorCallback()
  }
}
const handlerBlur = (event: FocusEvent) => {
  emit('blur', event)
}
const handlerClear = () => {
  innerValue.value = undefined
  emit('clear')
}

// onMounted(() => {})

watch(
  () => storageKeyCom,
  () => {
    getDataList()
  },
  { immediate: true }
)
defineExpose({
  getOptionsList,
})
</script>
