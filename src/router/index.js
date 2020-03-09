import Vue from 'vue'
import VueRouter from 'vue-router'

import admin from './modules/admin'
import blog from './modules/blog'

Vue.use(VueRouter)

const routes = [
    ...blog
]
export const currencyRoutes = [
    ...admin,
]

const creatRouter = () => {
    return new VueRouter({
        routes: currencyRoutes,
        scrollBehavior() {
            return {x: 0, y: 0}
        }
    })
}

export function resetRouter() {
    const reset = creatRouter()
    router.matcher = reset.matcher
}


const router = new VueRouter({
    routes: [
        ...currencyRoutes,
        ...routes
    ]
})

export default router
