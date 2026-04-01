import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/HomeView.vue'),
    meta: { title: '首页' }
  },
  {
    path: '/purchase',
    name: 'Purchase',
    component: () => import('@/views/PurchaseView.vue'),
    meta: { title: '购买卡密' }
  },
  {
    path: '/todos',
    name: 'Orders',
    component: () => import('@/views/OrdersView.vue'),
    meta: { title: '我的订单' },
    children: [
      {
        path: ':id',
        name: 'OrderDetail',
        component: () => import('@/views/OrderDetailView.vue'),
        meta: { title: '订单详情' }
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/AboutView.vue'),
    meta: { title: '关于我们' }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// 路由守卫 - 更新页面标题
router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title || '卡密商城'} - Card Key Mall`
  next()
})

export default router
