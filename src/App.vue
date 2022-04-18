<template>
  <n-layout style="height: 100%">
    <n-layout-header style="height: 48px; padding: 12px" bordered>
      TEST
    </n-layout-header>
    <n-layout position="absolute" style="top: 64px; bottom: 64px; right: 64px" has-sider>
      <n-layout-sider
        show-trigger="bar"
        :collapsed-width="80"
        :width="240"
        content-style="padding: 12px;"
        :native-scrollbar="false"
        bordered
      >
        <MenuSideBar />
      </n-layout-sider>
      <n-layout content-style="padding: 24px;">
        <router-view />
      </n-layout>
    </n-layout>
  </n-layout>
</template>

<script lang="ts" setup>
import MenuSideBar from "./components/MenuSideBar.vue";
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}
html, body, #app {
  height: 100%;
}
</style>