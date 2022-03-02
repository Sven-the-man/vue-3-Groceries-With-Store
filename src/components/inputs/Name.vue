<template>
    <input type="text" :value="modelValue" placeholder="Boodschap naam" @input="update" />
</template>

<script setup>
defineProps({
    modelValue: {
        required: true,
    },
});

const emit = defineEmits(['update:modelValue']);

const update = event => {
    if (!event.target) return;
    emit('update:modelValue', event.target.value);
};
</script>
