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
    <n-card title="案例介绍" style="padding: 24px">
      <p>TODO</p>
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
      global.step_index=1;
      bus.emit("step_update");
      this.$router.replace('/debug_code')
    }
  }
});
</script>

<style scoped></style>
