<template>
    <div class="container">
        <h1>Vue 3 Boodschappen + Store</h1>
        <AddGrocery />
        <GroceryTable />
    </div>
</template>

<script setup>
import GroceryTable from './GroceryTable.vue';
import AddGrocery from './CRUD/AddGrocery.vue';
</script>

<style scoped>
.container {
    text-align: center;
}
</style>
