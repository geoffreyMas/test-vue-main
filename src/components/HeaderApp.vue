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
        <router-link class="tab-button" to="/">Acceuil</router-link>
        <router-link class="tab-button" to="/projects">Chantiers</router-link>
        <router-link class="tab-button" to="/users">Collaborateurs</router-link>
        <router-link class="tab-button" to="/pointings">Pointages</router-link>
      </div>
      <h2>Test Kalitics</h2>
      <div id="header-container-login">
        <div id="header-container-login-menu">
          <button
            id="right-side-profil-menu"
          >
            <div class="profil-initials">GM</div>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
@import './HeaderApp';
</style>