import { Ref, ref } from 'vue';
import { defineStore } from 'pinia';
import { actions } from './actions';
import * as getters from './getters';
import { IUser, IProject } from './types';

export const useRootStore = defineStore('rootStore', () => {
  const showModalAddPointing = ref(false);
  const userCollection: Ref<IUser[] | undefined> = ref([]);
  const projectCollection: Ref<IProject[] | undefined> = ref([]);
  
  return {
    showModalAddPointing,
    userCollection,
    projectCollection,
    ...actions,
    ...getters,
  }
})

