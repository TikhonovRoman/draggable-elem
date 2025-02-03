<template>
    <div class="wrapper">
        <div class="image">
            <SkeletonImage v-show="isLoading"></SkeletonImage>
        </div>
        <div class="content">
            <SkeletonText v-show="isLoading" :width="['100']" height="1.5rem"></SkeletonText>
            <SkeletonText v-show="isLoading" :width="['81', '100', '90', '84', '74']" height="0.7rem"></SkeletonText>
            <SkeletonText v-show="isLoading" :width="['42']" height="0.7rem"></SkeletonText>
        </div>
    </div>
</template>
<script setup>
import SkeletonText from '@/components/ui/skeletonText.vue';
import SkeletonImage from '@/components/ui/SkeletonImage.vue'
import { ref } from 'vue';
const isLoading = ref(true)
</script>

<style scoped>
.wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid;
    border-radius: 0.75em;
    padding: 1.5em 1em;
    gap: 1.5em;
}

.image {
    width: 100%;
    height: 100%;
}

.content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1.5rem;
    width: 100%;
    padding: 0 0.5em;
}
</style>