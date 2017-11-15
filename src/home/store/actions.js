import {
  LOAD_POPULAR_ITEMS,
  SHOW_PROGRESS
} from '../../store/mutation_types'
import { GET_POPULAR_ITEMS } from './action_types'

import Service from '../../service'

export default {
  [GET_POPULAR_ITEMS] (context) {
    context.commit({
      type: SHOW_PROGRESS,
      display: true
    })
    Service.getPopularItems()
    .then(res => (
      res.json()
    ))
    .then(json => {
      context.commit({
        type: SHOW_PROGRESS,
        display: false
      })
      context.commit({
        type: LOAD_POPULAR_ITEMS,
        items: json.results
      })
    })
  }

}
