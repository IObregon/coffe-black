<template>
  <v-card :to="{ name: 'detail', params: { id: item.id } }">
    <v-card-media
      :src="`https://image.tmdb.org/t/p/w500${item.backdrop_path}`"
      height="320px">
    </v-card-media>
  </v-card>
</template>

<script>
export default {
  name: 'HeadLine',
  props: ['item']
}
</script>
