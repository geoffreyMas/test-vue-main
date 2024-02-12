<script
    setup
    lang="ts"
>
import {ref}            from 'vue';
import {ProjectService} from '../../../client';
import { IProject } from '../project.type';

const projects = ref<IProject[]>([]);
const loading  = ref<boolean>(true);
ProjectService
    .apiProjectsGetCollection(1)
    .then((response): void => {
      loading.value  = false;
      projects.value = response;
    });
</script>

<template>
  <table>
    <thead>
      <tr>
        <th>Nom</th>
        <th>Adresse</th>
        <th>Date de début</th>
        <th>Date de fin</th>
      </tr>
    </thead>
    <tbody>
      <tr v-if="loading">
        <td colspan="4">
          <i>Chargement en cours...</i>
        </td>
      </tr>
      <tr
          v-else
          v-for="project in projects"
      >
        <td>{{ project.name }}</td>
        <td>{{ project.address }}</td>
        <td>{{ project.dateStart }}</td>
        <td>{{ project.dateEnd }}</td>
      </tr>
    </tbody>
  </table>
</template>
