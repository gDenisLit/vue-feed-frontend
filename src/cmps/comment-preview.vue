<template>
    <section>
        <li class="comment-preview" v-if="comment">
            <h2>{{ comment.name }}</h2>
            <p>{{ comment.txt }}</p>
            <p>{{ comment.email }}</p>
            <img :src="'https://www.gravatar.com/avatar/' + comment.imgId" />
        </li>
    </section>
</template>

<script>

export default {
    name: 'comment-preview',
    props: {
        comment: Object,
    },
    methods: {
    },
    computed: {
    }
}
</script>
