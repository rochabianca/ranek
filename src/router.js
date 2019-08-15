import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Produto from './views/Produto';
import Login from './views/Login';
import Usuario from './views/usuario/Usuario';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior() {
    return window.scrollTo({ top: 0, behavior: 'smooth' });
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/produto/:id',
      name: 'produto',
      component: Produto,
      props: true
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/usuario',
      name: 'usuario',
      component: Usuario
    }
  ]
});
