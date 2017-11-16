<template>
  <v-container grid-list-lg>
    <v-layout fluid row wrap>
      <v-flex v-for="item in series" :key="item.id" xs4>
        <v-card :to="{ name: 'detail', params: { id: item.id } }">
          <v-card-media
            v-if="item.poster_path"
            :src="`https://image.tmdb.org/t/p/w500${item.poster_path}`"
            height="200"/>
          </v-card-media>
          <v-card-media
            v-else
            src="http://via.placeholder.com/450x250"
            height="200"/>
          </v-card-media>
        </v-card>
      </v-flex>
    </v-layout>
    <div v-infinite-scroll="loadMore"
      infinite-scroll-disabled="busy"
      infinite-scroll-distance="10">Loading data...</div>
  </v-container>
</template>

<script>
export default {
  name: 'GridList',
  props: ['items'],
  data () {
    return {
      series: this.items,
      busy: false,
      page: 1
    }
  },
  methods: {
    loadMore () {
      console.log('LOAD MORE!!!')
      this.busy = true
      this.$emit('loadMoreItems', ++this.page)
    }
  },
  update () {
    console.log('UPDATE COMPONENT')
  }
}
</script>
