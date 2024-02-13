<script setup lang="ts">
import { computed, ref } from 'vue';
import { rootStore } from '../../../main';

const showError = ref(false);
const isLoading = ref(false);

// Props //

// Store//

// Computed //

const getTitle = computed<string>(() => {
    return 'Ajouter un pointage';
});

// Variables //

// Life Cycle //

// Methods //

const submitForm = () => {
  console.log('submit');
}

// Watcher //

</script>

<template>
  <div id="add_wrapper_content">
    <div id="add_header">
      <h2 id="add_title" class="ceading3">
        {{ getTitle }}
      </h2>
    </div>
    <div id="add-pointing-form">
      <form
        id="pointing-form"
        @submit.prevent="submitForm"
      >
        <div class="pointing-container">
          <div class="pointing-input-container">
            <div class="pointing-bloc-select">
              <div class="select">
                <select>
                  <option value="choisir"> Choisir un collaborateur</option>
                  <option  v-for="user in rootStore.userCollection" :key="user.id">{{user.lastName}}</option>
                </select>
              </div>
            </div>
            <div>
              <div class="pointing-label">Chantier :</div>
              <input
                autocomplete="off"
                name="project"
                rules="required"
                class="pointing-input"
              />
            </div>
            <div>
              <div class="pointing-label">Date :</div>
              <input
                autocomplete="off"
                name="date"
                rules="required"
                class="pointing-input"
              />
            </div>
            <div>
              <div class="pointing-label">Durée :</div>
              <input
                autocomplete="off"
                name="duration"
                rules="required"
                class="pointing-input"
              />
            </div>
          </div>
        </div>
        <span v-if="showError" class="error-message">Error</span>
        <br/>
        <button 
          id="pointing-submit"
          :disabled="isLoading"
        >
        Ajouter
        </button>
      </form>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import './AddPointing';
</style>