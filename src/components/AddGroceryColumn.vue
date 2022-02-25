<template>
    <tr>
        <td> <input id="name" v-model="grocery.name" type="text" /></td>
        <td><input id="amount" v-model="grocery.amount" type="number" /></td>
        <td><input id="price" v-model="grocery.price" type="number" /></td>
        <td></td>
        <td><button @click="addGrocery">Stuur op!</button></td>
    </tr>
</template>

<script setup>
import {reactive} from 'vue';
import {addGroceryToList} from '../store/groceries';

const grocery = reactive({
    name: null,
    price: null,
    amount: null,
});

const addGrocery = () => {
    
    if (!grocery.name) return;
    if (!grocery.amount) return;
    if (!grocery.price) return;
    addGroceryToList(grocery);
    grocery.name = null;
    grocery.price = null;
    grocery.amount = null;
};
</script>
