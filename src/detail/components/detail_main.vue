<template>
  <detail-card
    v-if="currentItem"
    :item="currentItem"
    @histBack="histBack">
  </detail-card>
</template>

<script>
import { mapActions, mapMutations, mapGetters } from 'vuex'

import {
  CLEAR_CURRENT_ITEM
} from '../store/mutation_types'
import DetailCard from './detail_card'

export default {
  name: 'DetailMain',
  props: ['id'],
  components: {
    DetailCard
  },
  computed: {
    ...mapGetters({
      currentItem: 'currentItem'
    })
  },
  methods: {
    histBack () {
      this.$router.push({name: 'home'})
    },
    ...mapActions({
      getItem: 'getItem'
    }),
    ...mapMutations({
      clearCurrentItem: CLEAR_CURRENT_ITEM
    })
  },
  created () {
    this.getItem(this.id)
  },
  beforeRouteUpdate (to, from, next) {
    this.getItem(to.params.id)
    next()
  },
  beforeDestroy () {
    this.clearCurrentItem()
  }
}
</script>
