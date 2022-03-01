<template>
    <div class="grocery-table">
        <table class="styled-table">
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Hoeveelheid</th>
                    <th>Prijs</th>
                    <th>Subtotaal</th>
                    <th />
                </tr>
            </thead>
            <tbody>
                <AddGrocery />
                <GroceryTable />
            </tbody>
        </table>
    </div>
</template>

<script setup>
import AddGrocery from './forms/AddGrocery.vue';
import GroceryTable from './GroceryTable.vue';
</script>

<style>
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
    text-align: center;
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
