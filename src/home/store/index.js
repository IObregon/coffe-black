import {
  LOAD_POPULAR_ITEMS,
  SHOW_PROGRESS
} from '../../store/mutation_types'
import Service from '../service/home_service'

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
  actions: {
    getPopularItems (context) {
      context.commit({
        type: SHOW_PROGRESS,
        dislay: true
      })
      Service.getPopularItems()
      .then(res => (
        res.json()
      ))
      .then(json => {
        context.commit({
          type: SHOW_PROGRESS,
          dislay: false
        })
        context.commit({
          type: LOAD_POPULAR_ITEMS,
          items: json.results
        })
      })
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
