<template>
  <div>
    <el-dropdown @command="handlerCommand">
      <el-button link type="primary"
        >{{ title }} <el-icon class="el-icon--right"> <arrow-down /> </el-icon
      ></el-button>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item
            v-if="downloadTemplateUrl"
            command="downloadTemplate"
            >{{ t('common.downloadTemplate') }}</el-dropdown-item
          >
          <el-dropdown-item v-if="importUrl" command="import">{{
            t('common.import')
          }}</el-dropdown-item>
          <slot />
        </el-dropdown-menu>
      </template>
    </el-dropdown>
    <bf-shadow-uploader
      v-if="importUrl"
      ref="uploader"
      :action="importUrl"
      :data="importUrlParams"
      :name="importFileName"
      @success="uploadSuccess"
      @error="uploadError"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { http } from '@setaria/setaria-ts'
import { ArrowDown } from '@element-plus/icons-vue'
import { importDropdownEmits, importDropdownProps } from './propsAndEmit'
defineOptions({
  name: 'BfImportDropdown',
  inheritAttrs: false,
})

const { t } = useI18n()
const props = defineProps({ ...importDropdownProps })
const emit = defineEmits(importDropdownEmits)

const uploader = ref()

const handlerCommand = (key: string) => {
  if (key === 'downloadTemplate') {
    downloadTemplate()
  } else if (key === 'import') {
    triggerImport()
  } else {
    emit('command', key)
  }
}
const triggerImport = () => {
  const afterExec = () => {
    uploader.value.trigger()
  }

  if (typeof props.beforeImport === 'function') {
    const res = props.beforeImport()
    if (res.then) {
      res
        .then(() => {
          afterExec()
        })
        .finally(() => {
          !1
        })
    } else if (res) {
      afterExec()
    }
  } else {
    afterExec()
  }
}

const downloadTemplate = () => {
  return http.base({
    method: props.downloadTemplateMethod,
    url: props.downloadTemplateUrl,
    data: props.downloadTemplateParams,
    responseType: 'arraybuffer',
  })
}

const uploadSuccess = (res: any) => {
  emit('import-success', res)
}

const uploadError = (res: any) => {
  emit('import-error', res)
}
// const emit = defineEmits(remoteSelectEmits)

// defineExpose({
//   getOptionsList,
// })
</script>
