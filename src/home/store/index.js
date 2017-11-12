import { LOAD_POPULAR_ITEMS } from '../../store/mutation_types.js'

export default {
  state: {
    popularItems: []
  },
  mutations: {
    [LOAD_POPULAR_ITEMS] (state, payload) {
      state.popularItems = [
        ...state.popularItems,
        ...payload.items
      ]
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
}