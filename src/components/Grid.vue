<template>
<v-container fluid :grid-list-lg="true" :fill-height="loading">
  <v-layout v-if="loading" justify-center align-center>
    <v-progress-circular indeterminate color="primary"></v-progress-circular>
  </v-layout>
  <v-layout v-else row wrap>
    <v-flex v-for="it in items" :key="it.id" xs6 sm4 md2 xl1>
      <v-card :to="{ name: 'detail', params: { id: it.id } }">
        <v-card-media
          v-if="it.poster_path"
          :src="`https://image.tmdb.org/t/p/w500${it.poster_path}`"
          height="250px"/>
        <v-card-media
          v-else
          src="http://via.placeholder.com/200x250"
          height="250px"/>
      </v-card>
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
const API_URL = 'https://api.themoviedb.org/3/tv/top_rated?api_key=f7698770439320b65427198b343fad6f&language=e'

export default {
  name: 'Grid',
  data: function () {
    return {
      loading: true,
      items: []
    }
  },
  mounted: function () {
    var that = this
    fetch(`${API_URL}`)
      .then(res => {
        return res.json()
      })
      .then(function (json) {
        if (json.results.length > 0) {
          that.loading = false
          that.items = json.results
        }
      })
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
