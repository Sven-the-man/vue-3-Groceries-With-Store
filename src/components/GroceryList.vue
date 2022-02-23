<template>
    <div class="container">
        <h1>Vue 3 Boodschappen + Store</h1>
        <AddGrocery />
        <GroceryTable />
        {{ groceries }}
    </div>
</template>

<script setup>
import GroceryTable from './GroceryTable.vue';
import AddGrocery from './CRUD/AddGrocery.vue';
import GroceriesStore from '../store/groceries.js';
// import {ref} from 'vue';

const groceries = GroceriesStore();
</script>

<style scoped>
.container {
    text-align: center;
}
</style>
