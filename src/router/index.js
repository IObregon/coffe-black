import Vue from 'vue'
import Router from 'vue-router'
import Toolbar from '../components/Toolbar'
import HomePage from '../components/HomePage'
import DetailPage from '../components/DetailPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'grid',
      components: {
        default: HomePage,
        toolbar: Toolbar
      },
      props: {default: false, toolbar: (route) => ({ path: route.path })}
    },
    {
      path: '/:id',
      name: 'detail',
      components: {
        default: DetailPage,
        toolbar: Toolbar
      },
      props: {default: true, toolbar: (route) => ({ path: route.path })}
    }
  ]
})
