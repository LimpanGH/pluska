import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/HomeView.vue'),
    },

    {
      path: '/pluskan',
      name: 'Pluskan',
      component: () => import('../views/PluskanView.vue'),
    },
  ],
})

export default router
