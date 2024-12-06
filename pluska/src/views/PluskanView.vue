<script setup lang="ts">
import { v4 as uuidv4 } from 'uuid'
import { ref, computed, onMounted } from 'vue'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'
import { useRouter } from 'vue-router'

import Balance from '../components/BalanceView.vue'
import IncomeExpenses from '../components/IncomeExpenses.vue'
import TransactionList from '../components/TransactionList.vue'
import AddTransaction from '../components/AddTransaction.vue'
import Header from '../components/HeaderView.vue'

interface Transaction {
  id: string
  text: string
  amount: number
}

const API_URL = 'http://localhost:3001/transactions'
const transactions = ref<Transaction[]>([])
const router = useRouter()
const goToHome = () => router.push('/')

onMounted(async () => {
  await fetchTransactions()
})

const fetchTransactions = async () => {
  try {
    const response = await fetch(API_URL)
    if (!response.ok) throw new Error('Failed to fetch transactions.')
    transactions.value = await response.json()
  } catch (error) {
    console.error(error)
    toast.error('Kunde inte hämta transaktioner.')
  }
}

const total = computed(() =>
  transactions.value.reduce((acc, transaction) => acc + transaction.amount, 0),
)

const income = computed(() =>
  transactions.value
    .filter((transaction) => transaction.amount > 0)
    .reduce((acc, transaction) => acc + transaction.amount, 0),
)

const expenses = computed(() =>
  transactions.value
    .filter((transaction) => transaction.amount < 0)
    .reduce((acc, transaction) => acc + transaction.amount, 0),
)

const handleTransactionSubmitted = async (transactionData: Transaction) => {
  const newTransaction: Transaction = {
    id: uuidv4(),
    text: transactionData.text,
    amount: transactionData.amount,
  }

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newTransaction),
    })
    if (!response.ok) throw new Error('Failed to add transaction.')

    transactions.value.push(newTransaction)
    toast.success('Transaktion tillagd.')
  } catch (error) {
    console.error(error)
    toast.error('Kunde inte lägga till transaktion.')
  }
}

const handleTransactionDeleted = async (id: string) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, { method: 'DELETE' })
    if (!response.ok) throw new Error('Failed to delete transaction.')

    transactions.value = transactions.value.filter((transaction) => transaction.id !== id)
    toast.success('Transaktion borttagen.')
  } catch (error) {
    console.error(error)
    toast.error('Kunde inte ta bort transaktion.')
  }
}
</script>

<template>
  <div>
    <button class="home-btn" @click="goToHome">Hem</button>
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
