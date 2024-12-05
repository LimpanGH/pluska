import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    count: 0,
    darkMode: localStorage.getItem('darkMode') === 'true', // Retrieve saved mode from localStorage
  }),
  actions: {
    increment() {
      this.count++
    },
    toggleDarkMode() {
      this.darkMode = !this.darkMode
      localStorage.setItem('darkMode', String(this.darkMode)) // Save the preference in localStorage
    },
  },
  getters: {
    doubleCount: (state) => state.count * 2,
  },
})
