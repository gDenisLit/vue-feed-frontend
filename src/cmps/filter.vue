<template>
  <input type="text" />
</template>
<script>
import { debounce } from 'lodash'
export default {
  name: 'filter',
  data() {
    return {
      filterBy: {
        txt: '',
      },
    }
  },
  created() {
    this.debounceTxt = debounce(this.setFilter, 500)
  },
  methods: {
    async setFilter() {
      try {
        const filterBy = JSON.parse(JSON.stringify(this.filterBy))
        await this.$store.dispatch({ type: 'loadComments', filterBy })
      } catch (err) {
        console.log(err)
      } finally {
        this.filterBy.txt = ''
      }
    },
  },
}
</script>
