import { LOAD_POPULAR_ITEMS } from './mutation_types'

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
      return state.popularItems[0]
    },
    popularItems (state) {
      return state.popularItems.slice(1, 19)
    }
  }
}
