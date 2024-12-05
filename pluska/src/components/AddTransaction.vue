<template>
  <h3>Ny transaktion</h3>
  <form id="form" @submit.prevent="onSubmit">
    <div class="form-control">
      <label for="text">Text</label>
      <input type="text" id="text" placeholder="Titel..." v-model="text" />
    </div>
    <div class="form-control">
      <label for="amount">Summa <br /> </label>
      <input type="number" id="amount" placeholder="Summa..." v-model="amount" />
    </div>
    <button class="btn">Utför</button>
  </form>
</template>

<script setup lang="ts">
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'
import { ref } from 'vue'

const text = ref('')
const amount = ref('')

const emit = defineEmits(['transactionSubmitted'])

const onSubmit = () => {
  if (!text.value || !amount.value) {
    toast.error('Båda fält måste vara ifyllda.')
    return
  }

  const transactionData = {
    text: text.value,
    amount: parseFloat(amount.value),
  }

  emit('transactionSubmitted', transactionData)
  text.value = ''
  amount.value = ''
}
</script>
