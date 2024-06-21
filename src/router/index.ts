import {
  createRouter,
  createWebHistory,
  type RouteRecordNormalized,
  type RouteRecordRaw
} from 'vue-router'
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/views/WelcomeView.vue')
  }
]

const router = createRouter({
  //history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHistory(),
  routes
})

export default router
