export default {
  headlineItem (state) {
    return state.popularItems[0]
  },
  popularItems (state) {
    return state.popularItems.slice(1, 19)
  }
}
