<script setup>
defineProps({
  name: {
    type: String,
    required: true
  },
  status: {
    type: Boolean,
    required: true
  },
  checkedAt: {
    type: Date,
    required: true
  }
})
</script>

<template>
  <div class="supplier">
    <h1 class="green">{{ name }}</h1>
    <h3 v-if="status" class="green">En stock</h3>
    <h3 v-else class="red">Indisponible</h3>
    <h5>{{ checkedAt }}</h5>
  </div>
</template>

<style scoped>
.supplier {
  border: solid var(--color-text);
  padding: 0 0 1rem 1rem;
}

.red {
  color: red;
}
</style>