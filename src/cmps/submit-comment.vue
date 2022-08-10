<template>
  <form class="item-edit flex flex-column">
    <input type="email" v-model="itemToEdit.title" placeholder="Email" />
    <textarea cols="30" rows="10" v-model="itemToEdit.body"></textarea>

    <div>
      <button @click.prevent="saveItem">Save</button>
      <button @click.prevent="clearFields">Clear</button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'item-edit-form',
  props: { item: Object },
  data() {
    return { itemToEdit: null }
  },
  methods: {
    saveItem() {
      this.$emit('saveItem', this.itemToEdit)
      this.$router.push('/list')
    },
    clearFields() {
      this.itemToEdit.title = ''
      this.itemToEdit.subtitle = ''
      this.itemToEdit.body = ''
    },
  },
  created() {
    this.itemToEdit = JSON.parse(JSON.stringify(this.item))
  },
  emits: ['saveItem'],
}
</script>
