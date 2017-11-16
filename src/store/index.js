import Vue from 'vue'
import Vuex from 'vuex'

import { DISPLAY_PROGRESS_INDICATOR } from './mutation_types'
import HomeStore from '../home/store'
import DetailStore from '../detail/store'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    displayingProgressIndicator: false
  },
  mutations: {
    [DISPLAY_PROGRESS_INDICATOR] (state, payload) {
      state.displayingProgressIndicator = payload.display
    }
  },
  modules: {
    home: HomeStore,
    detail: DetailStore
  }
})
