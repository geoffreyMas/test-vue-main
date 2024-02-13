import {createApp} from 'vue';
import { createPinia } from 'pinia';
import { useRootStore } from './stores/rootStore';
import router from './router';
import App from './App.vue';
import './style.css';



const app = createApp(App);

app.use(createPinia());
app.use(router);

// export stores
export const rootStore = useRootStore();

app.mount('#app');
