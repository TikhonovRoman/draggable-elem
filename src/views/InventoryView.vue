<script setup>
import FooterBlock from '../components/footerBlock.vue';
import InventoryTable from '../components/inventoryTable.vue';
import Sidebar from '../components/sidebar.vue';
</script>

<template>
    <div class="container">
        <Sidebar></Sidebar>
        <InventoryTable></InventoryTable>
        <FooterBlock class="footer"></FooterBlock>
    </div>
</template>

<style scoped>
.container {
    display: grid;
    grid-template-columns: 30% auto;
    grid-template-rows: auto 12%;
    gap: 1.5em;
    width: 128vh;
    padding: 2em;
    margin: 0 auto;
}

.footer {
    grid-column: 1/3;
}
</style>