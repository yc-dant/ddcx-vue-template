/*
 * @Descripttion: 路由配置
 * @Author: 杨晨
 * @Date: 2021-05-30 23:35:37
 * @LastEditors: 杨晨
 * @LastEditTime: 2021-06-01 20:33:37
 */
import { createRouter, createWebHistory } from 'vue-router'
import routes from './routerConfig'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
