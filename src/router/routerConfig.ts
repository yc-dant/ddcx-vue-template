import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '*',
    name: 'demo',
    component: import(/* webpackChunkName: "demo" */ '@/views/demo.vue'),
  }
];

export default routes
