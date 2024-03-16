import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("../views/Home.vue")
    },
    {
      path: "/plugins",
      component: () => import('../views/Plugins.vue')
    }
  ]
})

export default router;