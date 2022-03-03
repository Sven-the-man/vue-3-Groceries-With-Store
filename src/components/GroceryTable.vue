<template>
    <tr v-for="(grocery, index) in groceries" :key="index" class="active-row">
        <td>
            <!-- TODO :: use v-else -->
            <div v-if="!grocery.editable">{{ grocery.name }}</div>
            <div v-if="grocery.editable">
                <NameInput v-model="editedGrocery.name" />
            </div>
        </td>
        <td>
            <!-- TODO :: why is amount editable both times? -->
            <AmountInput v-if="!grocery.editable" v-model.number="grocery.amount" />
            <AmountInput v-if="grocery.editable" v-model.number="editedGrocery.amount" />
        </td>
        <td>
            <!-- TODO :: why is price editable both times? -->
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
        <!-- TODO :: this can be the result: 9.84,-. That's not a correct currency value -->
        <td>{{ grandTotal }},-</td>
        <td />
    </tr>
</template>

<script setup>
import {getGroceriesFromStore, removeGroceryFromList, editGroceryFromList} from '../store/groceries.js';
// TODO :: no need for amountinput and priceinput when there is only one difference between the two
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
    name: 'Nieuwe boodschap',
    amount: 0,
    price: 0,
    editable: false,
});

const enterEditMode = grocery => {
    groceries.forEach(grocery => (grocery.editable = false));
    grocery.editable = true;
    // TODO :: set name to grocery being edited, need to type the name again, even if we don't want to change it
    editedGrocery.name = null;
};

// TODO :: too much unpacking
const editGrocery = (id, {...editedGrocery}, grocery) => {
    editGroceryFromList(id, {...editedGrocery});
    grocery.editable = false;
    editedGrocery.name = null;
};
</script>
