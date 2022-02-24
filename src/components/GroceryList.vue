<template>
    <div class="container">
        <AddGrocery />
        <GroceryTable />
    </div>
</template>

<script setup>
import GroceryTable from './GroceryTable.vue';
import AddGrocery from './AddGrocery.vue';
</script>

<style scoped>
.container {
    text-align: center;
}
</style>
