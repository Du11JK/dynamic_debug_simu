<template>
  <n-card v-show="boolShow" size="small">
    <n-space justify="center" size="large">
      <n-button strong secondary round type="warning" size="tiny" @click="handlePrevStep">
        跳转至上一断点
      </n-button>
      <div style="left: 12px; right: 12px" />
      <n-button strong secondary round type="primary" size="tiny" @click="handleNextStep">
        跳转至下一断点
      </n-button>
      <div style="left: 12px; right: 12px" />
      <n-button strong secondary round type="error" size="tiny" @click="handleResetSample">
        重新加载案例
      </n-button>
      <div style="left: 12px; right: 12px" />
      <n-button strong secondary round type="info" size="tiny" @click="handleHelpInfo()">
        案例辅助信息
      </n-button>
    </n-space>
  </n-card>
  <HelpModal ref="modalInfo" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import global from '../GlobalVar.vue'
import HelpModal from "./HelpModal.vue";
export default defineComponent({
  name: "StepNext",
  components: {HelpModal},
emits: ['step_update'],
  data() {
    return {
      boolShow: true,
    }
  },
  watch:{
    $route: {
      handler: function(val){
        this.boolShow = val.path.substring(0, 5) !== '/docs';
      },
    }
  },
  methods: {
    handlePrevStep() {
      if(global.step_index > 1) {
        global.step_index -= 1;
      }
      this.$emit("step_update")
    },
    handleNextStep() {
      global.step_index += 1;
      this.$emit("step_update")
    },
    handleResetSample() {
      global.step_index = 1;
      this.$emit("step_update")
    },
    handleHelpInfo() {
      console.info('handle');
      let modal: any = this.$refs.modalInfo
      modal.showModal = true;
    }
  }
});
</script>

<style scoped>

</style>