<template>
  <h1>Test Kalitics</h1>
  <p class="router-links">
    <router-link to="/">Acceuil</router-link>
    <router-link to="/projects">Chantiers</router-link>
    <router-link to="/users">Collaborateurs</router-link>
  </p>
  <router-view></router-view>
</template>

<style scoped>
.router-links *
{
  margin-left  : 5px;
  margin-right : 5px;
}
</style>
