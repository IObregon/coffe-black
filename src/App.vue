<template>
  <v-app dark>
    <toolbar/>
    <main>
      <v-content>
        <router-view></router-view>
    </v-content>
    </main>
  </v-app>
</template>

<script>
import Toolbar from './components/Toolbar'

export default {
  name: 'App',
  components: {
    Toolbar
  }
}
</script>
