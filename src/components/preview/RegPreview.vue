<template>
  <n-card
    title="寄存器信息"
    bordered="true"
    embedded="true"
    style="height: 100%"
  >
    <n-scrollbar style="height: 100%; max-height: 280px" x-scrollable="true">
      <n-config-provider :hljs="hljs">
        <n-code
          :code="reg_data.toString()"
          language="json"
        />
      </n-config-provider>
    </n-scrollbar>
  </n-card>
</template>

<script>
import hljs from 'highlight.js/lib/core'
import json from 'highlight.js/lib/languages/json'
import axios from "axios";
import global from "../../GlobalVar.vue";
import bus from 'vue3-eventbus'
hljs.registerLanguage('json', json)

export default {
  name: "RegPreview",
  data() {
    return {
      hljs: hljs,
      reg_data: String
    }
  },
  created() {
    bus.on('step_update', ()=>{
      if(global.sample_type === 'asm') {
        this.reg_data = axios.get('http://localhost:8088/reg',
            {
              params: {
                sample_name: global.sample_name,
                step_index: global.step_index,
              }
            })
            .then(res => {
              this.reg_data = res.data.toString()
            }).catch(err => {
              console.log(err);
            })
      }
    })

  }
}
</script>

<style scoped>

</style>