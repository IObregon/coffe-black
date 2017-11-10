<template>
  <h1 v-if="item">{{ item.name }}</h1>
</template>

<script>
export default {
  name: 'profile',
  props: ['item']
}
</script>
