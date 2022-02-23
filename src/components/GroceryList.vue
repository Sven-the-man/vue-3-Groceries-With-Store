<template>
    <div class="container">
        <h1>Vue 3 Boodschappen + Store</h1>
        {{ postsCount }}
        <button @click="insertPost(post)">Save</button>
    </div>
</template>

<script>
// import GroceryTable from './GroceryTable.vue';
// import AddGrocery from './CRUD/AddGrocery.vue';
import GroceriesStore from '../store/groceries.js';
import {ref} from 'vue';

export default {
    setup() {
        const groceries = GroceriesStore();
        const post = ref('');
        return {...groceries, post};
    },
};
</script>

<style scoped>
.container {
    text-align: center;
}
</style>
