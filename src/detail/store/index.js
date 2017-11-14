import {
  SET_CURRENT_ITEM,
  CLEAR_CURRENT_ITEM,
  SHOW_PROGRESS
} from '../../store/mutation_types'
import Service from '../service/detail_service'

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
  actions: {
    getItem (context, id) {
      context.commit({
        type: SHOW_PROGRESS,
        dislay: true
      })
      Service.getItem(id)
      .then(res => (
        res.json()
      ))
      .then(item => {
        context.commit({
          type: SHOW_PROGRESS,
          dislay: false
        })
        context.commit({
          type: SET_CURRENT_ITEM,
          item: item
        })
      })
    }
  }
}
