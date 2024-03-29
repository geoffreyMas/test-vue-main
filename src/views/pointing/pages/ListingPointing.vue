<script
    setup
    lang="ts"
>
import router from '../../../router';
import {onMounted, ref} from 'vue';
import PointingsService from '../pointings.service';
import { IPointings } from '../pointings.type';
import LoadingAnim from '../../../components/LoadingAnim.vue';
import { rootStore } from '../../../main';


const loading = ref<boolean>(true);
const page = ref<number>(1);
const pointingsCollection = ref<Array<IPointings>>([]);
const activeItem = ref(0);
const nextDisabled = ref(false);
const previousDisabled = ref(true);

// Props //

// Store//

// Computed //

// Variables //

// Life Cycle //

onMounted(() => {
  Promise.all([
    PointingsService.getPointings(page.value),
    PointingsService.getProjectInfos(),
    PointingsService.getUserInfos()
  ])
  .then(([responsePointings, responseProject, responseUser]) => {
    loading.value = false;
    pointingsCollection.value = responsePointings;
  });
});

// Methods //

// Method to call the next page of pointings
const callNextPage = () => {
  if (pointingsCollection.value.length === 30) {
    page.value += 1;
    PointingsService.getPointings(page.value)
    .then((response) => {
      pointingsCollection.value = response;
      if (pointingsCollection.value.length < 30) {
        nextDisabled.value = true;
      }
      if (page.value > 1) {
        previousDisabled.value = false;
      }
    });
  }
};

// Method to call the previous page of pointings
const callPreviousPage = () => {
  if (page.value > 1) {
    page.value -= 1;
    PointingsService.getPointings(page.value)
    .then((response) => {
      pointingsCollection.value = response;
      if (pointingsCollection.value.length === 30) {
        nextDisabled.value = false;
      }
      if (page.value === 1) {
        previousDisabled.value = true;
      }
    });
  }

};

// Method to select a raw on click
const selectOnClick = (id: number) => {
  activeItem.value = id;
};

// Method to redirect to the page to add a pointing
const addPointing = () => {
  router.push({name: 'add-pointings'})
}

// Watcher //

</script>

<template>
  <LoadingAnim v-if="loading"/>
  <div v-else id="table-content">
    <div id="table-title">
      <h2>Listing des Pointages</h2>
      <button @click="addPointing()" id="add-button" class="page-button">Ajouter Pointage</button>
    </div>
    <div id="table-container">
      <table id="table">
        <thead>
          <tr>
            <th>Collaborateur</th>
            <th>Chantier</th>
            <th>Date de début</th>
            <th>Durée</th>
          </tr>
        </thead>
        <tbody id="table-body">
          <tr
            v-for="pointing, index in pointingsCollection"
            @click="selectOnClick(index)"
            :class="{
              active: index === activeItem,
            }"
          >
            <td>{{ rootStore.getUserNameById(pointing.clockingUser) }}</td>
            <td>{{ rootStore.getProjectNameById(pointing.clockingProject) }}</td>
            <td>{{ rootStore.getFormatedDate(pointing.dateStart) }}</td>
            <td>{{ Date.parse(pointing.dateEnd) - Date.parse(pointing.dateStart)}} heures</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div>
      <button
        class="page-button"
        :disabled="previousDisabled"
        @click="callPreviousPage"
      >
        Précédent
      </button>
      <button
        class="page-button"
        :disabled="nextDisabled"
        @click="callNextPage"
      >
        Suivant
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import './ListingPointing';
</style>
