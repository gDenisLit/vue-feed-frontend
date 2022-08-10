<template>
  <main class="details main-layout full" v-if="item">
    <section class="details__inner flex flex-column" v-if="item">
      <back-btn>Go Back</back-btn>

      <section class="item-info-container flex">
        <div class="item-img-container flex justify-center items-center">
          <img :src="item.imgSrc" alt="" v-if="item.img" />
          <font-awesome-icon :icon="item.icon" v-if="item.icon" />
        </div>
        <div class="info-wrapper flex flex-column">
          <div class="item-byuser" v-if="item.byUser">
            <h4>{{ item.byUser.name }}</h4>
            <p>{{ item.byUser.title }}</p>
          </div>
          <label class="item-id">
            <span>Item Id: </span>
            {{ item._id }}
          </label>
          <label class="item-date">
            <span>Added: </span>
            {{ localeDate }}
          </label>
        </div>
      </section>
      <section class="item-txt-container">
        <h2>{{ item.title }}</h2>
        <h4>{{ item.subtitle }}</h4>
        <p>{{ item.body }}</p>
      </section>
    </section>
  </main>
</template>

<script>
import { itemService } from '../services/comment.service'
import { showErrorMsg } from '../services/event-bus.service'
import backBtn from '../cmps/back-btn.vue'
export default {
  name: 'item-details',
  data() {
    return { item: null }
  },
  computed: {
    localeDate() {
      const date = new Date(this.item.createdAt)
      return date.toLocaleString()
    },
  },
  async created() {
    const { id } = this.$route.params
    try {
      this.item = await itemService.getById(id)
    } catch (err) {
      showErrorMsg('Item not found')
    }
  },
  components: { backBtn },
}
</script>
