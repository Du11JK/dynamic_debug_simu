<template>
  <div />
</template>

<script>
import bus from "vue3-eventbus";

export default {
  name: "UpdateNote",
  mounted() {
    bus.emit("note_update");
  }
}
</script>

<style scoped>

</style>