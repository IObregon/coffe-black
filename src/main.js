import Vue from 'vue'
import store from './store'

import Vuetify from 'vuetify'
import '../node_modules/vuetify/dist/vuetify.min.css'

import App from './App'
import router from './router'

Vue.use(Vuetify)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
