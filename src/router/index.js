import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/projects",
    name: "projects",
    component: () => import("../views/ProjectView.vue"),
  },
  {
    path: "/tools",
    name: "tools",
    component: () => import("../views/ToolView.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("../views/ContactView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
