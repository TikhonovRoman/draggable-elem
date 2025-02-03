<template>
    <div class="wrap">
        <div v-for="el of width" :key="el" class="skeleton-text blink" :style="{ width: el + '%', height: height, }"></div>
    </div>
</template>
<script setup>
defineProps({
    width: Array,
    height: String
})
</script>
<style scoped>
.wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    width: 100%;
    height: 100%;
}

.skeleton-text {
    background-color: rgba(60, 60, 60, 1);
    border-radius: .5em;
}

.blink {
    -webkit-mask-image: linear-gradient(to right, transparent 0%, rgb(0, 0, 0) 25%, rgb(0, 0, 0) 75%, transparent 100%);
    mask-image: linear-gradient(to right, transparent 0%, rgb(0, 0, 0) 25%, rgb(0, 0, 0) 75%, transparent 100%);
    -webkit-mask-size: 200% 100%;
    mask-size: 200% 100%;
    -webkit-mask-repeat: repeat;
    mask-repeat: repeat;
    -webkit-mask-position: 50% top;
    mask-position: 50% top;
    -webkit-animation: effect-blink 1s infinite;
    animation: effect-blink 1s infinite;
}

@-webkit-keyframes effect-blink {
    0% {
        -webkit-mask-position: 50% top;
        mask-position: 50% top;
    }

    100% {
        -webkit-mask-position: -150% top;
        mask-position: -150% top;
    }
}

@keyframes effect-blink {
    0% {
        -webkit-mask-position: 50% top;
        mask-position: 50% top;
    }

    100% {
        -webkit-mask-position: -150% top;
        mask-position: -150% top;
    }
}
</style>