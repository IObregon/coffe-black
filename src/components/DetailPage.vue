<template>
    <v-container fluid :fill-height="loading" class="nopadding">
      <v-layout v-if="loading" justify-center align-center>
        <v-progress-circular
          indeterminate color="green accent-2">
        </v-progress-circular>
      </v-layout>
      <tv-show-detail v-else :show="item"/>
    </v-container>
</template>

<script>
import TvShowDetail from './TvShowDetail'

const API_URL = 'https://api.themoviedb.org/3/tv/'

export default {
  name: 'DetailPage',
  props: ['id'],
  components: {
    TvShowDetail
  },
  data () {
    return {
      loading: true,
      item: null
    }
  },
  created () {
    this.fetchTvDetail(this.id)
  },
  beforeRouteUpdate (to, from, next) {
    this.fetchTvDetail(to.params.id)
    next()
  },
  methods: {
    fetchTvDetail (id) {
      var that = this
      fetch(`${API_URL}${id}?api_key=f7698770439320b65427198b343fad6f`)
        .then(res => {
          if (!res.ok) {
            this.$router.push({name: 'grid'})
          } else {
            return res.json()
          }
        })
        .then(json => {
          that.loading = false
          that.item = json
        })
    }
  }
}
</script>

<style scoped>
.nopadding {
  padding: 0;
}
</style>
