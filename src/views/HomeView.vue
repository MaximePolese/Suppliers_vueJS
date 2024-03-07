<script setup>
import { addSupplier } from '@/data.js'
import { ref } from 'vue'

const name = ref()
const checkedAt = new Date()
const status = false
const lat = ref()
const lon = ref()

function click() {
  addSupplier(name.value, checkedAt, status, lat.value, lon.value)
  name.value = null
  lat.value = null
  lon.value = null
}
</script>

<template>
  <div class="formulaire">
    <h1>Ajouter un fournisseur</h1>
    <form @submit.prevent="click" class="for">
      <div style="margin-bottom: 1rem">
        <label for="name">Supplier name : </label>
        <input type="text" name="name" id="name" v-model="name" required />
      </div>
      <div style="margin-bottom: 1rem">
        <label for="latitude">Supplier latitude : </label>
        <input type="text" name="latitude" id="latitude" v-model="lat" required />
      </div>
      <div style="margin-bottom: 1rem">
        <label for="longitude">Supplier longitude : </label>
        <input type="text" name="longitude" id="longitude" v-model="lon" required />
      </div>
      <div style="margin-bottom: 1rem">
        <label for="status">Spiruline en stock : </label>
        <input v-on:click="status = !status" type="checkbox" id="status" name="status" />
      </div>
      <div>
        <button type="submit">ADD</button>
      </div>
    </form>
  </div>
</template>

<style scoped>
.formulaire {
  margin: 0 2rem;
}

button {
  width: 6rem;
  height: 2rem;
  background-color: #96D473;
  border-radius: 1rem;
}
</style>