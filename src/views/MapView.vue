<script setup>
import { getSuppliers } from '@/data.js'
import { LMap, LTileLayer, LMarker } from '@vue-leaflet/vue-leaflet'
import L from 'leaflet'
import { ref } from 'vue'

const suppliers = ref([])
const loading = ref(true)
const errormsg = ref(null)
const zoom = ref(10)
getSuppliers().then(response => {
  suppliers.value = response.suppliers
  loading.value = response.loading
  errormsg.value = response.error
})
</script>

<template>
  <div class="map">
    <h1>Carte des fournisseurs</h1>
    <p>{{ loading ? 'Chargement' : 'Suppliers chargés' }}</p>
    <p v-if="errormsg">{{ errormsg }}</p>
    <div class="leflet-map">
      <l-map ref="map" v-model:zoom="zoom" :center="[45.18486504179179,  5.731181509376984]">
        <l-tile-layer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          layer-type="base"
          name="OpenStreetMap"
        ></l-tile-layer>
        <l-marker v-for="supplier in suppliers" :key="supplier.id" v-bind="supplier"
                  :lat-lng="[supplier.latitude, supplier.longitude]"></l-marker>
      </l-map>
    </div>
  </div>
</template>

<style scoped>
.map {
  margin: 0 2rem;
}

.leflet-map {
  height: 700px;
}
</style>