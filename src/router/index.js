import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import MenuList from '../views/MenuList.vue';
import PesananList from '../views/PesananList.vue';
import LoginForm from '../components/LoginForm.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/menu',
    name: 'Menu',
    component: MenuList,
  },
  {
    path: '/pesanan',
    name: 'Pesanan',
    component: PesananList,
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginForm,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
