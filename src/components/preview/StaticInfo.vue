<template>
  <n-card
    title="PE文件静态解析"
    bordered="true"
    embedded="true"
    style="height: 100%"
  >
    <n-data-table
      :columns="columns"
      :data="data"
      :pagination="pagination"
      :bordered="false"
    />
  </n-card>
</template>

<script lang="ts">
import { h, defineComponent } from 'vue'
import { NButton, useMessage, DataTableColumns } from 'naive-ui'

const data = [
  { cols: '脱壳信息', data: '000014E0'},
  { cols: '入口点（虚拟地址）', data: '000014E0'},
  { cols: '入口点（实际地址）', data: '000014E0'},
  { cols: '映像基址', data: '000014E0'},
  { cols: '映像大小', data: '000014E0'},
  { cols: '区段对齐', data: '000014E0'},
  { cols: '文件对齐', data: '000014E0'},
  { cols: '区段数目', data: '000014E0'},
  { cols: '文件头大小', data: '000014E0'},
  { cols: '机器类型', data: 'AMD 64'},
  { cols: '子系统', data: 'WINDOWS CUI'},
]

export default {
  name: "StaticInfo",
  setup () {
    return {
      data,
      columns: [
        {
          title: '字段',
          key: 'cols'
        },
        {
          title: '内容',
          key: 'data',
        },
      ],
      pagination: false as const
    }
  }
}
</script>

<style scoped>

</style>