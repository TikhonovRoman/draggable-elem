<template>
    <div class="inventory">
        <draggable v-model="inventoryStore.inventory" :move="handleMove" @end="handleDragEnd" itemKey="id" class="wrap">
            <template #item="{ element }" >
                <div class="item" @click="inventoryStore.choisedItem(element.id)"> 
                    <InventoryItem v-if="element.count > 0" :inventory="element"></InventoryItem>
                    <div v-if="element.count > 0" class="count">{{ element.count }}</div>
                </div>
            </template>
        </draggable>
        <Modal></Modal>
    </div>
</template>
<script setup>
import draggable from "vuedraggable";
import InventoryItem from "./ui/InventoryItem.vue";
import { useInventoryStore } from "../stores/inventory";
import Modal from "./modal.vue";
import { ref } from "vue";
const inventoryStore = useInventoryStore();
const mIndex = ref(0)
const fIndex = ref(0)
const move = ref(false)

const handleMove = (e) => {
    console.log('draggedContext', e.draggedContext);
    console.log('relatedContext', e.relatedContext);
    move.value = true
    const { index, futureIndex } = e.draggedContext;
    console.log(e)
    mIndex.value = index
    fIndex.value = futureIndex
    return false
}
const handleDragEnd = () => {
    const _inventory = Object.assign([], inventoryStore.inventory);
    const mItem = ref(inventoryStore.inventory[mIndex.value]);
    const fItem = ref(inventoryStore.inventory[fIndex.value]);
    _inventory[mIndex.value] = fItem.value;
    _inventory[fIndex.value] = mItem.value;
    move.value = false
    inventoryStore.inventory = _inventory;
}
</script>
<style scoped>
.inventory {
    width: 100%;
    height: 100%;
    position: relative;
    border-radius: 0.75em;
    border: 1px solid;
    overflow: hidden;
}

.wrap {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(5, 1fr);
    border: 1px solid;
    height: 100%;
    border-radius: 0.75em;
}

.sortable-chosen {
    background-color: #242424;
    opacity: 1 !important;
    border: 1px solid rgba(77, 77, 77, 1);
    border-radius: 24px !important;
    overflow: hidden;
    cursor: grabbing;
}

.sortable-ghost {
    border-radius: 0 !important;
}

.item {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    outline: 1px solid rgba(77, 77, 77, 1);
    position: relative;
    cursor: pointer;
}

.count {
    width: 16px;
    height: 16px;
    border: 1px solid;
    border-top-left-radius: 6px;
    position: absolute;
    font-size: 0.6rem;
    line-height: 0.75rem;
    right: 1px;
    bottom: 1px;
}
</style>