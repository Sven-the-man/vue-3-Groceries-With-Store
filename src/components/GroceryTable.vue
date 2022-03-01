<template>
    <tr v-for="(grocery, index) in groceries" :key="index" class="active-row">
        <td>
            <div v-if="!grocery.editable">{{ grocery.name }}</div>
            <div v-if="grocery.editable">
                <input v-model="editedGrocery.name" type="text" :placeholder="grocery.name" />
            </div>
        </td>
        <td>
            <AmountInput v-model.number="grocery.amount" />
        </td>
        <td>
            <PriceInput v-model.number="grocery.price" />
        </td>
        <td>{{ (grocery.amount * grocery.price).toFixed(2) }},-</td>
        <td>
            <button v-if="!grocery.editable" @click="enterEditMode(grocery)">Pas aan</button>
            <button v-if="grocery.editable" @click="editGrocery(grocery.id, editedGrocery, grocery)">Sla op</button>
            <button @click="removeGroceryFromList(index)">Verwijder</button>
        </td>
    </tr>
    <tr class="grand-total">
        <td colspan="3">Totaalbedrag:</td>
        <td>{{ grandTotal }},-</td>
        <td />
    </tr>
    <button @click="callGroceries">Call groceries</button>
</template>

<script setup>
import {getGroceriesFromStore, removeGroceryFromList, editGroceryFromList, callGroceries} from '../store/groceries.js';
import AmountInput from './forms/AmountInput.vue';
import PriceInput from './forms/PriceInput.vue';
import {reactive, computed} from '@vue/reactivity';

const groceries = reactive(getGroceriesFromStore);

const grandTotal = computed(() =>
    groceries
        .reduce((total, {price, amount}) => {
            return (total += price * amount);
        }, 0)
        .toFixed(2),
);

const editedGrocery = reactive({
    name: null,
    amount: 0,
    price: 0,
    editable: false,
});

const enterEditMode = grocery => {
    return (grocery.editable = true);
};

const editGrocery = (id, editedGrocery, grocery) => {
    editGroceryFromList(id, editedGrocery);
    grocery.editable = false;
    editedGrocery.name = null;
};
</script>
