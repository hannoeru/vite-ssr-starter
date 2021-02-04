<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  id: String,
})

</script>

<template>
  <h1>Hello, {{ id }}</h1>
</template>
