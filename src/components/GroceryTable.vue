<template>
    <tr v-for="(grocery, index) in groceries" :key="index" class="active-row">
        <td>
            <div v-if="!grocery.editable">{{ grocery.name }}</div>
            <div v-else>
                <NameInput v-model="editedGrocery.name" />
            </div>
        </td>
        <td>
            <div v-if="!grocery.editable">{{grocery.amount}}</div>
            <div v-else><NumberInput v-model.number="editedGrocery.amount" :step="1" /></div>
        </td>
        <td>
            <div v-if="!grocery.editable">{{'\u20AC' + grocery.price.toFixed(2)}}</div>
            <div v-else><NumberInput v-model.number="editedGrocery.price" :step="0.01" /></div>
        </td>
        <td>{{ '\u20AC' + (grocery.amount * grocery.price).toFixed(2) }}</td>
        <td>
            <Button v-if="!grocery.editable" @click="enterEditMode(grocery)">Pas aan</Button>
            <Button v-if="grocery.editable" @click="editGrocery(grocery.id, editedGrocery, grocery)">Sla op</Button>
            <Button @click="removeGroceryFromList(index)">Verwijder</Button>
        </td>
    </tr>
    <tr class="grand-total">
        <td colspan="3">Totaalbedrag:</td>
        <td>{{ grandTotal }}</td>
        <td />
    </tr>
</template>

<script setup>
import {getGroceriesFromStore, removeGroceryFromList, editGroceryFromList} from '../store/groceries.js';
import NumberInput from './inputs/Number.vue';
import NameInput from './inputs/Name.vue';
import Button from './inputs/Button.vue';
import {reactive, computed} from '@vue/reactivity';

const groceries = reactive(getGroceriesFromStore);

const grandTotal = computed(() =>
'\u20AC' +(groceries
        .reduce((total, {price, amount}) => {
            return (total += price * amount);
        }, 0)
        .toFixed(2))
); 

const editedGrocery = reactive({
    name: null,
    amount: 0,
    price: 0,
    editable: false,
});

const enterEditMode = grocery => {
    groceries.forEach(grocery => (grocery.editable = false));
    grocery.editable = true;
    editedGrocery.name = grocery.name;
    editedGrocery.amount = grocery.amount;
    editedGrocery.price = grocery.price;
};

// TODO :: too much unpacking
const editGrocery = (id, {...editedGrocery}, grocery) => {
    editGroceryFromList(id, {...editedGrocery});
    grocery.editable = false;
    editedGrocery.name = null;
};
</script>
