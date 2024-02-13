<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { rootStore } from '../../../main';
import PointingsService from '../pointings.service';
import { IPointings } from '../pointings.type';
import router from '../../../router';

const showErrorTime = ref(false);
const isValidate = ref(true);
const newPointing = ref({} as IPointings);
const userPointings = ref([] as IPointings[]);

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

watch(() => newPointing.value.clockingUser, 
(newVal) => {
  const id = newVal?.split('/')[2];
  if (id) {
    PointingsService.getUserPointingCollection(id)
    .then((response): void => {
      userPointings.value = response;
    });
  }
});

watch(() => newPointing.value.clockingProject, 
(newVal) => {
  const hasPointingOnProject = userPointings.value.filter((pointing) => pointing.clockingProject === newVal);
  if (hasPointingOnProject.length > 0) {
    console.log('déjà un chantier');
    // check la date
  }
});

watch(() => newPointing.value.dateStart, 
(newVal) => {
  console.log(newVal);
  // check si y'a des chantier à cette date
});

watch(() => newPointing.value.dateEnd, 
(newVal) => {
  if (parseInt(newVal) < 0 || parseInt(newVal) > 10) {
    showErrorTime.value = true;
  } else {
    showErrorTime.value = false;
  }
});

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
              /><br/>
              <label v-if="showErrorTime" class="error-message">Le temps de travail ne peut pas dépasser 10 heures</label>
            </div>
          </div>
        </div>
        <br/>
        <button 
          id="pointing-submit"
          :disabled="isValidate"
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