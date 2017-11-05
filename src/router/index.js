import Vue from 'vue'
import Router from 'vue-router'
import Grid from '../components/Grid'
import Detail from '../components/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'grid',
      component: Grid
    },
    {
      path: '/:id',
      name: 'detail',
      component: Detail,
      props: true
    }
  ]
})
