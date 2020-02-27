import Cookies from 'js-cookie'
import {currencyRoutes} from '@/router'

const state = {
    opend: false,
    routes: currencyRoutes,
    message: false
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

}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}