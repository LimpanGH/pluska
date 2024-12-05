
<script setup lang="ts">
interface Transaction {
  id: string
  text: string
  amount: number
}

const props = defineProps({
  transactions: {
    type: Array as () => Transaction[],
    required: true,
  },
})

const emit = defineEmits(['transactionDeleted'])

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
