import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const initialState = {
  popularItems: []
}

export default new Vuex.Store({
  state: initialState,
  mutations: {
    setPopularItems (state, items) {
      state.popularItems = [
        ...state.popularItems,
        ...items
      ]
    }
  }
})
