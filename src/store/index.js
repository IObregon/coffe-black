import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const initialState = {
  popularItems: []
}

export default new Vuex.Store({
  state: initialState,
  mutations: {
    loadPopularItems (state, items) {
      state.popularItems = [
        ...state.popularItems,
        ...items
      ]
    }
  },
  actions: {
    loadPopularItems ({ commit }) {
      fetch('https://api.themoviedb.org/3/tv/popular?api_key=f7698770439320b65427198b343fad6f')
        .then(res => {
          return res.json()
        })
        .then(function (json) {
          if (json.results.length > 0) {
            commit('loadPopularItems', json.results)
          }
        })
    }
  }
})
