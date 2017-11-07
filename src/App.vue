<template>
  <v-app dark>
    <router-view name="toolbar"></router-view>
    <main>
      <v-content>
        <router-view></router-view>
      </v-content>
    </main>
  </v-app>
</template>

<script>
export default {
  name: 'App'
}
</script>
