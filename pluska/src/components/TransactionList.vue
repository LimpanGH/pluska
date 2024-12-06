<script setup lang="ts">
import type { PropType } from 'vue'

interface Transaction {
  id: string
  text: string
  amount: number
}

defineProps({
  transactions: {
    type: Array as PropType<Transaction[]>,
    required: true,
  },
})

const emit = defineEmits<{
  (e: 'transactionDeleted', id: string): void
}>()

const deleteTransaction = (id: string) => {
  emit('transactionDeleted', id)
}
</script>

<template>
  <h3>Historik</h3>

  <ul v-if="transactions.length > 0" id="list" class="list">
    <li
      v-for="transaction in transactions"
      :key="transaction.id"
      :class="transaction.amount < 0 ? 'minus' : 'plus'"
    >
      {{ transaction.text }} <span>{{ transaction.amount }} kr</span>
      <button class="delete-btn" @click="deleteTransaction(transaction.id)">x</button>
    </li>
  </ul>
  <p v-else>Inga transaktioner sparade, lägg till ny transaktion.</p>
</template>

<style scoped>
.minus {
  color: red;
}
.plus {
  color: green;
}
.delete-btn {
  cursor: pointer;

  background: red;
  border: none;
  color: white;
  font-weight: bold;
}
</style>
