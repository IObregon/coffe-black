import { expect } from 'chai'
import mutations from '../../../src/home/store/mutations.js'
import { LOAD_POPULAR_ITEMS } from '../../../src/store/mutation_types'

const loadPopularItems = mutations.LOAD_POPULAR_ITEMS

describe(LOAD_POPULAR_ITEMS, () => {
  it('When recives an empty array, the state contents an empty array', () => {
    const state = {
      popularItems: []
    }
    loadPopularItems(state, {
      items: []
    })
    expect(state.popularItems.length).to.equal(0)
  })

  it('when recives an array with items, the state contents an array with the same elements', () => {
    const state = {
      popularItems: []
    }
    const items = [1, 2, 3]
    loadPopularItems(state, {
      items: items
    })
    expect(state.popularItems.length).to.equal(3)
    for (var i = 0; i < items.length; i++) {
      expect(state.popularItems[i]).to.equal(items[i])
    }
  })

  it('when recives an array with items, and the state allready got items, the state contents all the elements', () => {
    const state = {
      popularItems: [1, 2, 3]
    }
    const items = [4, 5, 6]
    loadPopularItems(state, {
      items: items
    })
    expect(state.popularItems.length).to.equal(6)
    for (var i = state.popularItems.length - 1; i < items.length; i++) {
      expect(state.popularItems[i]).to.equal(items[i])
    }
  })
})
