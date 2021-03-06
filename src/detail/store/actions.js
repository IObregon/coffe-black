import {
  SET_CURRENT_ITEM,
  SHOW_PROGRESS
} from '../../store/mutation_types'
import { GET_ITEM_DETAIL } from './action_types'

import Service from '../../service'

export default {
  [GET_ITEM_DETAIL] (context, id) {
    context.commit({
      type: SHOW_PROGRESS,
      display: true
    })
    Service.getItem(id)
    .then(res => (
      res.json()
    ))
    .then(item => {
      context.commit({
        type: SHOW_PROGRESS,
        display: false
      })
      context.commit({
        type: SET_CURRENT_ITEM,
        item: item
      })
    })
  }
}
