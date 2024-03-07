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
//Géolocalisation
let lat = 0
let lon = 0

function maPosition(position) {
  console.log(position)
  lat = position.coords.latitude
  lon = position.coords.longitude
}

if (navigator.geolocation)
  navigator.geolocation.getCurrentPosition(maPosition)

const grogu = L.icon({
  iconUrl: 'https://swaggrabber.com/wp-content/uploads/2023/05/Baby-yoda-1.svg',
  iconSize: [50, 50]
})
</script>

<template>
  <div class="map">
    <h1>Carte des fournisseurs</h1>
    <div id="infoposition"></div>
    <p>{{ loading ? 'Chargement' : 'Suppliers chargés' }}</p>
    <p v-if="errormsg">{{ errormsg }}</p>
    <div class="leflet-map">
      <l-map ref="map" v-model:zoom="zoom" :center="[lat,  lon]">
        <l-tile-layer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          layer-type="base"
          name="OpenStreetMap"
        ></l-tile-layer>
        <l-marker v-for="supplier in suppliers" :key="supplier.id" v-bind="supplier"
                  :lat-lng="[supplier.latitude, supplier.longitude]"></l-marker>
        <l-marker :lat-lng="[lat, lon]" :icon="grogu"></l-marker>
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