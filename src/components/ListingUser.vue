<script
    setup
    lang="ts"
>
import {ref}         from 'vue';
import {UserService} from '../client';

const users   = ref([]);
const loading = ref<boolean>(true);
UserService
    .apiUsersGetCollection(1)
    .then((response): void => {
      loading.value = false;
      users.value   = response;
    });
</script>

<template>
  <table>
    <thead>
      <tr>
        <th>Prénom</th>
        <th>Nom</th>
        <th>Matricule</th>
      </tr>
    </thead>
    <tbody>
      <tr v-if="loading">
        <td colspan="3">
          <i>Chargement en cours...</i>
        </td>
      </tr>
      <tr
          v-else
          v-for="user in users"
      >
        <td>{{ user.firstName }}</td>
        <td>{{ user.lastName }}</td>
        <td>{{ user.matricule }}</td>
      </tr>
    </tbody>
  </table>
</template>
