<script setup lang="ts">
import { v4 as uuidv4 } from 'uuid'
import { ref, computed, onMounted } from 'vue'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

import Balance from '../components/BalanceView.vue'
import IncomeExpenses from '../components/IncomeExpenses.vue'
import TransactionList from '../components/TransactionList.vue'
import AddTransaction from '../components/AddTransaction.vue'
import Header from '../components/HeaderView.vue'

interface Transaction {
  id: string // or 'number', depending on your ID type
  text: string
  amount: number
}

const transactions = ref<Transaction[]>([])

onMounted(() => {
  const savedTransactions = JSON.parse(localStorage.getItem('transactions') || '[]')
  if (savedTransactions.length) {
    transactions.value = savedTransactions
  }
})

const total = computed(() =>
  transactions.value.reduce((acc, transaction) => acc + transaction.amount, 0),
)

const income = computed(() => {
  return parseFloat(
    transactions.value
      .filter((transaction) => transaction.amount > 0)
      .reduce((acc, transaction) => acc + transaction.amount, 0)
      .toFixed(2),
  )
})

const expenses = computed(() => {
  return parseFloat(
    transactions.value
      .filter((transaction) => transaction.amount < 0)
      .reduce((acc, transaction) => acc + transaction.amount, 0)
      .toFixed(2),
  )
})

const handleTransactionSubmitted = (transactionData: Transaction) => {
  transactions.value.push({
    id: generateUniqueId(),
    text: transactionData.text,
    amount: transactionData.amount,
  })

  saveTransactionsToLocalStorage()
  toast.success('Transaktion utförd.')
}

const generateUniqueId = () => uuidv4()

const handleTransactionDeleted = (id: string) => {
  transactions.value = transactions.value.filter((transaction) => transaction.id !== id)
  saveTransactionsToLocalStorage()
  toast.success('Transaktion borttagen.')
}

const saveTransactionsToLocalStorage = () => {
  localStorage.setItem('transactions', JSON.stringify(transactions.value))
}
const home = () => {
  window.location.href = '/'
}
</script>

<template>
  <div>
    <button class="home-btn" @click="home">Hem</button>
  </div>
  <Header class="header" />
  <div class="container">
    <Balance :total="total" />
    <IncomeExpenses :income="income" :expenses="expenses" />
    <TransactionList :transactions="transactions" @transactionDeleted="handleTransactionDeleted" />
    <AddTransaction @transactionSubmitted="handleTransactionSubmitted" />
  </div>
</template>

<style scoped>
.home-btn {
  background: url('../assets/home.svg') no-repeat;
  width: 50px;
  height: 50px;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 20px;
  left: 20px;
  font-size: 2rem;
}

.container {
  margin: 30px auto;
  width: 400px;
}

.header {
}
</style>
