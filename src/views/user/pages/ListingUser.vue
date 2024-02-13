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
  <div v-else class="table-content">
    <table>
      <thead>
        <tr>
          <th>Prénom</th>
          <th>Nom</th>
          <th>Matricule</th>
        </tr>
      </thead>
      <tbody>
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
</template>
