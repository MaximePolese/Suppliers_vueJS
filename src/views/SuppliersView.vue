<script setup>
import Supplier from '@/components/Supplier.vue'

const supplier = {
  id: 1,
  name: 'Mon fournisseur',
  status: true,
  checkedAt: new Date()
}

</script>

<template>
  <div class="suppliers">
    <h1>Liste des fournisseurs</h1>
    <Supplier v-bind="supplier" />
  </div>
</template>

<style scoped>
.suppliers {
  display: flex;
  flex-direction: column;
  margin: 0 2rem;
}
</style>