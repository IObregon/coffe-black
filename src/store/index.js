import Vue from 'vue'
import Vuex from 'vuex'

import {
  LOAD_POPULAR_ITEMS,
  SET_CURRENT_ITEM,
  CLEAR_CURRENT_ITEM
} from './mutation-types.js'

Vue.use(Vuex)

const initialState = {
  popularItems: [],
  currentItem: null
}

export default new Vuex.Store({
  state: initialState,
  mutations: {
    [LOAD_POPULAR_ITEMS] (state, payload) {
      state.popularItems = [
        ...state.popularItems,
        ...payload.items
      ]
    },
    [SET_CURRENT_ITEM] (state, payload) {
      if (payload.item) {
        state.currentItem = Object.assign({},
          payload.item)
      }
    },
    [CLEAR_CURRENT_ITEM] (state) {
      state.currentItem = null
    }
  },
  getters: {
    headlineItem (state) {
      return state.popularItems.slice(0, 1)[0]
    },
    popularItems (state) {
      return state.popularItems.slice(1, 19)
    }
  }
})
