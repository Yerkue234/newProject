import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddeView from '@/views/AddeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home-list',
      component: HomeView,
    },{
      path: '/adde',
      name: 'Adde-list',
      component:AddeView
    }
  ],
})

export default router
