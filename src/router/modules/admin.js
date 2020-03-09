import Layout from "@/layout/index";
import DashBoard from "@/views/admin/dashboard/index";

export default [
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/admin/login'),
        hidden: true
    },
    {
        path: '/404',
        name: '404',
        component: () => import('@/views/admin/error-page/404.vue'),
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
                component: DashBoard,
                meta: {title: '首页', icon: 'el-icon-s-data'}
            }
        ]
    },
    {
        path: '/personal',
        name: 'Personal',
        component: Layout,
        redirect: '/personal/home',
        children: [
            {
                path: 'home',
                name: 'Personal-home',
                component: () => import('@/views/admin/personal'),
                meta: {title: '个人中心'},
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
                name: 'Driver-home',
                component: () => import('@/views/admin/driver-page'),
                meta: {title: '引导指南', icon: 'el-icon-s-flag'}
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
                component: () => import('@/views/admin/article/add-article'),
                meta: {title: '写文章', icon: 'el-icon-edit'},
            },
            {
                path: 'manage',
                name: 'Manage article',
                component: () => import('@/views/admin/article/manage-article'),
                meta: {title: '文章管理', icon: 'el-icon-s-management'},
            },
            {
                path: 'delete',
                name: 'Delete article',
                component: () => import('@/views/admin/article/delete-article'),
                meta: {title: '回收站', icon: 'el-icon-delete'},
            },
        ]
    },
    {
        path: '/article_detail',
        name: 'article_detail',
        component: Layout,
        redirect: '/article_detail/index',
        children: [
            {
                path: 'index',
                name: '',
                component: () => import('@/views/admin/article/detail-article'),
                meta: {title: '文章详情'},
                hidden: true
            }
        ]
    },
    {
        path: '/tag',
        name: 'Tag',
        component: Layout,
        redirect: '/tag/home',
        children: [
            {
                path: 'index',
                name: 'Manage Tag',
                component: () => import('@/views/admin/tag'),
                meta: {title: '分类/标签', icon: 'el-icon-collection-tag'}
            }
        ]
    },
    {
        path: '/comment',
        name: 'Comment',
        component: Layout,
        redirect: '/comment/home',
        children: [
            {
                path: 'index',
                name: 'Manage Comment',
                component: () => import('@/views/admin/comment'),
                meta: {title: '评论', icon: 'el-icon-chat-line-round'}
            }
        ]
    },
    {
        path: '/user',
        name: 'User',
        component: Layout,
        redirect: '/user/home',
        children: [
            {
                path: 'index',
                name: 'Manage User',
                component: () => import('@/views/admin/user'),
                meta: {title: '用户', icon: 'el-icon-user'}
            }
        ]
    }
]