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
      <n-button strong secondary round type="info" size="tiny" @click="handleHelpInfo">
        辅助信息
      </n-button>
      <div style="left: 12px; right: 12px" />
      <n-button strong secondary round size="tiny" @click="handleCallStack">
        函数调用栈
      </n-button>
    </n-space>
  </n-card>
  <n-drawer
    v-model:show="info_active1"
    :height="200"
    :placement="placement1"
  >
    <n-drawer-content title="说明文档" closable>
      <HelpInfo />
    </n-drawer-content>
  </n-drawer>
  <n-drawer
    v-model:show="info_active2"
    :height="500"
    :placement="placement2"
  >
    <n-drawer-content title="函数调用栈" closable>
      <CallStackPreview />
    </n-drawer-content>
  </n-drawer>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import global from '../GlobalVar.vue'
import bus from 'vue3-eventbus'
import type { DrawerPlacement } from 'naive-ui'
import HelpInfo from "./preview/HelpInfo.vue";
import CallStackPreview from "./preview/CallStackPreview.vue";
export default defineComponent({
  name: "StepNext",
  components: {CallStackPreview, HelpInfo},
  emits: ['step_update'],
  data() {
    return {
      boolShow: true,
      info_active1: ref(false),
      placement1: ref<DrawerPlacement>('top'),
      info_active2: ref(false),
      placement2: ref<DrawerPlacement>('bottom')
    }
  },
  watch:{
    $route: {
      handler: function(val){
        this.boolShow = val.path.substring(0, 6) === '/debug' && val.path !== '/debug_index';
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
      this.info_active1 = true;
    },
    handleCallStack() {
      this.info_active2 = true;
    }
  }
});
</script>

<style scoped>

</style>