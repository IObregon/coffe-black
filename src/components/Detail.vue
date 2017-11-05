<template>
  <v-container fluid>
    <v-card>
      <v-card-media src="http://via.placeholder.com/450x250" height="250px" />
      <v-card-title primary-title>
        <h3>Detail {{ id }}</h3>
        <p>
          {{ `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget est sapien. Proin varius vel ex quis fermentum. Praesent eget hendrerit nibh, at egestas quam. Morbi vel nisi vitae ex ultricies congue non sit amet tellus. Donec quis felis nulla. Morbi lorem magna, aliquet nec eleifend a, sollicitudin vel ipsum. Maecenas interdum leo nec diam placerat varius.` }}
        </p>
      </v-card-title>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'Detail',
  props: ['id']
}
</script>
