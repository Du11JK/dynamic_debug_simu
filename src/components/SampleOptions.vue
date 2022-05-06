<template>
  <n-layout>
    <n-card title="案例选项" style="padding: 12px">
      <n-select
        v-model:value="value"
        size="large"
        placeholder="案例选择"
        remote
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
import { ref, defineComponent } from 'vue'
import bus from "vue3-eventbus";
//import axios from "axios";
import global from "../GlobalVar.vue";
//import { SelectOption } from 'naive-ui'
export default defineComponent ({
  name: "SampleOptions",
  data() {
    return {
      value: ref(""),
      sample_options: [
        {label:"简单样本", value:"simple"},
        {label:"简单加密壳", value:"simple_crypt"},
        {label:"UPX脱壳", value:"upx"},
        {label:"010Editor逆向", value:"010editor"}
      ],
    }
  },
  /*created() {
    this.sample_options = axios.get('http://localhost:8088/options',
        {})
        .then(res => {
          let temp = Array.from(res.data.option_data);
          console.info(temp);
          for(let i=0; i<temp.length; i++){
            this.sample_options[i].label = temp[i].key;
            this.sample_options[i].value = temp[i].value;
          }
        }).catch(err => {
          console.log(err);
        })
  },*/
  methods: {
    load_sample() {
      global.sample_name=this.value;
      global.step_index=1;
      bus.emit("step_update");
      this.$router.replace('/debug_code')
    }
  }
});
</script>

<style scoped></style>
