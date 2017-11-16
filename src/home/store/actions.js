import {
  LOAD_POPULAR_ITEMS,
  DISPLAY_PROGRESS_INDICATOR,
  NEXT_PAGE_NUMBER
} from '../../store/mutation_types'
import { GET_POPULAR_ITEMS } from './action_types'

import Service from '../../service'

export default {
  [GET_POPULAR_ITEMS] ({ commit, state }) {
    commit({
      type: DISPLAY_PROGRESS_INDICATOR,
      display: true
    })
    Service.getPopularItems(state.currentPageNumber)
    .then(res => (
      res.json()
    ))
    .then(json => {
      commit({
        type: DISPLAY_PROGRESS_INDICATOR,
        display: false
      })
      commit({
        type: NEXT_PAGE_NUMBER
      })
      commit({
        type: LOAD_POPULAR_ITEMS,
        items: json.results
      })
    })
  }

}
