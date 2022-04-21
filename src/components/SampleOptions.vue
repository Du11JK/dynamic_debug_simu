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
          label: "Everybody's Got Something to Hide Except Me and My Monkey",
          value: 'song0',
          disabled: true
        },
        {
          label: 'Drive My Car',
          value: 'song1'
        },
        {
          label: 'Norwegian Wood',
          value: 'song2'
        },

      ]
    }
  }
}
</script>

<style scoped>

</style>