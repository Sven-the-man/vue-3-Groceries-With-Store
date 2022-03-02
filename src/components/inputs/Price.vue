<template>
    <input type="number" min="0" max="999" step="0.01" :value="modelValue" placeholder="0" @input="update" />
</template>

<script setup>
defineProps({
    modelValue: {
        type: Number,
        required: true,
    },
});

const emit = defineEmits(['update:modelValue']);

const update = event => {
    if (!event.target) return;
    emit('update:modelValue', event.target.value);
};
</script>

<style scoped>
input[type='number'] {
    width: 60px;
}
</style>
