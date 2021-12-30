<template>
    <div>Homy</div>
    <button @click="login">Login</button>
    <p v-if="errorBag.loginFailure">{{ errorBag.loginFailure }}</p>
</template>

<script setup>
import {login, errorBag} from '../services/auth';
</script>
