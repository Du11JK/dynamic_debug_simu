<template>
  <n-card
    title="网络监控"
    bordered="true"
    embedded="true"
    style="height: 100%"
  >
    <n-scrollbar style="height: 100%; max-height: 700px" x-scrollable="true">
      <n-data-table
        :columns="columns"
        :data="net_data"
        :bordered="false"
        size="small"
      />
    </n-scrollbar>
  </n-card>
</template>

<script>
import {defineComponent} from "vue";
import axios from "axios";
import global from "../../GlobalVar.vue";
import * as d3 from "d3-dsv";

export default defineComponent({
  name: "NetPreview",
  data() {
    return {
      net_data: [],
      columns: [
        {title: '进程名', key: 'Process'},
        {title: '进程ID', key: 'Id'},
        {title: '模块', key: 'Module'},
        {title: '协议', key: 'Protocol'},
        {title: '本地地址', key: 'Local'},
        {title: '远程地址', key: 'Remote'},
        {title: '状态', key: 'State'}
      ],
    }
  },
  created() {
    if (global.sample_name !== 'test') {
      axios.get('http://localhost:8088/network',
          {
            params: {
              sample_name: global.sample_name,
            }
          })
          .then(res => {
            this.net_data = d3.csvParse(res.data);
          }).catch(err => {
        console.log(err);
      })
    }

  }
});
</script>

<style scoped>

</style>