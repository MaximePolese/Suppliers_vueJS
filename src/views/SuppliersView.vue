<script setup>
import Supplier from '@/components/Supplier.vue'
</script>

<template>
  <div class="suppliers">
    <h1>Liste des fournisseurs</h1>
    <Supplier />
  </div>
</template>

<style>

.suppliers {
  display: flex;
  flex-direction: column;
  margin: 0 2rem;
}

</style>