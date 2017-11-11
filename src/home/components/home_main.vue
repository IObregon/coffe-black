<template>
  <grid v-if="items.length > 0" :items="items"></grid>
</template>

<script>
import {
  LOAD_POPULAR_ITEMS,
  CLEAR_CURRENT_ITEM
} from '../../store/mutation-types.js'
import Grid from './grid'
import Service from '../service/home_service'

export default {
  name: 'home',
  components: {
    Grid
  },
  computed: {
    items () {
      return this.$store.state.popularItems
    }
  },
  created () {
    this.$store.commit({
      type: CLEAR_CURRENT_ITEM
    })
    if (this.items.length === 0) {
      this.getPopularItems()
    }
  },
  methods: {
    getPopularItems () {
      Service.getPopularItems()
      .then(res => (
        res.json()
      ))
      .then(json => {
        this.$store.commit({
          type: LOAD_POPULAR_ITEMS,
          items: json.results.slice(0, 18)
        })
      })
    }
  }
}
</script>
