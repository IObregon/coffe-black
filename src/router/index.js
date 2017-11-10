import Vue from 'vue'
import Router from 'vue-router'

import Home from '../home/components/home_main'
import Detail from '../detail/components/detail_main'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/:id',
      name: 'detail',
      component: Detail,
      props: true
    }
  ]
})
