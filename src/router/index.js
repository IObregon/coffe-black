import Vue from 'vue'
import Router from 'vue-router'

import HomeMain from '../home/components/home_main'
import DetailMain from '../detail/components/detail_main'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeMain
    },
    {
      path: '/:id',
      name: 'detail',
      component: DetailMain,
      props: true
    }
  ]
})
