<template>
    <input type="text" :value="modelValue" placeholder="Product naam" @input="update" />
</template>

<script setup>
defineProps({
    modelValue: {
        type: String,
        required: true,
    },
});

const emit = defineEmits(['update:modelValue']);

const update = event => {
    if (!event.target) return;
    emit('update:modelValue', event.target.value);
};
</script>
