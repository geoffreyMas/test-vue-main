<script setup lang="ts">
import { computed, ref } from 'vue';
import { rootStore } from '../../../main';
import PointingsService from '../pointings.service';
import { IPointings } from '../pointings.type';
import router from '../../../router';

const showError = ref(false);
const isLoading = ref(false);
const newPointing = ref({} as IPointings)

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
  const startDate = new Date(newPointing.value.dateStart);
  const endDate = new Date(startDate.getTime() + (parseInt(newPointing.value.dateEnd) * 3600 * 1000));
  newPointing.value.dateStart = startDate.toISOString();
  newPointing.value.dateEnd = endDate.toISOString();
  PointingsService.addPointing(newPointing.value)
  .then((response): void => {
    router.push({name: 'pointings'});
  });
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
                <select v-model="newPointing.clockingUser">
                  <option value="choisir"> Choisir un collaborateur</option>
                  <option  v-for="user in rootStore.userCollection" :key="user.id" :value="'/users/' + user.id">{{user.lastName}}</option>
                </select>
              </div>
            </div>
            <div class="pointing-bloc-select">
              <div class="select">
                <select v-model="newPointing.clockingProject">
                  <option value="choisir"> Choisir un chantier</option>
                  <option  v-for="project in rootStore.projectCollection" :key="project.id" :value="'/projects/' + project.id">{{project.name}}</option>
                </select>
              </div>
            </div>
            <div>
              <div class="pointing-label">Renseigner une date :</div>
              <input
                v-model="newPointing.dateStart"
                autocomplete="off"
                name="date"
                type="date"
                rules="required"
                class="pointing-input"
              />
            </div>
            <div>
              <div class="pointing-label">Renseigner une durée :</div>
              <input
                v-model="newPointing.dateEnd"
                autocomplete="off"
                type="number"
                max="10"
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