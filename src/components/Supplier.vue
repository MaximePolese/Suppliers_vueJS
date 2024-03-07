<script setup>
import { deleteSupplier } from '@/data.js'

defineProps({
  id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  status: {
    type: Number, // Normalement Boolean
    required: true
  },
  checkedAt: {
    type: String, // Normalement Date
    required: true
  },
  latitude: {
    type: String, // Normalement Float
    required: true
  },
  longitude: {
    type: String, // Normalement Float
    required: true
  }
})

function click(id) {
  deleteSupplier(id)
}
</script>

<template>
  <div class="supplier">
    <h1 class="green">{{ name }}</h1>
    <h3 v-if="status === 1" class="green">En stock</h3>
    <h3 v-else class="red">Indisponible</h3>
    <h5>{{ checkedAt }}</h5>
    <button v-on:click="click(id)">DELETE</button>
  </div>
</template>

<style scoped>
.supplier {
  border: solid var(--color-text);
  padding: 0 0 1rem 1rem;
  margin: 0 0 1rem 0;
}

h1, h3, h5 {
  margin: 0;
}

button {
  width: 6rem;
  height: 2rem;
  background-color: red;
  border-radius: 1rem;
  margin-top: 1rem;
}

.red {
  color: red;
}
</style>