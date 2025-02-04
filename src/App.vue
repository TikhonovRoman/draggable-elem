<script setup>
import { computed } from 'vue';
import InventoryView from './views/InventoryView.vue';
const change = ()=>{
    document.documentElement.classList.toggle("light-mode");
}
</script>

<template>
<button class="change-theme-btn" @click="change()">Change Color Theme</button>
<InventoryView></InventoryView>
</template>

<style scoped>
.change-theme-btn{
    border-radius: 1em;
    font-weight:600;
}
</style>
