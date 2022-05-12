<template>
  <n-scrollbar style="height: 100%; max-height: 700px" x-scrollable="true">
    <n-data-table
      :columns="columns"
      :data="call_data"
      :bordered="false"
      size="small"
    />
  </n-scrollbar>
  <UpdateNote />
</template>

<script>
import bus from "vue3-eventbus";
import axios from "axios";
import global from "../../GlobalVar.vue";
import UpdateNote from "../UpdateNote.vue";
import * as d3 from "d3-dsv";
export default {
  name: "CallStackPreview",
  components: {UpdateNote},
  data() {
    return {
      call_data: [],
      columns: [
        {title: '线程ID', key: 'Thread ID'},
        {title: '地址', key: 'Address'},
        {title: '返回到', key: 'To'},
        {title: '返回自', key: 'From'},
        {title: '大小', key: 'Size'},
        {title: '注释', key: 'Comment'},
        {title: '方', key: 'Party'}
      ]

    }
  },
  created () {
    bus.on('note_update', ()=>{
      axios.get('http://localhost:8088/callstack',
          {
            params: {
              sample_name: global.sample_name,
              step_index: global.step_index
            }
          })
          .then(res => {
            this.call_data = d3.csvParse(res.data);
          }).catch(err => {
        console.log(err);
      })
    });
  }
}
</script>

<style scoped>

</style>