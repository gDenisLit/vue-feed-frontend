<template>
  <comment-submit />
  <comment-filter />
  <comment-list />
</template>

<script>
import commentSubmit from './cmps/comment-submit.vue'
import commentList from './cmps/comment-list.vue'
import commentFilter from './cmps/comment-filter.vue'

export default {
  name: 'app',
  components: {},
  created() {
    this.$store.dispatch({ type: 'loadComments' })
  },
  components: {
    commentSubmit,
    commentList,
    commentFilter,
  },
}
</script>
