<template>
    <div>
        <button class="btn back-btn" @click="$router.push('/list')">
            <font-awesome-icon icon="fa-light fa-arrow-left-long" />
            <span><slot></slot></span>
        </button>
    </div>
</template>

<script>
export default {}
</script>

