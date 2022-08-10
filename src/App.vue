<template>
  <submit-Comment />
  <filter />
  <comment-list />
</template>

<script>
import submitComment from './cmps/submit-comment.vue'
import commentList from './cmps/comment-list.vue'
import filter from './cmps/filter.vue'
export default {
  name: 'app',
  components: {},
  created() {
    this.$store.dispatch({ type: 'loadComments' })
  },
  components: {
    submitComment,
    commentList,
    filter
  }
}
</script>
