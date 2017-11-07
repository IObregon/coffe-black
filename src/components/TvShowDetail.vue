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
      <h5>{{ show.first_air_date }}</h5>
      <p>{{ show.overview }}</p>
      <div class="text-xs-left">
        <v-chip outline color="green accent-2" v-for="genre in show.genres" :key="genre.id">
          {{ genre.name }}
        </v-chip>
      </div>
      <p>Seasons: {{ show.number_of_seasons }}</p>
      <p>Episode: {{ show.number_of_episodes }}</p>
    </v-container>
  </section>
</template>

<script>
export default {
  name: 'TvShowDetail',
  props: ['show']
}
</script>
