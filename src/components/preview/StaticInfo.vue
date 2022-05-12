<template>
  <n-card
    title="PE文件静态解析"
    bordered="true"
    embedded="true"
    style="height: 100%"
  >
    <n-data-table
      :columns="columns"
      :data="static_data"
      :bordered="false"
      size="small"
    />
  </n-card>
</template>

<script>

import axios from "axios";
import global from "../../GlobalVar.vue";

export default {
  name: "StaticInfo",
  data () {
    return {
      static_data: [],
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
    }
  },
  created() {
    if (global.sample_name !== 'test') {
      axios.get('http://localhost:8088/static',
          {
            params: {
              sample_name: global.sample_name,
            }
          })
          .then(res => {
            this.static_data = res.data.map(function (item) {
              return {cols: Object.keys(item)[0], data: Object.values(item)[0]};
            });
          }).catch(err => {
        console.log(err);
      })
    }
  }
}
</script>

<style scoped>

</style>