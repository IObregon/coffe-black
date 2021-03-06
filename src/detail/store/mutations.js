import {
  SET_CURRENT_ITEM,
  CLEAR_CURRENT_ITEM
} from '../../store/mutation_types'

export default {
  [SET_CURRENT_ITEM] (state, payload) {
    if (payload.item) {
      state.currentItem = Object.assign({},
        payload.item)
    }
  },
  [CLEAR_CURRENT_ITEM] (state) {
    state.currentItem = null
  }
}
