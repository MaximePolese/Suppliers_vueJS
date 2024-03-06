<script setup>
import Supplier from '@/components/Supplier.vue'
import { format } from 'timeago.js'

const suppliers = [
  {
    id: 1,
    name: 'Fournisseur 1',
    status: true,
    checkedAt: new Date()
  },
  {
    id: 2,
    name: 'Fournisseur 2',
    status: false,
    checkedAt: new Date()
  }
]

</script>

<template>
  <div class="suppliers">
    <h1>Liste des fournisseurs</h1>
    <Supplier v-for="supplier in suppliers" :key="supplier.id" v-bind="supplier" :checked-at="format(supplier.checkedAt)" />
  </div>
</template>

<style scoped>
.suppliers {
  display: flex;
  flex-direction: column;
  margin: 0 2rem;
}
</style>
