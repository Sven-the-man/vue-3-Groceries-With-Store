import {reactive, computed} from 'vue';
import {withState} from './helper';

const state = reactive({
    groceries: [
        {name: 'Appels', price: 1.8, amount: 4},
        {name: 'Bananen', price: 1.3, amount: 3},
    ],
});

//getters
const groceries = computed(() => state.groceries);

//setters(?)
// const insertPost = post => state.posts.push(post);

export default () => withState({groceries}, state);
