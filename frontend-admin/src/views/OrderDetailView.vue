<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useOrderStore } from '@/stores/order'
import { useToast } from '@/composables/useToast'

const route = useRoute()
const router = useRouter()
const orderStore = useOrderStore()
const toast = useToast()

const order = computed(() => orderStore.getOrderById(route.params.id))
const copiedKey = ref(null)

onMounted(() => {
  if (!order.value) {
    toast.error('订单不存在')
    router.push('/todos')
  }
})

function goBack() {
  router.push('/todos')
}

async function copyKey(key) {
  try {
    await navigator.clipboard.writeText(key)
    copiedKey.value = key
    toast.success('卡密已复制到剪贴板')
    setTimeout(() => {
      copiedKey.value = null
    }, 2000)
  } catch (err) {
    toast.error('复制失败，请手动复制')
  }
}

async function copyAllKeys() {
  if (!order.value) return
  try {
    const allKeys = order.value.cardKeys.join('\n')
    await navigator.clipboard.writeText(allKeys)
    toast.success('所有卡密已复制到剪贴板')
  } catch (err) {
    toast.error('复制失败，请手动复制')
  }
}
</script>

<template>
  <div v-if="order" class="order-detail-view">
    <!-- Back Button -->
    <nav class="back-nav">
      <button class="back-btn" @click="goBack" aria-label="返回订单列表">
        <span class="back-icon" aria-hidden="true">←</span>
        <span>返回订单列表</span>
      </button>
    </nav>

    <!-- Order Info Card -->
    <section class="detail-card order-info-card">
      <header class="card-header">
        <h2 class="card-title">订单信息</h2>
        <span class="order-status" :class="`status-${order.status}`">
          {{ order.statusText }}
        </span>
      </header>
      <dl class="info-grid">
        <div class="info-item">
          <dt class="info-label">订单号</dt>
          <dd class="info-value">{{ order.id }}</dd>
        </div>
        <div class="info-item">
          <dt class="info-label">下单时间</dt>
          <dd class="info-value">
            <time :datetime="order.createTime">{{ order.createTime }}</time>
          </dd>
        </div>
        <div class="info-item">
          <dt class="info-label">商品名称</dt>
          <dd class="info-value">
            <span class="product-icon" aria-hidden="true">{{ order.productIcon }}</span>
            {{ order.productName }}
          </dd>
        </div>
        <div class="info-item">
          <dt class="info-label">购买数量</dt>
          <dd class="info-value">{{ order.quantity }}</dd>
        </div>
        <div class="info-item">
          <dt class="info-label">单价</dt>
          <dd class="info-value">¥{{ order.price.toFixed(2) }}</dd>
        </div>
        <div class="info-item">
          <dt class="info-label">实付金额</dt>
          <dd class="info-value price">¥{{ order.totalPrice.toFixed(2) }}</dd>
        </div>
      </dl>
    </section>

    <!-- Card Keys Card -->
    <section class="detail-card keys-card">
      <header class="card-header">
        <h2 class="card-title">卡密信息</h2>
        <button class="btn btn-secondary copy-all-btn" @click="copyAllKeys">
          复制全部
        </button>
      </header>
      <ul class="keys-list">
        <li
          v-for="(key, index) in order.cardKeys"
          :key="index"
          class="key-item"
          :class="{ copied: copiedKey === key }"
        >
          <span class="key-index">#{{ index + 1 }}</span>
          <code class="key-value">{{ key }}</code>
          <button
            class="copy-btn"
            :class="{ copied: copiedKey === key }"
            @click="copyKey(key)"
            :aria-label="`复制卡密 ${key}`"
          >
            {{ copiedKey === key ? '已复制' : '复制' }}
          </button>
        </li>
      </ul>
      <aside class="keys-notice">
        <span class="notice-icon" aria-hidden="true">💡</span>
        <span class="notice-text">请妥善保管您的卡密，卡密仅显示一次</span>
      </aside>
    </section>
  </div>
</template>

<style scoped>
.order-detail-view {
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.back-nav {
  margin-bottom: var(--spacing-lg);
}

.back-btn {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-sm);
  padding: var(--spacing-sm) var(--spacing-md);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  color: var(--text-secondary);
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  transition: all var(--transition-fast);
}

.back-btn:hover {
  color: var(--primary-color);
  border-color: var(--primary-color);
  background: rgba(59, 130, 246, 0.05);
}

.back-btn:focus-visible {
  outline: 2px solid var(--primary-color);
  outline-offset: 2px;
}

.back-icon {
  font-size: var(--font-size-base);
}

.detail-card {
  background: var(--bg-card);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  margin-bottom: var(--spacing-lg);
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--border-color);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--spacing-lg);
  padding-bottom: var(--spacing-md);
  border-bottom: 1px solid var(--border-light);
}

.card-title {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
  color: var(--text-heading);
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

/* Order Info Grid */
.info-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-md);
}

.info-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.info-label {
  font-size: var(--font-size-xs);
  color: var(--text-muted);
  font-weight: var(--font-weight-normal);
}

.info-value {
  font-size: var(--font-size-base);
  color: var(--text-heading);
  font-weight: var(--font-weight-medium);
  display: flex;
  align-items: center;
  gap: 6px;
}

.info-value.price {
  color: var(--color-error);
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-bold);
}

.product-icon {
  font-size: var(--font-size-lg);
}

/* Keys Card */
.copy-all-btn {
  font-size: var(--font-size-xs);
  padding: 6px var(--spacing-md);
}

.keys-list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-md);
}

.key-item {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  padding: var(--spacing-md);
  background: var(--bg-section);
  border-radius: var(--radius-md);
  border: 1px solid var(--border-color);
  transition: all var(--transition-fast);
}

.key-item.copied {
  border-color: var(--color-success);
  background: rgba(16, 185, 129, 0.05);
}

.key-index {
  font-size: var(--font-size-xs);
  color: var(--text-muted);
  font-weight: var(--font-weight-semibold);
  min-width: 28px;
}

.key-value {
  flex: 1;
  font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Fira Code', monospace;
  font-size: var(--font-size-base);
  color: var(--text-heading);
  letter-spacing: 1px;
  background: none;
}

.copy-btn {
  padding: 6px var(--spacing-md);
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-medium);
  color: var(--primary-color);
  background: rgba(59, 130, 246, 0.1);
  border-radius: var(--radius-sm);
  transition: all var(--transition-fast);
}

.copy-btn:hover {
  background: rgba(59, 130, 246, 0.2);
}

.copy-btn:focus-visible {
  outline: 2px solid var(--primary-color);
  outline-offset: 2px;
}

.copy-btn.copied {
  color: var(--color-success);
  background: rgba(16, 185, 129, 0.1);
}

.keys-notice {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  padding: var(--spacing-md);
  background: rgba(245, 158, 11, 0.08);
  border-radius: var(--radius-md);
  border: 1px solid rgba(245, 158, 11, 0.2);
}

.notice-icon {
  font-size: var(--font-size-base);
}

.notice-text {
  font-size: var(--font-size-sm);
  color: var(--color-warning);
}

@media (max-width: 768px) {
  .info-grid {
    grid-template-columns: 1fr;
  }

  .key-item {
    flex-wrap: wrap;
  }

  .key-value {
    width: 100%;
    order: 3;
    margin-top: var(--spacing-sm);
    font-size: var(--font-size-sm);
  }
}
</style>
