import {
  SET_CURRENT_ITEM,
  SHOW_PROGRESS
} from '../../store/mutation_types'
import { GET_ITEM_DETAIL } from './action_types'

import Service from '../service/detail_service'

export default {
  [GET_ITEM_DETAIL] ({commit}, id) {
    commit({
      type: SHOW_PROGRESS,
      dislay: true
    })
    Service.getItem(id)
    .then(res => (
      res.json()
    ))
    .then(item => {
      commit({
        type: SHOW_PROGRESS,
        dislay: false
      })
      commit({
        type: SET_CURRENT_ITEM,
        item: item
      })
    })
  }
}
