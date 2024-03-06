<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <RouterLink to="/"><img alt="Vue logo" class="logo" src="https://swaggrabber.com/wp-content/uploads/2023/05/Baby-yoda-1.svg" width="125" height="125" /></RouterLink>
    <div class="wrapper">
      <HelloWorld msg="De la spiruline, tu acheteras !" />
      <nav>
        <RouterLink to="/suppliers">Voir la liste des fournisseurs</RouterLink>
        <RouterLink to="/map">Voir la carte</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  display: flex;
}

.logo {
  display: block;
  margin: 1rem;
}

nav {
  width: 100%;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>
