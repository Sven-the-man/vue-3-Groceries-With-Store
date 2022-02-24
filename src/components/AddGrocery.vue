<template>
    <GroceryInput :grocery="grocery" @create.prevent="consoleLog" />
    {{ grocery }}
</template>

<script setup>
import GroceryInput from './forms/GroceryInput.vue';

const grocery = {
    name: null,
    price: null,
    amount: null,
};

function consoleLog() {
    return grocery;
}
</script>
