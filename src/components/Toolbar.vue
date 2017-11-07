<template>
  <v-toolbar app fixed>
    <v-toolbar-side-icon @click="histBack">
      <i v-if="id" class="material-icons">keyboard_backspace</i>
      <i v-else class="material-icons">menu</i>
    </v-toolbar-side-icon>
    <v-toolbar-title>Browse</v-toolbar-title>
  </v-toolbar>
</template>

<script>
export default {
  name: 'Toolbar',
  props: ['id'],
  methods: {
    histBack: function () {
      if (this.id) {
        this.$router.push({name: 'grid'})
      }
    }
  }
}
</script>
