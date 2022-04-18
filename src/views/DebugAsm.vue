<template>
  <n-grid :x-gap="12" :y-gap="8" :cols="5" style="height: 90%">
    <n-grid-item span="3">
      <AsmPreview />
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
import AsmPreview from "../components/AsmPreview.vue";
import RegPreview from "../components/RegPreview.vue";
import StackPreview from "../components/StackPreview.vue";

export default {
  components: {StackPreview, RegPreview, AsmPreview}
}
</script>

<style scoped></style>