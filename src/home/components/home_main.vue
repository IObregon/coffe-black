<template>
  <grid :items="items"></grid>
</template>

<script>
import { LOAD_POPULAR_ITEMS } from '../../store/mutation-types.js'
import Grid from './grid'
import Service from '../services/home_service'

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
        this.$store.commit(LOAD_POPULAR_ITEMS, json.results.slice(0, 18))
      })
    }
  }
}
</script>
