import {
    createRouter,
    createWebHashHistory,
}                       from 'vue-router';
import Home             from '../views/home/pages/Home.vue';
import ListingProject   from '../views/project/pages/ListingProject.vue';
import ListingUser      from '../views/user/pages/ListingUser.vue';
import ListingPointing  from '../views/pointing/pages/ListingPointing.vue'
  
const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/projects',
    component: ListingProject,
  },
  {
    path: '/users',
    component: ListingUser,
  },
  {
    path: '/pointings',
    component: ListingPointing,
  }
];

const router = createRouter({
                              history: createWebHashHistory(),
                              routes,
                          });

export default router
  