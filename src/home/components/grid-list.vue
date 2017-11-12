<template>
  <v-container grid-list-lg>
    <v-layout fluid row wrap>
      <v-flex v-for="item in items" :key="item.id" xs4>
        <v-card :to="{ name: 'detail', params: { id: item.id } }">
          <v-card-media
            v-if="item.poster_path"
            :src="`https://image.tmdb.org/t/p/w500${item.poster_path}`"
            height="200"/>
          </v-card-media>
          <v-card-media
            v-else
            src="http://via.placeholder.com/450x250"
            height="200"/>
          </v-card-media>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'GridList',
  props: ['items']
}
</script>
