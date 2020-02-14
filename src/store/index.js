import Vue from 'vue'
import Vuex from 'vuex'
import {currencyRoutes} from '@/router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    opend: false,
    routes: currencyRoutes,
    message: false
  },
  mutations: {
    toggleOpen(state,payload){
      state.opend = payload
    },
    SET_ROUTES(state, payload) {
      state.routes = [...currencyRoutes, ...payload]
      state.addRoutes = payload
    },
    SET_MESSAGE(state){
      state.message = !state.message

    }
  },
  actions: {
  },
  modules: {
  }
})
