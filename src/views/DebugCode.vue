<template>
  <n-grid :x-gap="12" :y-gap="8" :cols="5" style="height: 100%">
    <n-grid-item span="3">
      <component :is="type_code_preview" />
    </n-grid-item>
    <n-grid-item span="2">
      <n-grid :x-gap="6" :y-gap="8" :cols="1" style="height: 100%">
        <n-grid-item>
          <RegPreview />
        </n-grid-item>
        <n-grid-item>
          <StackPreview />
        </n-grid-item>
      </n-grid>
    </n-grid-item>
  </n-grid>
</template>

<script lang="ts">
import AsmPreview from "../components/preview/AsmPreview.vue";
import RegPreview from "../components/preview/RegPreview.vue";
import StackPreview from "../components/preview/StackPreview.vue";
import DecompilePreview from "../components/preview/DecompilePreview.vue";
import global from "../GlobalVar.vue";

export default {
  components: {DecompilePreview, StackPreview, RegPreview, AsmPreview},
  computed: {
    type_code_preview:function (){
      if(global.sample_type == 'asm'){
        return "AsmPreview";
      }
      else{
        return "DecompilePreview";
      }
    }
  }
}
</script>

<style scoped></style>