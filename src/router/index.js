import Vue from 'vue'
import Router from 'vue-router'

import Home from '../home/components/home_main'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }
  ]
})
