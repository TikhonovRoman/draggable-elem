<template>
    <div class="modal" :style="{ right: inventoryStore.showModal ? '0' : '-50%' }">
        <CloseButton @click="inventoryStore.showModal = false"></CloseButton>
        <InventoryItem :style="{ '--zIndex': '999', width: '65%', height: '30%', margin: '20% auto 15% auto' }"
            :inventory="inventoryStore.inventory[index]">
        </InventoryItem>
        <div class="wrap-content">
            <SkeletonText v-show="inventoryStore.isLoading" :width="['100']" height="1.75rem"
                style="margin-bottom:1.5em;"></SkeletonText>
            <SkeletonText v-show="inventoryStore.isLoading" :width="['100', '100', '100', '80', '42']" height="0.7rem">
            </SkeletonText>
        </div>
        <div class="wrap-content">
            <button class="btn" @click="showBottomModal = true">
                Удалить предмет
            </button>
        </div>
        <div class="bottom-modal" :style="{ bottom: showBottomModal ? '0' : '-26%' }">
            <input v-model.number="removeCount" class="bottom-modal-input" placeholder="Введите количество">
            <div class="wrap-btn">
                <button @click="showBottomModal = false">
                    Отмена
                </button>
                <button @click.prevent="inventoryStore.remove(removeCount), removeCount = ''">
                    Подтвердить
                </button>
            </div>
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
const removeCount = ref('')
const showBottomModal = ref(false)
</script>
<style scoped lang="scss">
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

.bottom-modal {
    display: flex;
    flex-direction: column;
    gap: 1.25em;
    height: 25%;
    width: 100%;
    border-top: 1px solid;
    position: absolute;
    right: 0;
    padding: 1.5em;
    transition: all 0.3s ease-out;

    &-input {
        width: 100%;
        height: 3em;
        padding-left: 1em;
        border: 1px solid rgba(77, 77, 77, 1);
        border-radius: 0.25em;
    }

    .wrap-btn {
        display: flex;
        justify-content: space-between;

        :first-child {
            background-color: rgb(255, 255, 255);
            color: rgba(45, 45, 45, 1);
        }

        :last-child {
            background-color: rgba(250, 114, 114, 1);
            color: rgba(255, 255, 255, 1);
        }

    }
}

.btn {
    width: 100%;
    background-color: rgba(250, 114, 114, 1);
    border-radius: 0.5em;
    border: none;
    height: 39px;
    color: rgba(255, 255, 255, 1);
}
</style>