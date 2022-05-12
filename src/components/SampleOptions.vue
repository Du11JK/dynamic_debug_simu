<template>
  <n-layout>
    <n-card title="案例选项" style="padding: 12px">
      <n-select
        v-model:value="sample_value"
        size="large"
        placeholder="案例选择"
        remote="true"
        :options="sample_options"
      />
      <div style="margin-top: 24px" />
      <n-space justify="end">
        <n-button type="primary" ghost @click="load_sample">
          确认加载
        </n-button>
      </n-space>
    </n-card>
    <div style="margin-top: 24px" />
    <n-card title="说明" style="padding: 24px">
      <p>选择案例并点击“确认加载”按钮，站点将自动跳转至导航子目录中的“代码”页面</p>
      <p>案例加载完成后，请勿手动刷新页面，否则需要重新返回该页面进行案例加载</p>
      <p>* 加载案例前调试页面没有任何内容</p>
      <p>* 首次使用该系统请先阅读文档</p>
    </n-card>
  </n-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import bus from "vue3-eventbus";
import axios from "axios";
import global from "../GlobalVar.vue";
export default defineComponent ({
  name: "SampleOptions",
  data() {
    return {
      sample_value: "",
      sample_options: []
    }
  },
  created() {
    axios.get('http://localhost:8088/options',
        {})
        .then(res => {
          this.sample_options = res.data.map(function (item: { [s: string]: unknown; } | ArrayLike<unknown>) {
            return {label: Object.keys(item)[0], value: Object.values(item)[0]};
          });
        }).catch(err => {
          console.log(err);
        })
  },
  methods: {
    load_sample() {
      global.sample_name=this.sample_value;
      axios.get('http://localhost:8088/info',
          {
            params:{
              sample_name: global.sample_name,
            }
          })
          .then(res => {
            global.sample_type = res.data.debug_type;
            bus.emit("step_update");
            this.$router.replace('/debug_code')
          }).catch(err => {
        console.log(err);
      })
    }
  }
});
</script>

<style scoped></style>
