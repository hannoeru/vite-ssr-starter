<template>
  <h1>Home</h1>
  <div class="flex justify-center mb-4">
    <img src="../assets/logo.png" alt="logo">
  </div>
  <button class="px-3 py-2 bg-white border-2 rounded-xl focus:ring" @click="state.count++">
    count is: {{ state.count }}
  </button>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

const state = reactive({ count: 0 })
</script>

<style scoped>
h1,
a {
  color: green;
}
</style>
