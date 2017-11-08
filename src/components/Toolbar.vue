<template>
  <v-layout row>
    <v-flex xs12>
      <v-card v-if="!id" class="card--flex-toolbar">
        <v-card-media
          src="https://image.tmdb.org/t/p/w500/h1qyblc5p9G3ZWIVK8ZrkpxcXgO.jpg"
          height="320px">
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-start justify-end flexbox>
                <v-chip color="red accent-3" text-color="white">New Chapter</v-chip>
                <h3>The Walking Dead</h3>
                <p>Season 1, Episode 4</p>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-media>
      </v-card>
      <v-toolbar fixed flat>
        <v-toolbar-side-icon @click="histBack">
          <v-icon v-if="id" color="red accent-3">keyboard_backspace</v-icon>
          <v-icon v-else color="red accent-3">menu</v-icon>
        </v-toolbar-side-icon>
        <v-toolbar-title></v-toolbar-title>
      </v-toolbar>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'Toolbar',
  props: ['id'],
  methods: {
    histBack () {
      if (this.id) {
        this.$router.push({name: 'grid'})
      }
    }
  }
}
</script>

<style scoped>
.toolbar {
  background-color: transparent;
}
</style>
