import Vue from 'vue'

import Vuetify from 'vuetify'
import '../node_modules/vuetify/dist/vuetify.min.css'

import infiniteScroll from 'vue-infinite-scroll'

import router from './router'
import store from './store'
import App from './App'

Vue.use(Vuetify)
Vue.use(infiniteScroll)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
