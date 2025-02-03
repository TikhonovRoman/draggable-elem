<template>
    <div class="modal" :style="{right:inventoryStore.showModal? '0': '-50%'}">
       <CloseButton  @click="inventoryStore.showModal=false"></CloseButton>
        <InventoryItem :style="{ width: '65%', height: '30%',margin:'20% auto 15% auto' }" :inventory="inventoryStore.inventory[index]">
        </InventoryItem>
        <div class="wrap-content">
            <SkeletonText v-show="inventoryStore.isLoading" :width="['100']" height="1.75rem"
                style="margin-bottom:1.5em;"></SkeletonText>
            <SkeletonText v-show="inventoryStore.isLoading" :width="['100', '100', '100', '80', '42']" height="0.7rem">
            </SkeletonText>
        </div>
        <div class="wrap-content">
            <button class="btn">
                Удалить предмет
            </button>
        </div>
    </div>
</template>
<script setup>
import { computed, ref } from 'vue';
import CloseButton from '@/components/ui/closeButton.vue'
import InventoryItem from './ui/InventoryItem.vue';
import SkeletonText from '@/components/ui/skeletonText.vue';
import { useInventoryStore } from "../stores/inventory";
const inventoryStore = useInventoryStore();
const index = computed(() => { return inventoryStore.indexChoisedItem })
</script>
<style scoped>
.modal {
    width: 47%;
    height: 100%;
    z-index: 99;
    justify-content: center;
    backdrop-filter: blur(16px);
    position: absolute;
    right: -50%;
    top: 0;
    border: 1px solid;
    padding: 1.25em;
    transition: all 0.3s ease-out;
}

.wrap-content {
    padding-top: 1em;
    border-top: 1px solid;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-bottom: 1.5em;
}
.btn{
    width: 100%;
    background-color: rgba(250, 114, 114, 1);
    border-radius: 0.5em;
    border: none;
    height: 39px;
    color: rgba(255, 255, 255, 1);
}

.close {
    position: absolute;
    top: 14px;
    right: 14px;
    width: .75em;
    height: .75em;
    border-radius: 100px;
    z-index: 9;
    cursor: pointer;
    background:
        linear-gradient(45deg, transparent calc(50% - 1px), rgba(255, 255, 255, 1) calc(50% - 1px), rgba(255, 255, 255, 1) calc(50% + 1px), transparent calc(50% + 1px)),
        linear-gradient(-45deg, transparent calc(50% - 1px), rgba(255, 255, 255, 1) calc(50% - 1px), rgba(255, 255, 255, 1) calc(50% + 1px), transparent calc(50% + 1px));
}
</style>