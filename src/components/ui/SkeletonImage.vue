<template>
    <img class="fade" src="@/assets/img.png" alt="sidebar image">
</template>

<script>

</script>

<style scoped>
img {
    object-fit: fill;
    width: 100%;
    height: 100%;
}

.fade {
    -webkit-animation: effect-fade 1s infinite;
    animation: effect-fade 1s infinite;
}

@-webkit-keyframes effect-fade {
    0% {
        opacity: 1;
    }

    50% {
        opacity: 0.7;
    }

    100% {
        opacity: 1;
    }
}

@keyframes skeleton-effect-fade {
    0% {
        opacity: 1;
    }

    50% {
        opacity: 0.2;
    }

    100% {
        opacity: 1;
    }
}
</style>