<template>
  <v-app dark>
    <v-toolbar app fixed>
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title>Browse</v-toolbar-title>
    </v-toolbar>
    <main>
      <v-content>
        <router-view></router-view>
    </v-content>
    </main>
  </v-app>
</template>

<script>
export default {
  name: 'app'
}
</script>
