import Vue from 'vue'
import Vuex from 'vuex'

import HomeStore from '../home/store'
import DetailStore from '../detail/store'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    fetchingData: false
  },
  mutations: {
    fetchingDataOn (state) {
      state.fetchingData = true
    },
    fetchingDataOff (state) {
      state.fetchingData = false
    }
  },
  modules: {
    home: HomeStore,
    detail: DetailStore
  }
})
