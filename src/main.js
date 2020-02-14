import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'element-ui/lib/theme-chalk/index.css';
import './style/index.scss'
import ElementUI from 'element-ui'
import Fragment from 'vue-fragment'
import axios from 'axios'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

Vue.prototype.$http = axios
Vue.use(mavonEditor)
Vue.use(Fragment.Plugin)
Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
