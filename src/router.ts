import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('./pages/Home.vue'),
  },
  {
    path: '/how-it-works',
    name: 'HowItWorks',
    component: () => import('./pages/HowItWorks.vue'),
  },
  {
    path: '/partnership',
    name: 'Partnership',
    component: () => import('./pages/Partnership.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 