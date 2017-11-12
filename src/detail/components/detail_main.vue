<template>
  <detail-card
    v-if="currentItem"
    :item="currentItem"
    @histBack="histBack">
  </detail-card>
</template>

<script>
import { mapGetters } from 'vuex'

import {
  SET_CURRENT_ITEM,
  CLEAR_CURRENT_ITEM
} from '../store/mutation_types'
import DetailCard from './detail_card'
import Service from '../service/detail_service'

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
    getItem (id) {
      Service.getItem(id)
      .then(res => (
        res.json()
      ))
      .then(item => {
        this.$store.commit({
          type: SET_CURRENT_ITEM,
          item: item
        })
      })
    },
    histBack () {
      this.$router.push({name: 'home'})
    }
  },
  created () {
    this.getItem(this.id)
  },
  beforeRouteUpdate (to, from, next) {
    this.getItem(to.params.id)
    next()
  },
  beforeDestroy () {
    this.$store.commit({
      type: CLEAR_CURRENT_ITEM
    })
  }
}
</script>
