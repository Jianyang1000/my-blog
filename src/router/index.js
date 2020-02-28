import Vue from 'vue'
import VueRouter from 'vue-router'
import List from '../components/List'
import Detail from '../components/Detail'
import Layout from '../layout'
import DashBoard from '../views/dashboard'

Vue.use(VueRouter)



export const currencyRoutes = [
  {
    path: '/list',
    name: 'List',
    component: List,
    hidden: true
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login'),
    hidden: true
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/error-page/404.vue'),
    hidden: true
  },
  {
    path: '/',
    name: 'Home',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('@/views/dashboard'),
        meta: { title: '首页', icon: 'el-icon-s-data' }
      }
    ]
  },
  {
    path: '/personal',
    name: 'Personal',
    component: Layout,
    redirect: '/personal/index',
    children: [
      {
        path: 'index',
        name: 'Personal-index',
        component: () => import('@/views/personal'),
        meta: { title: '个人中心' },
        hidden: true
      }
    ]
  },
  {
    path: '/driver',
    name: 'Driver',
    component: Layout,
    redirect: '/driver/index',
    children: [
      {
        path: 'index',
        name: 'Driver-index',
        component: () => import('@/views/driver-page'),
        meta: { title: '引导指南', icon: 'el-icon-s-flag' }
      }
    ]
  },
  {
    path: '/article',
    name: 'Article',
    component: Layout,
    redirect: '/article/add',
    meta: {title: '文章', icon: 'el-icon-tickets'},
    children: [
      {
        path: 'add',
        name: 'Add article',
        component: () => import('@/views/article/add-article'),
        meta: { title: '写文章', icon: 'el-icon-edit' },
      },
      {
        path: 'manage',
        name: 'Manage article',
        component: () => import('@/views/article/manage-article'),
        meta: { title: '文章管理', icon: 'el-icon-s-management' },
      },
      {
        path: 'delete',
        name: 'Delete article',
        component: () => import('@/views/article/delete-article'),
        meta: { title: '回收站', icon: 'el-icon-delete' },
      }
    ]
  },
  {
    path: '/tag',
    name: 'Tag',
    component: Layout,
    redirect: '/tag/index',
    children: [
      {
        path: 'index',
        name: 'Manage Tag',
        component: () => import('@/views/tag'),
        meta: { title: '分类/标签', icon: 'el-icon-collection-tag' }
      }
    ]
  },
  {
    path: '/comment',
    name: 'Comment',
    component: Layout,
    redirect: '/comment/index',
    children: [
      {
        path: 'index',
        name: 'Manage Comment',
        component: () => import('@/views/comment'),
        meta: { title: '评论', icon: 'el-icon-chat-line-round' }
      }
    ]
  },
  {
    path: '/user',
    name: 'User',
    component: Layout,
    redirect: '/user/index',
    children: [
      {
        path: 'index',
        name: 'Manage User',
        component: () => import('@/views/user'),
        meta: { title: '用户', icon: 'el-icon-user' }
      }
    ]
  }
]

const creatRouter = () => {
  return new VueRouter({
    routes: currencyRoutes,
    scrollBehavior() {
      return { x: 0, y: 0 }
    }
  })
}

export function resetRouter() {
  const reset = creatRouter()
  router.matcher = reset.matcher
}


const router = new VueRouter({
  routes:currencyRoutes
})

export default router
