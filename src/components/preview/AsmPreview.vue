<template>
  <n-card
    title="反汇编代码"
    bordered="true"
    embedded="true"
    style="height: 100%"
  >
    <n-scrollbar style="height: 100%; max-height: 700px" x-scrollable="true">
      <n-config-provider :hljs="hljs">
        <n-code
          :code="asm_data.toString()"
          language="x86asm"
        />
      </n-config-provider>
    </n-scrollbar>
  </n-card>
  <UpdateData />
</template>

<script>
  import { defineComponent } from 'vue'
  import hljs from 'highlight.js/lib/core'
  import x86asm from 'highlight.js/lib/languages/x86asm'
  import axios from "axios";
  import global from "../../GlobalVar.vue";
  import bus from 'vue3-eventbus'
  import UpdateData from "../UpdateData.vue";
  hljs.registerLanguage('x86asm', x86asm)

  export default defineComponent({
    name: "AsmPreview",
    components: {UpdateData},
    data() {
      return {
        hljs: hljs,
        asm_data: String
      }
    },
    created() {
      bus.on('step_update', ()=>{
        axios.get('http://localhost:8088/asm',
            {params:{
                sample_name: global.sample_name,
                step_index: global.step_index,
              }
            })
            .then(res => {
              this.asm_data = ">>\n" + res.data.toString();
            }).catch(err => {
              console.log(err);
            })
      })

    }
  });
</script>

<style scoped>

</style>