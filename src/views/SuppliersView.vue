<script setup>
import { suppliers } from '@/data.js'
import Supplier from '@/components/Supplier.vue'
import { format } from 'timeago.js'
</script>

<template>
  <div class="suppliers">
    <h1>Liste des fournisseurs</h1>
    <Supplier v-for="supplier in suppliers" :key="supplier.id" v-bind="supplier"
              :checked-at="format(supplier.checkedAt)" />
  </div>
</template>

<style scoped>
.suppliers {
  display: flex;
  flex-direction: column;
  margin: 0 2rem;
}
</style>
