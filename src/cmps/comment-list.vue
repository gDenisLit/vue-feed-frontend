<template >
  <section class="list-container">
    <ul class="clean-list list-wrapper">
      <comment-preview 
        v-for="comment in comments" 
        :comment="comment" 
        :key="comment._id" 
      />
    </ul>
  </section>
</template>
<script>
import commentPreview from './comment-preview.vue'
export default {
  name: "comment-list",
  computed: {
    comments() {
      const comments = this.$store.getters.comments
      return JSON.parse(JSON.stringify(comments)).reverse()
    },
  },
  components: { commentPreview }
}
</script>
