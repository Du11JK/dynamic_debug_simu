<template>
  <n-card
    title="memmap"
    bordered="true"
    embedded="true"
    style="height: 100%"
  >
    <n-scrollbar style="height: 100%; max-height: 700px" x-scrollable="true">
      <n-config-provider :hljs="hljs">
        <n-code
          :code="memmap_data.toString()"
          language="plaintext"
        />
      </n-config-provider>
    </n-scrollbar>
  </n-card>
</template>

<script>
  import {defineComponent} from "vue";
  import hljs from 'highlight.js/lib/core'
  import plaintext from 'highlight.js/lib/languages/plaintext'
  import axios from "axios";
  import global from "../../GlobalVar.vue";
  hljs.registerLanguage('plaintext', plaintext)
  export default defineComponent({
    name: "MemMap",
    data() {
      return {
        hljs: hljs,
        memmap_data: String
      }
    },
    created () {
      this.memmap_data = axios.get('http://localhost:8088/memmap',
          {params:{
              sample_name: global.sample_name,
              step_index: global.step_index,
            }
          })
          .then(res => {
            this.memmap_data = res.data
          }).catch(err => {
            console.log(err);
          })
    }
  });
</script>

<style scoped>

</style>