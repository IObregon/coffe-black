<template>
<v-container fluid :grid-list-lg="true">
  <v-layout row wrap>
    <v-flex v-for="it in 6" :key="it" xs6 sm4 md2 xl1>
      <v-card :to="{ name: 'detail', params: { id: it } }">
        <v-card-media src="http://via.placeholder.com/200x250" height="250px"/>
        <v-card-text>
          Nunc porttitor ex id est pellentesque, ornare scelerisque magna.
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
export default {
  name: 'Grid'
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
