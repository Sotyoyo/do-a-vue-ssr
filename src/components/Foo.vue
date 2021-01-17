<template>
  <h1 @click="foo">Hello Foo!</h1>
</template>

<script>
export default {
  name: 'Foo',
  methods: {
    foo() {
      alert('foo!')
    },
  },
}
</script>
<style scoped="true">
h1 {
  color: aqua;
}
</style>
