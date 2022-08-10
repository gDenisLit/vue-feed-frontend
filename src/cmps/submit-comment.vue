<template>
  <form @submit="submitComment" class="item-edit flex flex-column">
    <input type="email" v-model="comment.email" placeholder="Email" />
    <textarea
      cols="30"
      rows="10"
      v-model="comment.txt"
      placeholder="Message"
    ></textarea>

    <button>Submit</button>
  </form>
</template>

<script>
export default {
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
      const comment = JSON.parse(JSON.stringify(this.comment))
      await this.$store.dispatch({
        type: 'submitComment',
        comment,
      })
    },
    clearFields() {
      this.comment.email = ''
      this.comment.txt = ''
    },
  },
  created() {},
}
</script>
