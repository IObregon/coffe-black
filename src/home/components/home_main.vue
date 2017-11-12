<template>
  <v-layout row v-if="items.length > 0">
    <v-flex xs12>
      <v-card :to="{ name: 'detail', params: { id: headlineItem.id } }">
        <v-card-media
          :src="`https://image.tmdb.org/t/p/w500${headlineItem.backdrop_path}`"
          height="320px">
        </v-card-media>
      </v-card>
      <v-layout row>
        <v-flex xs12>
          <grid-list
            :items="items">
          </grid-list>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapGetters } from 'vuex'

import {
  LOAD_POPULAR_ITEMS,
  CLEAR_CURRENT_ITEM
} from '../../store/mutation_types.js'
import GridList from './grid_list'
import Service from '../service/home_service'

export default {
  name: 'HomeMain',
  components: {
    GridList
  },
  computed: {
    ...mapGetters({
      headlineItem: 'headlineItem',
      items: 'popularItems'
    })
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
          items: json.results
        })
      })
    }
  }
}
</script>
