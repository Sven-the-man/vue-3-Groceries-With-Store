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
   margin: 5px;
   width: 80px;
}
</style>
