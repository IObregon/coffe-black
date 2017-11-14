<template>
  <v-app dark>
    <v-container v-if="showProgress" fill-height align-center>
       <v-layout justify-center align-center>
         <v-progress-circular indeterminate color="red darken-2"></v-progress-circular>
       </v-layout>
    </v-container>
    <router-view></router-view>
  </v-app>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'App',
  computed: {
    ...mapState(['showProgress'])
  }
}
</script>
