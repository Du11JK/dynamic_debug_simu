<template>
  <n-card
    title="符号"
    bordered="true"
    embedded="true"
    style="height: 100%"
  >
    <n-scrollbar style="height: 100%; max-height: 700px" x-scrollable="true">
      <n-config-provider :hljs="hljs">
        <n-code
          :code="symbols_data"
          language=""
        />
      </n-config-provider>
    </n-scrollbar>
  </n-card>
</template>
s
<script>
  import hljs from 'highlight.js/lib/core'
  import axios from "axios";
  import global from '../GlobalVar.vue'
  import plaintext from 'highlight.js/lib/languages/plaintext'
  import {defineComponent} from "vue";
  hljs.registerLanguage('plaintext', plaintext)

  export default defineComponent({
    name: "SymbolsInfo",
    setup() {
      return {
        hljs,
      }
    },
    data() {
      return {
        symbols_data: String
      }
    },
    created () {
      this.symbols_data = axios.get('http://localhost:8088/symbols',
          {params:{
            sample_name: global.sample_name,
            step_index: global.step_index,
            }
          })
          .then(res => {
            this.symbols_data = res.data
          }).catch(err => {
            console.log(err);
          })
      console.info(this.symbols_data)
    }
  });
</script>

<style scoped>

</style>