<template>
  <detail-card
    v-if="currentItem"
    :item="currentItem"
    @histBack="histBack">
  </detail-card>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'

import { CLEAR_CURRENT_ITEM } from '../../store/mutation_types'
import { GET_ITEM_DETAIL } from '../store/action_types'
import DetailCard from './detail_card'

export default {
  name: 'DetailMain',
  props: ['id'],
  components: {
    DetailCard
  },
  computed: {
    ...mapState({
      currentItem: state => state.detail.currentItem
    })
  },
  methods: {
    histBack () {
      this.$router.push({name: 'home'})
    },
    ...mapActions([ GET_ITEM_DETAIL ]),
    ...mapMutations([ CLEAR_CURRENT_ITEM ])
  },
  created () {
    this[GET_ITEM_DETAIL](this.id)
  },
  beforeDestroy () {
    this[CLEAR_CURRENT_ITEM]()
  },
  beforeRouteUpdate (to, from, next) {
    this[GET_ITEM_DETAIL](to.params.id)
    next()
  }
}
</script>
