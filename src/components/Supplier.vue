<script setup>
defineProps({
  name: {
    type: String,
    required: true
  },
  status: {
    type: Number,
    required: true
  },
  checkedAt: {
    type: String,
    required: true
  },
  latitude: {
    type: String,
    required: true
  },
  longitude: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="supplier">
    <h1 class="green">{{ name }}</h1>
    <h3 v-if="status === 1" class="green">En stock</h3>
    <h3 v-else class="red">Indisponible</h3>
    <h5>{{ checkedAt }}</h5>
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

.red {
  color: red;
}
</style>