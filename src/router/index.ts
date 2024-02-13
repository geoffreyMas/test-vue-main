import {
    createRouter,
    createWebHashHistory,
}                       from 'vue-router';
import Home             from '../views/home/pages/Home.vue';
import ListingProject   from '../views/project/pages/ListingProject.vue';
import ListingUser      from '../views/user/pages/ListingUser.vue';
import ListingPointing  from '../views/pointing/pages/ListingPointing.vue';
import AddPointing      from '../views/pointing/pages/AddPointing.vue';
  
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/projects',
    name: 'projects',
    component: ListingProject,
  },
  {
    path: '/users',
    name: 'users',
    component: ListingUser,
  },
  {
    path: '/pointings',
    name: 'pointings',
    component: ListingPointing,
  },
  {
    path: '/pointings/add',
    name: 'add-pointings',
    component: AddPointing,
  }
];

const router = createRouter({
                              history: createWebHashHistory(),
                              routes,
                          });

export default router
  