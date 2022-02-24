<template>
    <div class="grocery-table">
        <table class="styled-table">
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Hoeveelheid</th>
                    <th>Prijs</th>
                    <th>Subtotaal</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(grocery, index) in groceries" :key="index" class="active-row">
                    <td>{{ grocery.name }}</td>
                    <td>
                        <NumberInput v-model.number="grocery.amount" />
                    </td>
                    <td><NumberInput v-model.number="grocery.price" /></td>
                    <td>{{ (grocery.amount * grocery.price).toFixed(2) }},-</td>
                </tr>
                <tr class="grand-total">
                    <td colspan="3">Totaalbedrag:</td>
                    <td>{{ grandTotal }},-</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import {getGroceries} from '../store/groceries.js';
import NumberInput from './forms/NumberInput.vue';
import {reactive, computed} from '@vue/reactivity';

const groceries = reactive([...getGroceries]);

const grandTotal = computed(() =>
    groceries
        .reduce((total, {price, amount}) => {
            return (total += price * amount);
        }, 0)
        .toFixed(2),
);
</script>

<style scoped>
.new-grocery {
    text-align: center;
}

.styled-table {
    border-collapse: collapse;
    margin: 25px 0;
    font-size: 0.9em;
    font-family: sans-serif;
    min-width: 400px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
    margin-left: auto;
    margin-right: auto;
}
.styled-table thead tr {
    background-color: #009879;
    color: #ffffff;
    text-align: left;
}
.styled-table th,
.styled-table td {
    padding: 12px 15px;
}
.styled-table tbody tr {
    border-bottom: 1px solid #dddddd;
}
.styled-table tbody tr:nth-of-type(even) {
    background-color: #f3f3f3;
}

.styled-table tbody tr:last-of-type {
    border-bottom: 2px solid #009879;
}
.styled-table tbody tr.active-row {
    font-weight: bold;
    color: #009879;
}

.grand-total {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 16px;
    font-weight: bold;
    color: black;
    text-align: left;
}
</style>
