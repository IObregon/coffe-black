<template>
  <v-layout row>
    <v-flex xs12>
      <head-line
        v-if="headlineItem"
        :item="headlineItem"></head-line>
      <v-layout row v-if="popularItems.length > 0">
        <v-flex xs12>
          <grid-list
            :items="popularItems">
          </grid-list>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { GET_POPULAR_ITEMS } from '../store/action_types'

import HeadLine from './head_line'
import GridList from './grid_list'

export default {
  name: 'HomeMain',
  components: {
    HeadLine, GridList
  },
  computed: {
    ...mapGetters([
      'headlineItem',
      'popularItems'
    ])
  },
  methods: {
    ...mapActions([
      GET_POPULAR_ITEMS
    ])
  },
  created () {
    if (this.popularItems.length === 0) {
      this[GET_POPULAR_ITEMS]()
    }
  }
}
</script>
