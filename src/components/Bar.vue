<template>
  <h1 @click="bar">Hello Bar! {{ num }}</h1>
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
  created() {},
}
</script>
<style scoped="true">
h1 {
  color: aquamarine;
}
</style>
