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
    path: '/ExampleView01-1',
    component: () => import('@/views/example01/ExampleView01-1.vue')
  },
  {
    path: '/ExampleView01-2',
    component: () => import('@/views/example01/ExampleView01-2.vue')
  },
  {
    path: '/ExampleView01-3',
    component: () => import('@/views/example01/ExampleView01-3.vue')
  },
  {
    path: '/ExampleView01-4',
    component: () => import('@/views/example01/ExampleView01-4.vue')
  },
  {
    path: '/ExampleView02-1/students/:sid/homeworks/:hid',
    component: () => import('@/views/example02/ExampleView02-1.vue')
  },
  // {
  //   path: '/ExampleView03-1',
  //   component: () => import('@/views/example03/ExampleView03-1.vue')
  // }
  {
    path: '/ExampleView04-1',
    component: () => import('@/views/example04/ExampleView04-1.vue')
  },
  {
    path: '/ExampleView04-2',
    component: () => import('@/views/example04/ExampleView04-2.vue')
  },
  {
    path: '/ExampleView04-3',
    component: () => import('@/views/example04/ExampleView04-3.vue')
  }
]

const router = createRouter({
  //history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHashHistory(),
  routes
})

export default router
