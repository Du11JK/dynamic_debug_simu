<template>
  <n-card
    title="调用堆栈"
    bordered="true"
    embedded="true"
    style="height: 100%"
  >
    <n-scrollbar style="height: 100%; max-height: 280px" x-scrollable="true">
      <n-config-provider :hljs="hljs">
        <n-code
          :code="stack_data.toString()"
          language="json"
        />
      </n-config-provider>
    </n-scrollbar>
  </n-card>
</template>

<script>
import hljs from "highlight.js/lib/core";
import json from 'highlight.js/lib/languages/json'
import bus from "vue3-eventbus";
import axios from "axios";
import global from "../../GlobalVar.vue";
hljs.registerLanguage('json', json)

export default {
  name: "StackPreview",
  data() {
    return {
      hljs: hljs,
      stack_data: String
    }
  },
  created() {
    bus.on('step_update', ()=>{
      this.stack_data = axios.get('http://localhost:8088/stack',
          {params:{
              sample_name: global.sample_name,
              step_index: global.step_index,
            }
          })
          .then(res => {
            this.stack_data = res.data.toString()
          }).catch(err => {
            console.log(err);
          })
    })

  }
}
</script>

<style scoped>

</style>