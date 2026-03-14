import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '@/stores/user'

const HomeView = () => import('@/views/HomeView.vue')
const RegisterView = () => import('@/views/RegisterView.vue')
const ProfileView = () => import('@/views/ProfileView.vue')
const ProjectView = () => import('@/views/ProjectView.vue')
const FaqView = () => import('@/views/FaqView.vue')
const NotFoundView = () => import('@/views/NotFoundView.vue')

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfileView,
    beforeEnter: (to, from, next) => {
      const userStore = useUserStore()
      if (!userStore.isRegistered) {
        next({ name: 'register' })
      } else {
        next()
      }
    }
  },
  {
    path: '/project/:id?',
    name: 'project',
    component: ProjectView,
    beforeEnter: (to, from, next) => {
      const userStore = useUserStore()
      if (!userStore.isRegistered) {
        next({ name: 'register' })
      } else {
        next()
      }
    }
  },
  {
    path: '/faq',
    name: 'faq',
    component: FaqView
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: NotFoundView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router