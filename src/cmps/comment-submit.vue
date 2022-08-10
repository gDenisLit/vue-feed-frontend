<template>
  <form @submit.prevent="submitComment" class="submit-comment flex flex-column">
    <h1>Post</h1>
    <input type="email" v-model="comment.email" placeholder="Email" />
    <textarea cols="30" rows="3" v-model="comment.txt" placeholder="Message"></textarea>
    <button>Submit</button>
  </form>
</template>

<script>
export default {
  name: 'submit-comment',
  data() {
    return {
      comment: {
        email: '',
        txt: '',
      },
    }
  },
  methods: {
    async submitComment() {
      try {
        const comment = JSON.parse(JSON.stringify(this.comment))
        await this.$store.dispatch({
          type: 'saveComment',
          comment,
        })
      } catch (err) {
        console.log(err)
      } finally { this.clearFields() }
    },
    clearFields() {
      this.comment.email = ''
      this.comment.txt = ''
    },
  },

}
</script>
