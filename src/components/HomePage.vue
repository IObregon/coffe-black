<template>
  <v-container fluid :grid-list-md="true" :fill-height="loading">
    <v-layout v-if="loading" justify-center align-center>
      <v-progress-circular indeterminate color="primary"></v-progress-circular>
    </v-layout>
    <v-layout v-else row wrap>
      <v-flex v-for="it in items" :key="it.id" xs4 sm4 md2 xl1>
        <v-card :to="{ name: 'detail', params: { id: it.id } }">
          <v-card-media
            v-if="it.poster_path"
            :src="`https://image.tmdb.org/t/p/w500${it.poster_path}`"
            height="200"/>
          <v-card-media
            v-else
            src="http://via.placeholder.com/200x250"
            height="200"/>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'HomePage',
  created () {
    if (this.items.length === 0) {
      this.init()
    }
  },
  methods: {
    ...mapActions({
      init: 'loadPopularItems'
    })
  },
  computed: {
    loading () {
      return this.items.length === 0
    },
    items () {
      return this.$store.state.popularItems
    }
  }
}
</script>

<style scoped>
img {
  max-width: 100%;
}
a {
  text-decoration: none;
}
</style>
