import {
  SET_CURRENT_ITEM,
  CLEAR_CURRENT_ITEM
} from '../../store/mutation_types.js'

export default {
  state: {
    currentItem: null
  },
  mutations: {
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
    currentItem (state) {
      return state.currentItem
    }
  }
}
