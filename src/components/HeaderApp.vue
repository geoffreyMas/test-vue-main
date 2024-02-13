<script setup lang="ts">

// Props //

// Store//

// Computed //

// Variables //

// Life Cycle //

// Methods //

// Watcher //

</script>

<template>
  <header id="app-header">
    <div id="header-container">
      <div id="header-container-logo">
        <img alt="logo" id="logo" src="@/assets/vue.svg"/>
        <router-link to="/">Acceuil</router-link>
        <router-link to="/projects">Chantiers</router-link>
        <router-link to="/users">Collaborateurs</router-link>
      </div>
      <h2>Test Kalitics</h2>
      <div id="header-container-login">
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
@import './HeaderApp';
</style>