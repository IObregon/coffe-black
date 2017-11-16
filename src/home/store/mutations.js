import {
  LOAD_POPULAR_ITEMS,
  NEXT_PAGE_NUMBER
} from '../../store/mutation_types'

export default {
  [LOAD_POPULAR_ITEMS] (state, payload) {
    state.popularItems = [
      ...state.popularItems,
      ...payload.items
    ]
  },
  [NEXT_PAGE_NUMBER] (state) {
    state.currentPageNumber++
  }
}
