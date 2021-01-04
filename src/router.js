import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
//组件模块
import Layout from '@/views/layout'

// 永远可见的路由
export const constantRouterMap = [
  {
    path: '/',
    component: Layout,
    redirect: '/main_page',
    hidden: true,
  },
  {
    path: '/404',
    component: Layout,
    redirect: '/404/index',
    children: [
      {
        component: () => import('@/views/errorPage/404'),
        path: 'index',
        hidden: true,
      },
    ],
    hidden: true,
  },
  {
    path: '/401',
    component: Layout,
    redirect: '/401/index',
    children: [
      {
        component: () => import('@/views/errorPage/401'),
        path: 'index',
        hidden: true,
      },
    ],
    hidden: true,
  },
]

// 首页模块路由
export const standardModelRouter = [
  {
    path: '/main_page',
    component: Layout,
    name: 'MainPage',
    redirect: '/main_page/index',
    meta: { title: '首页', icon: 'el-icon-menu' },
    hidden:false,
    children: [
      {
        path: 'index',
        component: () => import('@/views/mainPage'),
        name: 'StandardModelIndex',
        meta: { title: '首页' },
      },
    ],
  },
]

// 测试模块路由
export const testRouter = [
  {
    path: '/test',
    component: Layout,
    name: 'Test',
    redirect: '/test/index',
    meta: { title: '测试路由', icon: 'el-icon-data-line' },
    children: [
      {
        path: 'index',
        component: () => import('@/views/test'),
        name: 'ThemeFieldIndex',
        meta: { title: '测试路由' },
      }
    ]
  }
]

export const redirect404 = [{ path: '*', redirect: '/404', hidden: true }]

const createRouter = () =>
  new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: [
      ...constantRouterMap,
      ...standardModelRouter,
      ...testRouter
]
  })

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router