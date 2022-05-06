<template>
  <div />
</template>

<script>
import bus from "vue3-eventbus";
export default {
  name: "UpdateData",
  mounted() {
    bus.emit("step_update");
  }
}
</script>

<style scoped>

</style>