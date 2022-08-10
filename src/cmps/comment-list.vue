<template >
  <section class="list-container">
    <ul class="clean-list">
      <comment-preview v-for="comment in comments" :comment="comment" :key="comment._id"></comment-preview>
    </ul>
  </section>
</template>
<script>
import commentPreview from './comment-preview.vue'
export default {
  name: "comment-list",
  computed: {
    comments() {
      return this.$store.getters.comments
    },
    components: {
      commentPreview
    }
  }
}
</script>
