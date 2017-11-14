import { LOAD_POPULAR_ITEMS } from '../../store/mutation_types'

export default {
  [LOAD_POPULAR_ITEMS] (state, payload) {
    state.popularItems = [
      ...state.popularItems,
      ...payload.items
    ]
  }
}
