<script
    setup
    lang="ts"
>
import {ref}         from 'vue';
import {UserService} from '../../../client';
import { IUser } from '../../../stores/rootStore/types';
import LoadingAnim from '../../../components/LoadingAnim.vue';


const users   = ref<IUser[]>([]);
const loading = ref<boolean>(true);
UserService
  .apiUsersGetCollection(1)
  .then((response): void => {
    loading.value = false;
    users.value   = response;
  });

// Props //

// Store//

// Computed //

// Variables //

// Life Cycle //

// Methods //

// Watcher //

</script>

<template>
  <LoadingAnim v-if="loading"/>
  <div v-else id="table-content">
    <div id="table-title">
      <h2>Listing des Collaborateurs</h2>
    </div>
    <div id="table-container">
      <table id="table">
        <thead>
          <tr>
            <th>Prénom</th>
            <th>Nom</th>
            <th>Matricule</th>
          </tr>
        </thead>
        <tbody d="table-body">
          <tr
              v-for="user in users"
          >
            <td>{{ user.firstName }}</td>
            <td>{{ user.lastName }}</td>
            <td>{{ user.matricule }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import './ListingUser';
</style>