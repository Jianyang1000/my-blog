import BlogLayout from '@/views/blog/layout'
import BlogHome from '@/views/blog/home'
import BlogTag from '@/views/blog/tag'
import BlogAbout from '@/views/blog/about'
import BlogArchives from '@/views/blog/archives'
import BlogArticle from '@/views/blog/article'


export default [
    {
        path: '/blog',
        name: 'BlogHome',
        component: BlogLayout,
        redirect: '/blog/home',
        children: [
            {
                path: 'home',
                name: 'Blog-Home',
                component: BlogHome
            }
        ]
    },
    {
        path: '/blog/tag',
        name:'BlogTag',
        component: BlogLayout,
        redirect: '/blog/tag/index',
        children: [
            {
                path: 'index',
                name: 'Blog-Tag',
                component: BlogTag
            }
        ]
    },
    {
        path: '/blog/about',
        name:'BlogAbout',
        component: BlogLayout,
        redirect: '/blog/about/index',
        children: [
            {
                path: 'index',
                name: 'Blog-About',
                component: BlogAbout
            }
        ]
    },
    {
        path: '/blog/archives',
        name:'BlogArchives',
        component: BlogLayout,
        redirect: '/blog/archives/index',
        children: [
            {
                path: 'index',
                name: 'Blog-Archives',
                component: BlogArchives
            }
        ]
    },
    {
        path: '/blog/article',
        name:'BlogArticle',
        component: BlogLayout,
        redirect: '/blog/article/index',
        children: [
            {
                path: 'index',
                name: 'Blog-Article',
                component: BlogArticle
            }
        ]
    }
]