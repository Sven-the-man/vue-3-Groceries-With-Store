import {reactive, computed} from 'vue';
import {withState} from './helper';

const state = reactive({
    posts: ['post 1', 'post 2', 'post 3', 'post 4'],
});

//getters
const postsCount = computed(() => state.posts.length);

//setters
const insertPost = post => state.posts.push(post);

export default () => withState({postsCount, insertPost}, state);
