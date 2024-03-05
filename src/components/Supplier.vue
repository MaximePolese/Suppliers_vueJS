<script setup>
const name = 'Mon fournisseur'
const status = false
const checkedAt = new Date()
</script>

<template>
  <div>
    <h1 class="green">{{ name }}</h1>
    <h3 v-if="status" class="green">En stock</h3>
    <h3 v-else class="red">Indisponible</h3>
    <h5>{{ checkedAt }}</h5>
  </div>
</template>

<style scoped>
.green {
  color: hsla(160, 100%, 37%, 1);
}

.red {
  color: red;
}
</style>