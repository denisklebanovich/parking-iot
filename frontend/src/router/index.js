import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import { isAdmin, isUser } from './routeGuards'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/user/parking',
      name: 'parking',
      component: () => import('../views/UserParkingPage.vue'),
      beforeEnter: isUser
    },
    {
      path: '/user/history',
      name: 'history',
      component: () => import('../views/UserHistoryPage.vue'),
      beforeEnter: isUser
    },
    {
      path: '/admin/parking',
      name: 'adminParking',
      component: () => import('../views/AdminParkingPage.vue'),
      beforeEnter: isAdmin
    },
    {
      path: '/admin/add',
      name: 'adminAdd',
      component: () => import('../views/AdminAddUserPage.vue'),
      beforeEnter: isAdmin
    },
    {
      path: '/admin/statistics',
      name: 'adminStatistics',
      component: () => import('../views/AdminStatisticsPage.vue'),
      beforeEnter: isAdmin
    }
  ]
})

export default router
