<template>
  <comment-submit />
  <filter />
  <comment-list />
</template>

<script>
import commentSubmit from './cmps/comment-submit.vue'
import commentList from './cmps/comment-list.vue'
import filter from './cmps/filter.vue'
import CommentSubmit from './cmps/comment-submit.vue'
export default {
  name: 'app',
  components: {},
  created() {
    this.$store.dispatch({ type: 'loadComments' })
  },
  components: {
    commentSubmit,
    commentList,
    filter,
    CommentSubmit,
  },
}
</script>
