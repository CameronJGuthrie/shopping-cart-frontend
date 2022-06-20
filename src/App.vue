<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav class="flex flex-row">
      <RouterLink :to="{ name: 'shop' }"><span class="emph">The</span> Hardware Store</RouterLink>
      <div class="mx-auto" />
    </nav>
  </header>

  <main>
    <RouterView />
  </main>
</template>

<style scoped>
header {
  background-color: rgb(48, 70, 123);
  color: white;
  padding: 12px 16px 16px 16px;
}
nav a {
  text-decoration: none;
  font-size: 24px;
  font-weight: bold;
  line-height: 32px;
}

nav a.router-link-active {
  text-decoration: underline;
}

nav .wrapper {
  display: flex;
  flex-direction: row;
}

.emph {
  font-style: italic;
}
</style>

<style>
html {
  background-image: url('./assets/background.jpg');
  background-repeat: no-repeat;
  background-size: cover;
}
#app {
  margin: 0px auto;
  max-width: 1280px;
}
main {
  margin: 0px auto;
  max-width: 1200px;
  background-color: #434343;
  padding: 12px;
}
</style>

