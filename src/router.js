// src/router.js
import { createWebHistory, createRouter } from 'vue-router';
import ErrorPage from './views/ErrorPage';
import Home from './views/Home';
import User from './views/User';
import User2 from './views/User2';

const routes = [
    { path: '/', name: 'Home', component: () => import('@/views/Home.vue') },
    { path: '/user', name: 'User', component: User },
    { path: '/user2/:id', name: 'User2', component: User2, props: true },
    { path: '/:catchAll(.*)', name: 'ErrorPage', component: ErrorPage }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;

// https://velog.io/@kyh196201/2021.05.31-Vue3-vue-router-%EC%97%B0%EB%8F%99
// https://kang-ji.tistory.com/entry/vue-router

// https://mine-it-record.tistory.com/567