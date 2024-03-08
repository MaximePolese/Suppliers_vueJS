<script setup>
import { deleteSupplier, modifySupplier } from '@/data.js'
import { ref } from 'vue'

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

//modifier un supplier
const newName = ref(null)
const newCheckedAt = new Date()
const newStatus = ref(false)
const newLat = ref(null)
const newLon = ref(null)
const modify = ref(false)

function modif(id) {
  modifySupplier(id, newName.value, newCheckedAt, newStatus.value, newLat.value, newLon.value)
  modify.value = false
}
</script>

<template>
  <div class="supplier">
    <div class="supplier-infos">
      <div class="infos">
        <h1 class="green">{{ name }}</h1>
        <h3 v-if="status === 1" class="green">En stock</h3>
        <h3 v-else class="red">Indisponible</h3>
        <h5>{{ checkedAt }}</h5>
      </div>
      <div class="bouton">
        <button id="but1" v-on:click="click(id)">DELETE</button>
        <button id="but2" v-on:click="modify = true">MODIFY</button>
      </div>
    </div>
    <div v-if="modify" class="formulaire">
      <form @submit.prevent="modif(id)" class="for">
        <div style="margin-bottom: 1rem">
          <label for="name">Supplier name : </label>
          <input type="text" name="name" id="name" v-model="newName" required />
        </div>
        <div style="margin-bottom: 1rem">
          <label for="latitude">Supplier latitude : </label>
          <input type="text" name="latitude" id="latitude" v-model="newLat" required />
        </div>
        <div style="margin-bottom: 1rem">
          <label for="longitude">Supplier longitude : </label>
          <input type="text" name="longitude" id="longitude" v-model="newLon" required />
        </div>
        <div style="margin-bottom: 1rem">
          <label for="status">Spiruline en stock : </label>
          <input type="checkbox" id="status" name="status" v-model="newStatus" />
        </div>
        <div>
          <button id="but2" type="submit">VALIDER</button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.supplier {
  border: solid var(--color-text);
  margin: 0 0 1rem 0;
}

.formulaire {
  padding: 0 0 0 1rem;
}

.supplier-infos {
  display: flex;
  justify-content: space-between;

}

.infos {
  padding: 0 0 1rem 1rem;

}

h1, h3, h5 {
  margin: 0;
}

.bouton {
  display: flex;
  align-items: end;
}

#but1 {
  width: 6rem;
  height: 2rem;
  background-color: red;
  border-radius: 1rem;
  margin: 0 1rem 1rem 0;
}

#but2 {
  width: 6rem;
  height: 2rem;
  background-color: #96D473;
  border-radius: 1rem;
  margin: 0 1rem 1rem 0;
}

.red {
  color: red;
}
</style>