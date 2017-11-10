<template>
  <grid :items="items"></grid>
</template>

<script>
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
    this.getPopularItems()
  },
  methods: {
    getPopularItems () {
      Service.getPopularItems()
      .then(res => (
        res.json()
      ))
      .then(json => {
        this.$store.commit('setPopularItems', json.results.slice(0, 18))
      })
    }
  }
}
</script>
