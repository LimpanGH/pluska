<template>
  <h4>Saldo</h4>
  <h1 id="balance">{{ total }} kr</h1>
</template>

<script setup lang="ts">
// import { defineProps } from 'vue';

const props = defineProps({
  total: {
    type: Number,
    required: true,
  },
});
</script>
