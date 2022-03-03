import {reactive} from 'vue';

const groceries = reactive(
     [
        {id: 0, name: 'Appels', price: 1.82, amount: 4, editable: false},
        {id: 1, name: 'Peren', price: 1.66, amount: 3, editable: false},
    ],
);

export const getGroceriesFromStore = groceries;

export const addGroceryToList = grocery => groceries.push(grocery);

export const removeGroceryFromList = index => groceries.splice(index, 1);

export const editGroceryFromList = (id, editedGrocery) => {
    let foundIndex = groceries.findIndex(grocery => grocery.id == id);
    editedGrocery.id = id;
    groceries[foundIndex] = editedGrocery;
};
