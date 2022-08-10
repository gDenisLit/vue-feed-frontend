<template></template>

<script>
export default {
  name: 'app',
  components: {
  },
  created() {
    this.$store.dispatch({ type: 'loadItems' })
  },
}
</script>
