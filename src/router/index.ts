import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { RouteNames } from '@/models/RouteNames'
import { useAuthStore } from '@/stores/auth'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: RouteNames.Home,
    component: () => import('@/views/PageHome.vue'),
  },
  {
    path: '/login',
    name: RouteNames.Login,
    meta: {
      layout: 'auth',
    },
    component: () => import('@/views/PageLogin.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    document.getElementById('app')?.scrollIntoView()
  },
})

const whiteList: string[] = [RouteNames.Login]

router.beforeEach(async (to, _, next) => {
  const authStore = useAuthStore()

  if (authStore.accessToken) {
    if (to.name === RouteNames.Login) {
      next({ name: RouteNames.Home })
    } else {
      if (!authStore.me?.role?.id) {
        try {
          await authStore.getUserMe()

          next({ ...to })
        } catch (error) {
          authStore.resetToken()
          next({ name: RouteNames.Login })
        }
      } else {
        next()
      }
    }
  } else {
    // Has no token
    if (whiteList.indexOf(to.name as string) !== -1) {
      // In the free login whitelist, go directly
      next()
    } else {
      // Other pages that do not have permission to access are redirected to the login page.
      next({ name: RouteNames.Login, query: { redirect: to.path } })
    }
  }
  return
})

export default router
