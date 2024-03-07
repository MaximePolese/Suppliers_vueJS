import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const suppliersStore = defineStore('suppliers', () => {
  const suppliers = ref([])
  const loading = ref(true)
  const errormsg = ref(null)

  return { suppliers, loading, errormsg }
})