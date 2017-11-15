<template>
  <v-app dark>
    <progress-indicator :display="showProgress"></progress-indicator>
    <router-view></router-view>
  </v-app>
</template>

<script>
import { mapState } from 'vuex'

import ProgressIndicator from './shared/components/progress_indicator'

export default {
  name: 'App',
  components: {
    ProgressIndicator
  },
  computed: {
    ...mapState(['showProgress'])
  }
}
</script>
