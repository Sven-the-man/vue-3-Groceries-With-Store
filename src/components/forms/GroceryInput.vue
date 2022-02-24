<template>
    <form @submit.prevent="create">
        <label for="name">Product naam</label>
        <input id="name" v-model="grocery.name" type="text" />
        <br />
        <label for="amount">Hoeveelheid</label>
        <input id="amount" v-model="grocery.amount" type="number" />
        <br />
        <label for="price">Prijs</label>
        <input id="price" v-model="grocery.price" type="number" />
        <br />
        <button>Stuur op!</button>
    </form>
</template>

<script setup>
defineProps({
    grocery: {
        type: Object,
        required: true,
    },
});
const emit = defineEmits(['create:grocery']);

const create = event => {
    if (!event.target) return;
    emit('create:grocery', event.target.value);
};
</script>
