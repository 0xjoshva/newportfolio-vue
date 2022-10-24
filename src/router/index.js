import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: "/",
    name: "HomeView",
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/about",
    name: "AboutView",
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/projects",
    name: "ProjectsView",
    component: () => import("../views/ProjectView.vue"),
  },
  {
    path: "/tools",
    name: "ToolsView",
    component: () => import("../views/ToolView.vue"),
  },
  {
    path: "/contact",
    name: "ContactView",
    component: () => import("../views/ContactView.vue"),
  },
  {
    path: "/blog",
    name: "BlogView",
    component: () => import("../views/BlogsView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
