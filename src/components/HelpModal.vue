<template>
  <n-modal v-model:show="showModal">
    <n-card
      style="width: 600px"
      title="模态框"
      :bordered="false"
      size="huge"
      role="dialog"
      aria-modal="true"
    >
      <template #header-extra>
        test
      </template>
      test
      <template #footer>
        test
      </template>
    </n-card>
  </n-modal>
</template>

<script>
export default {
  name: "HelpModal",
  data() {
    return{
      showModal: false
    }
  }
}
</script>

<style scoped>

</style>