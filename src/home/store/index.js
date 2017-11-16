import mutations from './mutations'
import actions from './actions'
import getters from './getters'

export default {
  state: {
    popularItems: [],
    currentPageNumber: 1
  },
  mutations: mutations,
  actions: actions,
  getters: getters
}
