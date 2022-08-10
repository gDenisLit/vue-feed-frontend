<template>
  <app-header />
  <router-view />
  <!-- <app-footer /> -->
</template>

<script>
import appHeader from './cmps/app-header.vue'
import appFooter from './cmps/app-footer.vue'
export default {
  name: 'app',
  components: {
    appHeader,
    appFooter
  },
  created() {
    this.$store.dispatch({ type: 'loadItems' })
  },
}
</script>
