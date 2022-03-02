<template>
    <tr v-for="(grocery, index) in groceries" :key="index" class="active-row">
        <td>
            <div v-if="!grocery.editable">{{ grocery.name }}</div>
            <div v-if="grocery.editable">
                <NameInput v-model="editedGrocery.name" />
            </div>
        </td>
        <td>
            <AmountInput v-if="!grocery.editable" v-model.number="grocery.amount" />
            <AmountInput v-if="grocery.editable" v-model.number="editedGrocery.amount" />
        </td>
        <td>
            <PriceInput v-if="!grocery.editable" v-model.number="grocery.price" />
            <PriceInput v-if="grocery.editable" v-model.number="editedGrocery.price" />
        </td>
        <td>{{ (grocery.amount * grocery.price).toFixed(2) }},-</td>
        <td>
            <Button v-if="!grocery.editable" @click="enterEditMode(grocery)">Pas aan</Button>
            <Button v-if="grocery.editable" @click="editGrocery(grocery.id, editedGrocery, grocery)">Sla op</Button>
            <Button @click="removeGroceryFromList(index)">Verwijder</Button>
        </td>
    </tr>
    <tr class="grand-total">
        <td colspan="3">Totaalbedrag:</td>
        <td>{{ grandTotal }},-</td>
        <td />
    </tr>
</template>

<script setup>
import {getGroceriesFromStore, removeGroceryFromList, editGroceryFromList} from '../store/groceries.js';
import AmountInput from './inputs/Amount.vue';
import PriceInput from './inputs/Price.vue';
import NameInput from './inputs/Name.vue';
import Button from './inputs/Button.vue';
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
    name: "Nieuwe boodschap",
    amount: 0,
    price: 0,
    editable: false,
});

const enterEditMode = grocery => {
    return (grocery.editable = true);
};

const editGrocery = (id, {...editedGrocery}, grocery) => {
    editGroceryFromList(id, {...editedGrocery});
    grocery.editable = false;
    editedGrocery.name = null;
};
</script>
