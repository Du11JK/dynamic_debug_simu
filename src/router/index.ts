import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"



const routes: Array<RouteRecordRaw> = [
    {
        path: "/docs_index",
        name: "docs_index",
        component: () => import("../views/docs/DocsIndex.vue"),
    },
    {
        path: "/docs_pack",
        name: "docs_pack",
        component: () => import("../views/docs/DocsPack.vue"),
    },
    {
        path: "/docs_struct",
        name: "docs_struct",
        component: () => import("../views/docs/DocsStruct.vue"),
    },
    {
        path: "/docs_win",
        name: "docs_win",
        component: () => import("../views/docs/DocsWin.vue"),
    },
    {
        path: "/debug_index",
        name: "debug_index",
        component: () => import("../views/DebugIndex.vue"), 
    },
    {
        path: "/debug_code",
        name: "debug_code",
        component: () => import("../views/DebugCode.vue"),
    },
    {
        path: "/debug_net",
        name: "debug_net",
        component: () => import("../views/DebugNet.vue"), 
    },
    {
        path: "/debug_static",
        name: "debug_static",
        component: () => import("../views/DebugStatic.vue"), 
    },
    {
        path: "/debug_mem",
        name: "debug_mem",
        component: () => import("../views/DebugMemoryMap.vue"),
    },
    {
        path: "/debug_symbols",
        name: "debug_symbols",
        component: () => import("../views/DebugSymbols.vue"),
    },
    {
        path: "/about_info",
        name: "about_info",
        component: () => import("../views/AboutInfo.vue"),
    },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;