import Cookies from 'js-cookie'
import {currencyRoutes} from '@/router'

const state = {
    opend: false,
    routes: currencyRoutes,
    message: false,
    articleMenu: false,
    articleMenuSource: [],
    articleMenuTag: '1.',
    showRightNav: false,
    qiniuToken: ''
}

const mutations = {
    toggleOpen(state, payload) {
        state.opend = payload
    },
    SET_ROUTES(state, payload) {
        state.routes = [...payload]
        state.addRoutes = payload
    },
    SET_MESSAGE(state) {
        state.message = !state.message
    }
}

const actions = {
    setArticleMenu (store, articleMenu) {
        store.state.articleMenu = articleMenu
    },
    setArticleMenuSource (store, articleMenuSource) {
        store.state.articleMenuSource = articleMenuSource
    },
    setArticleMenuTag (store, articleMenuTag) {
        store.state.articleMenuTag = articleMenuTag
    },
    setShowRightNav (store, show) {
        store.state.showRightNav = show
    },

}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}