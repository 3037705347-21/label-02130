<script setup>
import { useRouter } from 'vue-router'

const props = defineProps({
  order: {
    type: Object,
    required: true
  }
})

const router = useRouter()

function viewDetail() {
  router.push(`/todos/${props.order.id}`)
}
</script>

<template>
  <article
    class="order-card"
    @click="viewDetail"
    @keydown.enter="viewDetail"
    tabindex="0"
    role="button"
    :aria-label="`查看订单 ${order.id} 详情`"
  >
    <header class="order-header">
      <div class="order-info">
        <span class="order-id">订单号: {{ order.id }}</span>
        <time class="order-time" :datetime="order.createTime">{{ order.createTime }}</time>
      </div>
      <span class="order-status" :class="`status-${order.status}`">
        {{ order.statusText }}
      </span>
    </header>

    <div class="order-body">
      <span class="order-icon" aria-hidden="true">{{ order.productIcon }}</span>
      <div class="order-product">
        <h4 class="product-name">{{ order.productName }}</h4>
        <p class="product-quantity">数量: {{ order.quantity }}</p>
      </div>
      <div class="order-price">
        <span class="price-label">实付</span>
        <span class="price-value">¥{{ order.totalPrice.toFixed(2) }}</span>
      </div>
    </div>

    <footer class="order-footer">
      <span class="view-detail">
        查看详情
        <span class="arrow" aria-hidden="true">→</span>
      </span>
    </footer>
  </article>
</template>

<style scoped>
.order-card {
  background: var(--bg-card);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  padding: var(--spacing-lg);
  cursor: pointer;
  transition: all var(--transition-normal);
  border: 1px solid var(--border-color);
}

.order-card:hover {
  box-shadow: var(--shadow-md);
  border-color: var(--primary-color);
}

.order-card:focus-visible {
  outline: 2px solid var(--primary-color);
  outline-offset: 2px;
}

.order-card:hover .view-detail {
  color: var(--primary-color);
}

.order-card:hover .arrow {
  transform: translateX(4px);
}

.order-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--spacing-md);
  padding-bottom: var(--spacing-md);
  border-bottom: 1px solid var(--border-light);
}

.order-info {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.order-id {
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-semibold);
  color: var(--text-heading);
}

.order-time {
  font-size: var(--font-size-xs);
  color: var(--text-muted);
}

.order-status {
  padding: 4px 12px;
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-semibold);
  border-radius: 20px;
}

.status-completed {
  background: rgba(16, 185, 129, 0.1);
  color: var(--color-success);
}

.status-pending {
  background: rgba(245, 158, 11, 0.1);
  color: var(--color-warning);
}

.order-body {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
}

.order-icon {
  font-size: 40px;
  flex-shrink: 0;
}

.order-product {
  flex: 1;
}

.product-name {
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-semibold);
  color: var(--text-heading);
  margin-bottom: 4px;
}

.product-quantity {
  font-size: var(--font-size-sm);
  color: var(--text-secondary);
}

.order-price {
  text-align: right;
}

.price-label {
  display: block;
  font-size: var(--font-size-xs);
  color: var(--text-muted);
  margin-bottom: 2px;
}

.price-value {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-bold);
  color: var(--color-error);
}

.order-footer {
  margin-top: var(--spacing-md);
  padding-top: var(--spacing-md);
  border-top: 1px solid var(--border-light);
  text-align: right;
}

.view-detail {
  font-size: var(--font-size-sm);
  color: var(--text-secondary);
  display: inline-flex;
  align-items: center;
  gap: 6px;
  transition: color var(--transition-fast);
}

.arrow {
  transition: transform var(--transition-fast);
}
</style>
