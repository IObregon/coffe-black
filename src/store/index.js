import Vue from 'vue'
import Vuex from 'vuex'

import HomeStore from '../home/store'
import DetailStore from '../detail/store'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    home: HomeStore,
    detail: DetailStore
  }
})
