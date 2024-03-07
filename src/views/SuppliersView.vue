<script setup>
import { getSuppliers } from '@/data.js'
import Supplier from '@/components/Supplier.vue'
import { format } from 'timeago.js'
import { ref } from 'vue'

const suppliers = ref([])
const loading = ref(true)
const errormsg = ref(null)

getSuppliers().then(response => {
  suppliers.value = response.suppliers
  loading.value = response.loading
  errormsg.value = response.error
})
</script>

<template>
  <div class="suppliers">
    <h1>Liste des fournisseurs</h1>
    <p>{{ loading ? 'Chargement' : 'Suppliers chargés' }}</p>
    <p v-if="errormsg">{{ errormsg }}</p>
    <Supplier v-for="supplier in suppliers" :key="supplier.id" v-bind="supplier"
              :checked-at="format(supplier.checkedAt)" />
  </div>
</template>

<style scoped>
.suppliers {
  margin: 0 2rem;
}
</style>
