import { createRouter, createWebHistory } from 'vue-router';
import Layout from '@/layout/index.vue';
import menu from './menu';
import { useUserStore } from '@/stores/user';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'LAYOUT',
      component: Layout,
      redirect: '/order',
      children: menu,
    },
    {
      path: '/login',
      name: 'LOGIN',
      component: () => import('@/pages/login/index.vue'),
    },
  ],
});

router.beforeEach((to, from) => {
  // ...
  const token = useUserStore().token;
  const user = useUserStore().user;
  console.log(user);
  // console.log(token);
  // console.log(to);
  // console.log(from);
  if (!token && to.name !== 'LOGIN') {
    return { name: 'LOGIN' };
  } else if (token && to.name === 'LOGIN') {
    return { name: 'LAYOUT' };
  } else {
    return true;
  }
});

export default router;
