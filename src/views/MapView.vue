<script setup>
import { LMap, LTileLayer } from '@vue-leaflet/vue-leaflet'
import L from 'leaflet'
import { ref } from 'vue'

const zoom = ref(10)
</script>

<template>
  <div class="map">
    <h1>Carte des fournisseurs</h1>
    <div class="leflet-map">
      <l-map ref="map" v-model:zoom="zoom" :center="[45.18486504179179,  5.731181509376984]">
        <l-tile-layer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          layer-type="base"
          name="OpenStreetMap"
        ></l-tile-layer>
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