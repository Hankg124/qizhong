import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/index',
      name: 'Index',
      component: () => import('../views/index.vue'),
      redirect: '/index/dashboard',
      children: [
        {
          path: '/dashboard',
          name: 'Dashboard',
          component: () => import('../views/dashboard.vue'),
          meta:{
            title: 'Dashboard',
          }
        },
        {
          path: '/table',
          name: 'Table',
          component: () => import('../views/Table.vue'),
          meta:{
            title: 'Table',
          }
        },
        {
          path: '/tree',
          name: 'Terr',
          component: () => import('../views/Tree.vue'),
          meta:{
            title: 'Terr',
          }
        }
      ]
    },
  ]
})

export default router
