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
import { mapActions, mapGetters } from 'vuex'

import GridList from './grid_list'

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
  methods: {
    ...mapActions({
      getPopularItems: 'getPopularItems'
    })
  },
  created () {
    if (this.items.length === 0) {
      this.getPopularItems()
    }
  }
}
</script>
