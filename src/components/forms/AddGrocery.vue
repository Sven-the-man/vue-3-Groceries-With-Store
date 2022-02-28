<template>
    <tr>
        <td><input id="name" v-model="grocery.name" type="text" placeholder="Product naam" /></td>
        <td><input id="amount" v-model="grocery.amount" type="number" placeholder="0" min="0" max="999" step="1" /></td>
        <td>
            <input id="price" v-model="grocery.price" type="number" placeholder="0" min="0" max="999" step="0.01" />
        </td>
        <td />
        <td><button @click="addGrocery">Stuur op!</button></td>
    </tr>
</template>

<script setup>
import {reactive} from 'vue';
import {addGroceryToList} from '/src/store/groceries.js';

const grocery = reactive({
    name: null,
    price: null,
    amount: null,
});

const addGrocery = () => {
    if (!grocery.name) return;
    if (!grocery.amount) return;
    if (!grocery.price) return;
    addGroceryToList({...grocery});
    grocery.name = null;
    grocery.price = null;
    grocery.amount = null;
};
</script>
