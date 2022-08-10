<template>
    <section class="item-preview flex flex-column justify-center items-center">
        <div class="item-img-container flex justify-center items-center">
            <img :src="item.imgSrc" alt="" v-if="item.img">
            <font-awesome-icon :icon="item.icon" v-if="item.icon" />
        </div>
        <div class="item-txt-container">
            <h2>{{ item.title }}</h2>
            <p>{{ shortBody }}</p>
        </div>
        <div class="item-crud-container">
            <button class="item-btn btn-big" @click="$router.push(`/details/${item._id}`)">Read More</button>
            <div class="special-crud flex justify-between">
                <button class="item-btn btn-small" @click="crudReq('removeItem')">Delete</button>
                <button class="item-btn btn-small" @click="$router.push(`/edit/${item._id}`)">Edit</button>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'item-preview',
    props: { item: Object },
    methods: {
        crudReq(funcType) { this.$emit('crudReq', { type: funcType, itemId: this.item._id }) },
    },
    computed: {
        shortBody() { return this.item.body.substr(0, 97) + '...' },
    },
    emits: ['crudReq']
}
</script>
