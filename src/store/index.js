import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const initialState = {
  popularItems: [],
  currentItem: null
}

export default new Vuex.Store({
  state: initialState,
  mutations: {
    setPopularItems (state, items) {
      state.popularItems = [
        ...state.popularItems,
        ...items
      ]
    },
    setCurrentItem (state, item) {
      state.currentItem = Object.assign({},
        state.currentItem, item)
    }
  }
})
