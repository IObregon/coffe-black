<template>
  <detail-card
    v-if="currentItem"
    :item="currentItem"
    @histBack="histBack">
  </detail-card>
</template>

<script>
import { mapState } from 'vuex'

import { SET_CURRENT_ITEM } from '../../store/mutation_types.js'
import DetailCard from './detail_card'
import Service from '../service/detail_service'

export default {
  name: 'detail',
  props: ['id'],
  components: {
    DetailCard
  },
  computed: mapState(['currentItem']),
  beforeRouteUpdate (to, from, next) {
    this.getItem(to.params.id)
    next()
  },
  created () {
    this.getItem(this.id)
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
  }
}
</script>
