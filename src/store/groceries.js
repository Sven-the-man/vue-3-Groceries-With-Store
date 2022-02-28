import {reactive} from 'vue';

const state = reactive({
    groceries: [
        {id: 0, name: 'Appels', price: 1.82, amount: 4, editable: false},
        {id: 1, name: 'Peren', price: 1.66, amount: 3, editable: false},
    ],
});

export const getGroceriesFromStore = state.groceries;

export const addGroceryToList = grocery => state.groceries.push(grocery);
export const removeGroceryFromList = index => state.groceries.splice(index, 1);


   



