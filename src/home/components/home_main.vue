<template>
  <grid v-if="popularItems.length > 0" :items="popularItems"></grid>
</template>

<script>
import { mapState } from 'vuex'

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
  computed: mapState(['popularItems']),
  created () {
    this.$store.commit({
      type: CLEAR_CURRENT_ITEM
    })
    if (this.popularItems.length === 0) {
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
