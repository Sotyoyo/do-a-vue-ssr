<template>
  <h1 @click="bar">Hello Bar! {{ $store.state.name }}</h1>
</template>

<script>
export default {
  name: 'Bar',
  data: () => {
    return {
      num: 10000,
    }
  },
  methods: {
    bar() {
      alert('bar!')
    },
  },
  created() {
    this.$store.dispatch('changeName')
  },
}
</script>
<style scoped="true">
h1 {
  color: aquamarine;
}
</style>
