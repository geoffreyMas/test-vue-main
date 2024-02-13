<script setup lang="ts">
import { RouterView } from 'vue-router';
import HeaderApp from './components/HeaderApp.vue';
</script>

<template>
  <div class="app-container">
    <HeaderApp></HeaderApp>
    <div id="app-nav">
      <div id="app-content">
        <RouterView class="app-content-route" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

.main {
  top: 0px;
}

#app-container {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;

  #app-nav {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;

    #app-content {
      width: 100%;
      position: relative;
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      flex: 1;

      .app-content-route {
        position: absolute;
        top: 70px;
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
