<template>
    <section>
        <li class="comment-preview flex items-center" v-if="comment">
            <img :src="'https://www.gravatar.com/avatar/' + comment.imgId" />
            <div class="info-wrapper flex flex-column justify-center">
                <h3>{{ comment.email }}</h3>
                <p>{{ comment.txt }}</p>
            </div>
        </li>
    </section>
</template>

<script>

export default {
    name: 'comment-preview',
    props: {comment: Object,}
}
</script>
