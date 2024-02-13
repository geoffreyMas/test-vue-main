import { rootStore } from '../../main';
import { computed, ComputedRef } from 'vue';

// return user name by id
const getUserNameById: ComputedRef<(value: string) => string> = computed(() => {
  return (value: string) => {
    const id = value.split('/')[2];
    if (rootStore) {
      const user = rootStore.userCollection?.find((user) => user.id === parseInt(id));
      if (user && user.lastName) {
        return user.lastName;
      }
      return '';
    } else {
      return '';
    }
  };
});

// return user name by id
const getProjectNameById: ComputedRef<(value: string) => string> = computed(() => {
  return (value: string) => {
    const id = value.split('/')[2];
    if (rootStore) {
      const project = rootStore.projectCollection?.find((project) => project.id === parseInt(id));
      if (project && project.name) {
        return project.name;
      }
      return '';
    } else {
      return '';
    }
  };
});

// return formated date
const getFormatedDate: ComputedRef<(value: string) => string> = computed(() => {
  return (value: string) => {
    const date = new Date(value);
    const hours = date.getHours() < 10 ? '0' + date.getHours().toString() : date.getHours().toString();
    const minutes = date.getMinutes() < 10 ? '0' + date.getMinutes().toString() : date.getMinutes().toString();
    const formatedDate = date.toLocaleDateString() + ' : ' + hours + ':' + minutes;
    return formatedDate;
  };
});

export {
  getUserNameById,
  getProjectNameById,
  getFormatedDate,
};
