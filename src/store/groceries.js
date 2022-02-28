import {reactive} from 'vue';

const state = reactive({
    groceries: [
        {name: 'Appels', price: 1.82, amount: 4},
        {name: 'Peren', price: 1.66, amount: 3},
    ],
});

export const getGroceriesFromStore = state.groceries;

export const removeGroceryFromList = index => state.groceries.splice(index, 1);

export const addGroceryToList = grocery => state.groceries.push(grocery);
