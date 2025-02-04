<template>
    <div class="objects" :style="{ backgroundColor: inventory.color }"></div>
</template>

<script setup>
import { useInventoryStore } from "@/stores/inventory";
const inventoryStore = useInventoryStore();
defineProps({
    inventory: {
        type: Object,
        default: () => ({
            id: null,
            count: 0,
            color: "white"
        })
    }
})
</script>

<style scoped>
.objects {
    width: 50%;
    height: 50%;
    position: relative;
    cursor: grab;
}

.objects::after {
    content: '';
    width: 100%;
    height: 100%;
    backdrop-filter: blur(12px);
    position: absolute;
    top: -11%;
    right: -11%;
    z-index: var(--zIndex);
}
</style>