import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"



const routes: Array<RouteRecordRaw> = [
    {
        path: "/docs_index",
        name: "docs_index",
        component: () => import("../views/DocsIndex.vue"),  
    },
    {
        path: "/docs_pack",
        name: "docs_pack",
        component: () => import("../views/DocsPack.vue"),  
    },
    {
        path: "/docs_struct",
        name: "docs_struct",
        component: () => import("../views/DocsStruct.vue"),  
    },
    {
        path: "/debug_index",
        name: "debug_index",
        component: () => import("../views/DebugIndex.vue"), 
    },
    {
        path: "/debug_asm",
        name: "debug_asm",
        component: () => import("../views/DebugAsm.vue"), 
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
        path: "/about_info",
        name: "about_info",
        component: () => import("../views/About.vue"), 
    },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;