<template>
  <profile :item="item"></profile>
</template>

<script>
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
  created () {
    this.getItem()
  },
  methods: {
    getItem () {
      Service.getItem(this.id)
      .then(res => (
        res.json()
      ))
      .then(json => {
        this.$store.commit('setCurrentItem', json)
      })
    }
  }
}
</script>
