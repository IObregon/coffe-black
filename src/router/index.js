import Vue from 'vue'
import Router from 'vue-router'
import Toolbar from '../components/Toolbar'
import GridPage from '../components/GridPage'
import DetailPage from '../components/DetailPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'grid',
      components: {
        default: GridPage,
        toolbar: Toolbar
      },
      props: {default: false, toolbar: true}
    },
    {
      path: '/:id',
      name: 'detail',
      components: {
        default: DetailPage,
        toolbar: Toolbar
      },
      props: {default: true, toolbar: true}
    }
  ]
})
