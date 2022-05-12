<template>
  <n-card
    title="反编译代码"
    bordered
    embedded
    style="height: 100%"
  >
    <n-scrollbar style="height: 100%; max-height: 600px" x-scrollable="true">
      <n-config-provider :hljs="hljs">
        <n-code
          :code="decompile_data.toString()"
          language="c"
        />
      </n-config-provider>
    </n-scrollbar>
  </n-card>
</template>

<script>
import {defineComponent} from "vue";
import hljs from "highlight.js/lib/core";
import c from 'highlight.js/lib/languages/c'
import bus from "vue3-eventbus";
import axios from "axios";
import global from "../../GlobalVar.vue";
hljs.registerLanguage('c', c)

export default defineComponent({
  name: "DecompilePreview",
  components: {},
  data() {
    return {
      hljs: hljs,
      decompile_data: String
    }
  },
  created() {
    bus.on('step_update', ()=>{
      if(global.sample_type === 'dec') {
        axios.get('http://localhost:8088/decompile',
            {
              params: {
                sample_name: global.sample_name,
                step_index: global.step_index,
              }
            })
            .then(res => {
              this.decompile_data = res.data.toString();
            }).catch(err => {
          console.log(err);
        })
      }
    })

  }
});
</script>

<style scoped>

</style>