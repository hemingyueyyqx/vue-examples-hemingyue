import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
  type RouteRecordRaw
} from 'vue-router'
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/views/WelcomeView.vue')
  },
  {
    path: '/example01',
    component: () => import('@/views/example01/ExampleView01-1.vue')
  }
]

const router = createRouter({
  //history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHashHistory(),
  routes
})

export default router
