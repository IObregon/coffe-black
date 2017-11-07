import Vue from 'vue'
import Router from 'vue-router'
import Toolbar from '../components/Toolbar'
import Grid from '../components/Grid'
import Detail from '../components/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'grid',
      components: {
        default: Grid,
        toolbar: Toolbar
      },
      props: {default: false, toolbar: true}
    },
    {
      path: '/:id',
      name: 'detail',
      components: {
        default: Detail,
        toolbar: Toolbar
      },
      props: {default: true, toolbar: true}
    }
  ]
})
