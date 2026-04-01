<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useOrderStore } from '@/stores/order'
import OrderCard from '@/components/OrderCard.vue'

const route = useRoute()
const orderStore = useOrderStore()

const orders = computed(() => orderStore.allOrders)
const isDetailView = computed(() => !!route.params.id)
</script>

<template>
  <div class="orders-view">
    <div class="container">
      <!-- 订单列表视图 -->
      <div v-if="!isDetailView" class="orders-list-view">
        <header class="page-header">
          <h1 class="page-title">我的订单</h1>
          <p class="page-desc">查看您的购买记录和卡密信息</p>
        </header>

        <main v-if="orders.length > 0" class="orders-list">
          <OrderCard
            v-for="order in orders"
            :key="order.id"
            :order="order"
          />
        </main>

        <div v-else class="empty-state">
          <span class="empty-icon" aria-hidden="true">📋</span>
          <h3 class="empty-title">暂无订单</h3>
          <p class="empty-desc">您还没有购买任何商品</p>
          <router-link to="/purchase" class="btn btn-primary">
            去购买
          </router-link>
        </div>
      </div>

      <!-- 嵌套路由：订单详情 -->
      <router-view />
    </div>
  </div>
</template>

<style scoped>
.orders-view {
  padding: var(--spacing-xl) 0 var(--spacing-3xl);
  background: var(--bg-page);
  min-height: calc(100vh - 64px);
}

.page-header {
  text-align: center;
  margin-bottom: var(--spacing-xl);
}

.page-title {
  font-size: var(--font-size-3xl);
  font-weight: var(--font-weight-bold);
  color: var(--text-heading);
  margin-bottom: var(--spacing-sm);
}

.page-desc {
  font-size: var(--font-size-base);
  color: var(--text-secondary);
}

.orders-list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

/* Empty State */
.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-3xl);
  background: var(--bg-card);
  border-radius: var(--radius-lg);
  border: 1px solid var(--border-color);
  box-shadow: var(--shadow-sm);
  text-align: center;
}

.empty-icon {
  font-size: 72px;
  margin-bottom: var(--spacing-md);
}

.empty-title {
  font-size: var(--font-size-2xl);
  font-weight: var(--font-weight-semibold);
  color: var(--text-heading);
  margin-bottom: var(--spacing-sm);
}

.empty-desc {
  font-size: var(--font-size-base);
  color: var(--text-secondary);
  margin-bottom: var(--spacing-lg);
}
</style>
