import { createRouter, createWebHistory } from 'vue-router';
import NavBarHeader from '../components/NavBarHeader.vue'
import MainHome from '../components/MainHome.vue'
import NavSobre from '../components/NavSobre.vue'
import NavCasos from '../components/NavCasos.vue'
import NavTestemunhos from '../components/NavTestemunhos.vue';
import NavContatos from '../components/NavContatos.vue';
import NavFooter from '../components/NavFooter.vue';

const routes = [
  {path: '/', component: MainHome },
  { path: '/home', component: MainHome },
  { path: '/contatos', component: NavContatos },
  { path: '/casos', component: NavCasos },
  { path: '/serviços', component: NavCasos },
  { path: '/testemunhos', component: NavCasos },

];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
