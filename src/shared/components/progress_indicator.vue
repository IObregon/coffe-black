<template>
  <v-container v-if="display" fill-height align-center>
     <v-layout justify-center align-center>
       <v-progress-circular indeterminate color="red darken-2">
       </v-progress-circular>
     </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'ProgressIndicator',
  props: ['display']
}
</script>
