import {
  SET_CURRENT_ITEM,
  DISPLAY_PROGRESS_INDICATOR
} from '../../store/mutation_types'
import { GET_ITEM_DETAIL } from './action_types'

import Service from '../../service'

export default {
  [GET_ITEM_DETAIL] ({commit}, id) {
    commit({
      type: DISPLAY_PROGRESS_INDICATOR,
      display: true
    })
    Service.getItem(id)
    .then(res => (
      res.json()
    ))
    .then(item => {
      commit({
        type: DISPLAY_PROGRESS_INDICATOR,
        display: false
      })
      commit({
        type: SET_CURRENT_ITEM,
        item: item
      })
    })
  }
}
