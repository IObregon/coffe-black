<template>
  <profile
    v-if="item"
    :item="item"
    @histBack="histBack"></profile>
</template>

<script>
import { SET_CURRENT_ITEM } from '../../store/mutation-types.js'
import Profile from './profile'
import Service from '../service/detail_service'

export default {
  name: 'detail',
  props: ['id'],
  components: {
    Profile
  },
  computed: {
    item () {
      return this.$store.state.currentItem
    }
  },
  beforeCreate () {
    this.$store.commit({
      type: SET_CURRENT_ITEM,
      item: null
    })
  },
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
