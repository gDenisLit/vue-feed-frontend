<template>
  <input type="text" v-model="filterBy.txt" placeholder="filter" @input="debounceTxt" />
</template>
<script>
import { debounce } from 'lodash'
export default {
  name: 'comment-filter',
  data() {
    return {
      filterBy: {
        txt: '',
      },
      debounceTxt: null
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
