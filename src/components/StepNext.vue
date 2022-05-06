<template>
  <n-card v-show="boolShow" size="small">
    <n-space justify="center" size="large">
      <n-button strong secondary round type="warning" size="tiny" @click="handlePrevStep">
        上一步
      </n-button>
      <div style="left: 12px; right: 12px" />
      <n-button strong secondary round type="primary" size="tiny" @click="handleNextStep">
        下一步
      </n-button>
      <div style="left: 12px; right: 12px" />
      <n-button strong secondary round type="error" size="tiny" @click="handleResetSample">
        重新加载
      </n-button>
      <div style="left: 12px; right: 12px" />
      <n-button strong secondary round type="info" size="tiny" @click="handleHelpInfo()">
        辅助信息
      </n-button>
    </n-space>
  </n-card>
  <n-drawer
    v-model:show="info_active"
    :width="400"
    :placement="placement"
  >
    <n-drawer-content title="说明文档" closable>
      <HelpInfo />
    </n-drawer-content>
  </n-drawer>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import global from '../GlobalVar.vue'
import bus from 'vue3-eventbus'
import type { DrawerPlacement } from 'naive-ui'
import HelpInfo from "./preview/HelpInfo.vue";
export default defineComponent({
  name: "StepNext",
  components: {HelpInfo},
  emits: ['step_update'],
  data() {
    return {
      boolShow: true,
      info_active: ref(false),
      placement: ref<DrawerPlacement>('right')
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
      bus.emit("step_update")
    },
    handleNextStep() {
      global.step_index += 1;
      bus.emit("step_update")
    },
    handleResetSample() {
      global.step_index = 1;
      bus.emit("step_update")

    },
    handleHelpInfo() {
      this.info_active = true;
    }
  }
});
</script>

<style scoped>

</style>