<template>
    <tr>
        <td><NameInput v-model="grocery.name" /></td>
        <td><AmountInput v-model.number="grocery.amount" /></td>
        <td><PriceInput v-model.number="grocery.price" /></td>
        <td />
        <td><Button @click="addGrocery">Stuur op!</Button></td>
    </tr>
</template>

<script setup>
import {reactive} from 'vue';
import AmountInput from '../inputs/Amount.vue';
import NameInput from '../inputs/Name.vue';
import PriceInput from '../inputs/Price.vue';
import Button from '../inputs/Button.vue';
import {addGroceryToList, getGroceriesFromStore} from '/src/store/groceries.js';

const groceries = reactive(getGroceriesFromStore);

const grocery = reactive({
    id: groceries.length,
    name: null,
    price: null,
    amount: null,
    editable: false,
});

const addGrocery = () => {
    if (!grocery.name) return;
    if (!grocery.amount) return;
    if (!grocery.price) return;
    addGroceryToList({...grocery});
    grocery.name = null;
    grocery.price = null;
    grocery.amount = null;
    grocery.id = groceries.length;
};
</script>
