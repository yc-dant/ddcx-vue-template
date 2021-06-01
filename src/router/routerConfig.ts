/*
 * @Descripttion: 路由配置
 * @Author: 杨晨
 * @Date: 2021-05-30 23:35:37
 * @LastEditors: 杨晨
 * @LastEditTime: 2021-06-01 20:33:10
 */
import { RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/:pathMatch(.*)*',
    name: 'demo',
    component: import(/* webpackChunkName: "demo" */ '@/views/demo.vue')
  }
]

export default routes
