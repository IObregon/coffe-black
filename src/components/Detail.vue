<template>
  <v-container fluid :fill-height="loading">
    <v-layout v-if="laoding" justify-center align-center>
      <v-progress-circular indeterminate color="primary"></v-progress-circular>
    </v-layout>
      <v-card v-else>
        <v-card-media
          :src="`https://image.tmdb.org/t/p/w500${item.backdrop_path}`"
          height="250px" />
        <v-card-title primary-title>
          <h3>{{ item.name }}</h3>
          <p>{{ item.overview }}</p>
        </v-card-title>
      </v-card>
  </v-container>
</template>

<script>
const API_URL = 'https://api.themoviedb.org/3/tv/'

export default {
  name: 'Detail',
  props: ['id'],
  data: function () {
    return {
      loading: true,
      item: null
    }
  },
  mounted: function () {
    var that = this
    fetch(`${API_URL}${this.id}?api_key=f7698770439320b65427198b343fad6f`)
      .then(res => {
        return res.json()
      })
      .then(json => {
        console.log(json)
        that.loading = false
        that.item = json
      })
  }
}
</script>

<style scoped>
.container {
  padding: 16px;
}
</style>
