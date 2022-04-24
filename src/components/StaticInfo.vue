<template>
  <n-card
    title="REG"
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
  { no: 3, title: 'Wonderwall', length: '4:18' },
  { no: 4, title: "Don't Look Back in Anger", length: '4:48' },
  { no: 12, title: 'Champagne Supernova', length: '7:27' }
]

export default {
  name: "StaticInfo",
  setup () {
    return {
      data,
      columns: [
        {
          title: 'No',
          key: 'no'
        },
        {
          title: 'Title',
          key: 'title',
        },
        {
          title: 'Length',
          key: 'length'
        }
      ],
      pagination: false as const
    }
  }
}
</script>

<style scoped>

</style>