<template>
  <div class="inc-exp-container">
    <div>
      <h4>Inkomster</h4>
      <p id="money-plus" class="money plus">+{{ income }} kr</p>
    </div>
    <div>
      <h4>Utgifter</h4>
      <p id="money-minus" class="money minus">{{ expenses }} kr</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  income: {
    type: Number,
    required: true,
  },
  expenses: {
    type: Number,
    required: true,
  },
})
</script>
