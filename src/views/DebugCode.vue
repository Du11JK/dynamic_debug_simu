<template>
  <component :is="type_code_preview" />
  <UpdateData />
</template>

<script>
import AsmDebugSet from "../components/preview/AsmDebugSet.vue"
import DecompilePreview from "../components/preview/DecompilePreview.vue";
import global from "../GlobalVar.vue";
import UpdateData from "../components/UpdateData.vue";
export default {
  name: "DebugCode",
  components: {UpdateData, AsmDebugSet, DecompilePreview},
  computed: {
    // eslint-disable-next-line vue/return-in-computed-property
    type_code_preview:function (){
      if(global.sample_type === 'asm'){
        return "AsmDebugSet";
      }
      else if(global.sample_type === 'dec'){
        return "DecompilePreview";
      }
      else {
        return ""
      }
    }
  }
}
</script>

<style scoped>

</style>