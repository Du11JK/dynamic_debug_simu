<template>
  <n-menu
    :options="menuOptions"
    :default-expanded-keys="defaultExpandedKeys"
    @update:expanded-keys="handleUpdateExpandedKeys"
  />
</template>

<script lang="ts">
import { defineComponent, h, Component } from "vue";
import { NIcon } from "naive-ui";
import type { MenuOption } from "naive-ui";
import { RouterLink } from "vue-router";
import {
  DocumentsOutline as DocsIndexIcon,
  DocumentTextOutline as DocsIcon,
  CodeWorkingOutline as DebugIndexIcon,
  CodeSlashOutline as DebugAsmIcon,
  SwapVerticalOutline as DebugNetIcon,
  ScanOutline as DebugStaticIcon,
  FileTrayOutline as DebugMemIcon,
  InformationOutline as AboutInfoIcon,
  ReaderOutline as DebugSymbolsIcon
} from "@vicons/ionicons5";

function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) });
}

const menuOptions: MenuOption[] = [
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            path: "/docs_index",
          },
        },
        { default: () => "文档" }
      ),
    key: "docs_index",
    icon: renderIcon(DocsIndexIcon),
    children: [
      {
        label: () =>
          h(
            RouterLink,
            {
              to: {
                path: "/docs_struct",
              },
            },
            { default: () => "PE文件结构" }
          ),
        key: "docs_struct",
        icon: renderIcon(DocsIcon),
      },
      {
        label: () =>
          h(
            RouterLink,
            {
              to: {
                path: "/docs_pack",
              },
            },
            { default: () => "PE保护壳" }
          ),
        key: "docs_pack",
        icon: renderIcon(DocsIcon),
      },
    ],
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            path: "/debug_index",
          },
        },
        { default: () => "调试" }
      ),
    key: "debug_index",
    icon: renderIcon(DebugIndexIcon),
    children: [
      {
        label: () =>
          h(
            RouterLink,
            {
              to: {
                path: "/debug_asm",
              },
            },
            { default: () => "反汇编和堆栈" }
          ),
        key: "debug_asm",
        icon: renderIcon(DebugAsmIcon),
      },
      {
        label: () =>
          h(
            RouterLink,
            {
              to: {
                path: "/debug_net",
              },
            },
            { default: () => "网络监控" }
          ),
        key: "debug_net",
        icon: renderIcon(DebugNetIcon),
      },
      {
        label: () =>
          h(
            RouterLink,
            {
              to: {
                path: "/debug_static",
              },
            },
            { default: () => "静态解析" }
          ),
        key: "debug_static",
        icon: renderIcon(DebugStaticIcon),
      },
      {
        label: () =>
            h(
                RouterLink,
                {
                  to: {
                    path: "/debug_mem",
                  },
                },
                { default: () => "内存布局" }
            ),
        key: "debug_mem",
        icon: renderIcon(DebugMemIcon),
      },
      {
        label: () =>
            h(
                RouterLink,
                {
                  to: {
                    path: "/debug_symbols",
                  },
                },
                { default: () => "符号" }
            ),
        key: "debug_symbols",
        icon: renderIcon(DebugSymbolsIcon),
      },
    ],
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            path: "/about_info",
          },
        },
        { default: () => "关于" }
      ),
    key: "about_info",
    icon: renderIcon(AboutInfoIcon),
  },
];

export default defineComponent({
  setup() {
    return {
      menuOptions,
    };
  },
});
</script>
