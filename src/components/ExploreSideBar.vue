<template>
  <div style="height: 200px; padding-left: 20px">
    <n-anchor
      ref="anchorRef"
      affix
      :trigger-top="24"
      :top="88"
      :bound="24"
      style="z-index: 1"
    >
      <n-anchor-link title="文档" href="#docs_index">
        <n-anchor-link title="PE文件结构" href="#docs_struct" />
        <n-anchor-link title="PE保护壳" href="#docs_pack" />
        <n-anchor-link title="其他说明" href="#docs_other" />
        <n-anchor-link title="调试指南" href="#docs_debug" />
      </n-anchor-link>
      <n-anchor-link title="调试" href="#debug_index">
        <n-anchor-link title="反汇编和堆栈" href="#debug_asm" />
        <n-anchor-link title="静态解析" href="#debug_static" />
        <n-anchor-link title="网络信息" href="#debug_net" />
        <n-anchor-link title="符号" href="#debug_symbols" />
      </n-anchor-link>
      <n-anchor-link title="关于" href="#other_info" />
    </n-anchor>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { AnchorInst } from 'naive-ui'

export default defineComponent({
  setup () {
    const anchorRef = ref<AnchorInst | null>(null)
    const scrollTo = (href: string) => {
      anchorRef.value?.scrollTo(href)
    }
    return {
      anchorRef,
      scrollTo
    }
  }
})
</script>