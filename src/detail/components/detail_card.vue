<template>
  <section>
    <v-toolbar>
      <v-toolbar-side-icon @click="histBack">
        <v-icon>keyboard_backspace</v-icon>
      </v-toolbar-side-icon>
      <v-toolbar-title>{{ item.name }}</v-toolbar-title>
    </v-toolbar>
    <v-layout row>
      <v-flex xs12>
        <v-card>
          <v-card-media
            v-if="item.backdrop_path"
            :src="`https://image.tmdb.org/t/p/w500${item.backdrop_path}`"
            height="250px">
          </v-card-media>
          <v-card-media
            v-else
            src="http://via.placeholder.com/450x250"
            height="250px">
          </v-card-media>
        </v-card>
      </v-flex>
    </v-layout>
    <v-container fluid>
      <v-layout row>
        <v-flex xs12>
          <h4 class="grey--text text--lighten-1">Overview</h4>
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex xs12>
          <p class="grey--text text--lighten-4">{{ item.overview }}</p>
        </v-flex>
      </v-layout>
    </v-container>
  </section>
</template>

<script>
export default {
  name: 'DetailCard',
  props: ['item'],
  methods: {
    histBack () {
      this.$emit('histBack')
    }
  }
}
</script>
