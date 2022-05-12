<template>
  <n-card
    title="符号"
    bordered
    embedded
    style="height: 100%"
  >
    <n-scrollbar style="height: 100%; max-height: 700px" x-scrollable="true">
      <n-data-table
        :columns="columns"
        :data="symbols_data"
        :bordered="false"
        size="small"
      />
    </n-scrollbar>
  </n-card>
</template>
s
<script>
import {defineComponent} from "vue";
import axios from "axios";
import global from '../../GlobalVar.vue'
import * as d3 from "d3-dsv";

export default defineComponent({
  name: "SymbolsInfo",
  data() {
    return {
      columns: [
        {title: '基址', key: 'Base'},
        {title: '模块', key: 'Module'},
        {title: '方', key: 'Party'},
        {title: '路径', key: 'Path'},
        {title: '状态', key: 'Status'},
      ],
      symbols_data: []
    }
  },
  created () {
    if (global.sample_name !== 'test') {
      axios.get('http://localhost:8088/symbols',
          {
            params: {
              sample_name: global.sample_name,
            }
          })
          .then(res => {
            this.symbols_data = d3.csvParse(res.data);
          }).catch(err => {
        console.log(err);
      })
    }
  }
});
</script>

<style scoped>

</style>