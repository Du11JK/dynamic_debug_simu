<template>
  <n-scrollbar style="height: 100%; max-height: 700px" x-scrollable="true">
    <n-config-provider :hljs="hljs">
      <n-code
        :code="notes_data.toString()"
        language="plaintext"
      />
    </n-config-provider>
  </n-scrollbar>
  <UpdateNote />
</template>

<script>
import bus from "vue3-eventbus";
import axios from "axios";
import global from "../../GlobalVar.vue";
import hljs from "highlight.js/lib/core";
import plaintext from "highlight.js/lib/languages/plaintext";
import UpdateNote from "../UpdateNote.vue";
hljs.registerLanguage('plaintext', plaintext)
export default {
  name: "HelpInfo",
  components: {UpdateNote},
  data() {
    return {
      hljs: hljs,
      notes_data: String,
    }
  },
  created() {
    bus.on('note_update', ()=>{
      axios.get('http://localhost:8088/notes',
          {params:{
              sample_name: global.sample_name,
              step_index: global.step_index,
            }
          })
          .then(res => {
            this.notes_data = res.data.toString();
          }).catch(err => {
        console.log(err);
      })
    });
  }
}
</script>

<style scoped>

</style>