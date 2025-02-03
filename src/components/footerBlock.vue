<template>
    <div class="wrapper">
        <SkeletonText :width="['100']" height="100%"></SkeletonText>
        <CloseButton></CloseButton>
    </div>
</template>
<script setup>
import CloseButton from '@/components/ui/closeButton.vue'
import SkeletonText from '@/components/ui/skeletonText.vue';
</script>
<style scoped>
.wrapper {
    padding: 1em 4em 1em 1em;
    border: 1px solid;
    border-radius: .75em;
    position: relative;
}
</style>