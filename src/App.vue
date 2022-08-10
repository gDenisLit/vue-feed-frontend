<template>
  <section class="main-app main-layout full">
    <div class="main-app__inner flex justify-center">
      <div class="wrapper flex flex-column justify-center ">
        <comment-submit />
        <div class="bottom-wrapper">
          <comment-filter />
          <comment-list />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import commentSubmit from './cmps/comment-submit.vue'
import commentList from './cmps/comment-list.vue'
import commentFilter from './cmps/comment-filter.vue'

export default {
  name: 'app',
  created() { this.$store.dispatch({ type: 'loadComments' }) },
  components: { commentSubmit, commentList, commentFilter, },
}
</script>
