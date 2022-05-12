<template>
  <n-card
    title="内存布局"
    bordered
    embedded
    style="height: 100%"
  >
    <n-scrollbar style="height: 100%; max-height: 700px" x-scrollable="true">
      <n-data-table
        :columns="columns"
        :data="memmap_data"
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
    name: "MemMap",
    data() {
      return {
        memmap_data: [],
        columns: [
          {title: '地址', key: 'Address'},
          {title: '大小', key: 'Size'},
          {title: '页面信息', key: 'Info'},
          {title: '内容', key: 'Content'},
          {title: '页面保护', key: 'Protection'},
          {title: '初始保护', key: 'Initial'},
          {title: '类型', key: 'Type'}
        ],
      }
    },
    created () {
      if (global.sample_name !== 'test') {
        axios.get('http://localhost:8088/memmap',
            {
              params: {
                sample_name: global.sample_name,
              }
            })
            .then(res => {
              this.memmap_data = d3.csvParse(res.data);
            }).catch(err => {
          console.log(err);
        })
      }
    }
  });
</script>

<style scoped>
</style>