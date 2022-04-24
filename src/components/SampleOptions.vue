<template>
  <n-layout>
    <n-card title="案例选项" style="padding: 12px">
      <n-select v-model:value="value" size="large" :options="options" />
      <div style="margin-top:24px;" />
      <n-space justify="end">
        <n-button type="primary" ghost>
          确认加载
        </n-button>
      </n-space>
    </n-card>
    <div style="margin-top:24px;" />
    <n-card title="案例介绍" style="padding: 24px">
      <p>TODO</p>
    </n-card>
  </n-layout>
</template>

<script>
import { ref } from 'vue'
export default {
  name: "SampleOptions",
  setup () {
    return {
      value: ref(null),
      options: [
        {
          label: "入门案例",
          value: 'sample1',
          disabled: false
        },
        {
          label: '简单PE壳',
          value: 'sample2'
        },
        {
          label: 'UPX',
          value: 'sample3'
        },
        {
          label: 'ASProtect',
          value: 'sample4'
        },
        {
          label: '反虚拟机技术示范',
          value: 'sample5'
        },
        {
          label: '反调试技术示范',
          value: 'sample6'
        },
        {
          label: '彩虹猫',
          value: 'sample7'
        },
        {
          label: '熊猫烧香',
          value: 'sample8'
        },
        {
          label: 'WannaCry',
          value: 'sample9'
        },
        {
          label: '最新蠕虫样本',
          value: 'sample10'
        },

      ]
    }
  }
}
</script>

<style scoped>

</style>