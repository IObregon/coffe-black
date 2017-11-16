import {
  LOAD_POPULAR_ITEMS,
  DISPLAY_PROGRESS_INDICATOR
} from '../../store/mutation_types'
import { GET_POPULAR_ITEMS } from './action_types'

import Service from '../../service'

export default {
  [GET_POPULAR_ITEMS] ({ commit }, page = 1) {
    console.log('GET_POPULAR_ITEMS', page)
    commit({
      type: DISPLAY_PROGRESS_INDICATOR,
      display: true
    })
    Service.getPopularItems(page)
    .then(res => (
      res.json()
    ))
    .then(json => {
      commit({
        type: DISPLAY_PROGRESS_INDICATOR,
        display: false
      })
      commit({
        type: LOAD_POPULAR_ITEMS,
        items: json.results
      })
    })
  }

}
