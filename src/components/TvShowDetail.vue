<template>
  <section>
    <v-card>
      <v-card-media
        v-if="show.backdrop_path"
        :src="`https://image.tmdb.org/t/p/w500${show.backdrop_path}`"
        height="250px" />
      <v-card-media
        v-else
        src="http://via.placeholder.com/400x250"
        height="250px" />
    </v-card>
    <v-container fluid>
      <v-layout row>
        <v-flex xs12>
          <h4>Overview</h4>
          <p>{{ show.overview }}</p>
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex xs4 class="text-xs-center">
          <p class="data green--text text--accent-2">Date <strong>{{ show.first_air_date }}</strong></p>
        </v-flex>
        <v-flex xs4 class="text-xs-center">
          <p class="data green--text text--accent-2">Seasons <strong>{{ show.number_of_seasons }}</strong></p>
        </v-flex>
        <v-flex xs4 class="text-xs-center">
          <p class="data green--text text--accent-2">Episodes <strong>{{ show.number_of_episodes }}</strong></p>
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex xs12 class="text-xs-left">
          <v-chip outline color="grey lighten-4" v-for="genre in show.genres" :key="genre.id">
            {{ genre.name }}
          </v-chip>
        </v-flex>
      </v-layout>
    </v-container>
  </section>
</template>

<script>
export default {
  name: 'TvShowDetail',
  props: ['show']
}
</script>

<style scoped>
.data strong {
  display: block;
}
</style>
