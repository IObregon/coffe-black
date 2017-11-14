import Vue from 'vue'
import Vuex from 'vuex'

import { SHOW_PROGRESS } from './mutation_types'
import HomeStore from '../home/store'
import DetailStore from '../detail/store'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showProgress: false
  },
  mutations: {
    [SHOW_PROGRESS] (state, payload) {
      state.showProgress = payload.display
    }
  },
  modules: {
    home: HomeStore,
    detail: DetailStore
  }
})
