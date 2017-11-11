import Vue from 'vue'
import Vuex from 'vuex'

import { LOAD_POPULAR_ITEMS, SET_CURRENT_ITEM } from './mutation-types.js'

Vue.use(Vuex)

const initialState = {
  popularItems: [],
  currentItem: null
}

export default new Vuex.Store({
  state: initialState,
  mutations: {
    [LOAD_POPULAR_ITEMS] (state, items) {
      state.popularItems = [
        ...state.popularItems,
        ...items
      ]
    },
    [SET_CURRENT_ITEM] (state, item) {
      state.currentItem = Object.assign({},
        state.currentItem, item)
    }
  }
})
