import Vue from 'vue'
import Vuex from 'vuex'

import HomeStore from '../home/store'
import DetailStore from '../detail/store'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showProgress: false
  },
  mutations: {
    showProgress (state, payload) {
      state.showProgress = payload.display
    }
  },
  modules: {
    home: HomeStore,
    detail: DetailStore
  }
})
