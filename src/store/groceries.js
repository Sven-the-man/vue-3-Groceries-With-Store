import {reactive} from 'vue';

const state = reactive({
    groceries: [
        {name: 'Appels', price: 1.82, amount: 4},
        {name: 'Bananen', price: 1.32, amount: 3},
        {name: 'Peren', price: 1.38, amount: 5},
    ],
});

export const getGroceries = state.groceries;
