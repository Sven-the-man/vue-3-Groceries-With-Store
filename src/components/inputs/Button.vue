<template>
    <button class="button" @click="onClick">
        <slot>Button</slot>
    </button>
</template>

<script setup>
defineProps({
    onClick: {
        type: Function,
        required: true,
    },
});
</script>

<style scoped>
.button {
    margin-top: 25%;
    margin-bottom: 25%;

    text-align: center;
}
</style>
