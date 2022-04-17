<template>
  <VueComponent />
</template>
<script lang="ts">
import { ref } from 'vue';
import { attributes, html, toc, VueComponent, VueComponentWith } from '../assets/test.md'

const markdownhtml = ref(html);

import MenuSideBar from "../components/MenuSideBar.vue";
export default {
  components: {
    MenuSideBar,
    VueComponent
  },
}
</script>

<style scoped></style>
