import { createRouter, createWebHistory } from 'vue-router'
import '@fontsource/roboto'

const ChallengeOne = defineAsyncComponent(() => import('@/views/ChallengeOne.vue'))
const HomePage = defineAsyncComponent(() => import('@/views/HomePage.vue'))
const DetailProduct = defineAsyncComponent(() => import('@/views/DetailProduct.vue'))
import { defineAsyncComponent } from 'vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/challenge-one',
      name: 'challenge-one',
      component: ChallengeOne
    },
    {
      path: '/challenge-one/:url',
      name: 'detail',
      component: DetailProduct
    }
  ]
})

export default router
