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
      <h4>{{ show.first_air_date }}</h4>
      <p>{{ show.overview }}</p>
      <v-layout row>
        <v-flex xs12 class="text-xs-left">
          <v-chip outline color="green accent-2" v-for="genre in show.genres" :key="genre.id">
            {{ genre.name }}
          </v-chip>
        </v-flex>
      </v-layout row>
      <v-layout row>
        <v-flex xs6>
          <h4>Seasons {{ show.number_of_seasons }}</h4>
        </v-flex>
        <v-flex xs6>
          <h4>Episodes {{ show.number_of_episodes }}</h4>
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
