import { createRouter, createWebHistory } from 'vue-router'
import App from '../App.vue';

import Home from '../views/Home.vue';
import Plugins from '../views/Plugins.vue';

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