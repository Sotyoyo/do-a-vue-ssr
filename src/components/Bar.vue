<template>
  <h1 @click="bar">Hello Bar!</h1>
</template>

<script>
export default {
  name: 'Bar',
  methods: {
    bar() {
      alert('bar!')
    },
  },
}
</script>
<style scoped="true">
h1 {
  color: aquamarine;
}
</style>
