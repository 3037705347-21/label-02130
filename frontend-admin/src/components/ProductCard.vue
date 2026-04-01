<script setup>
import { ref } from 'vue'

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['purchase'])

const isLoading = ref(false)

async function handlePurchase() {
  isLoading.value = true
  await new Promise(resolve => setTimeout(resolve, 600))
  emit('purchase', props.product)
  isLoading.value = false
}
</script>

<template>
  <article class="product-card">
    <header class="product-header">
      <span class="product-icon" aria-hidden="true">{{ product.icon }}</span>
      <div class="product-tags" v-if="product.tags.length > 0">
        <span
          v-for="tag in product.tags"
          :key="tag"
          class="product-tag"
          :class="{
            'tag-hot': tag === '热销',
            'tag-new': tag === '新品',
            'tag-sale': tag.includes('优惠'),
            'tag-value': tag === '超值'
          }"
        >
          {{ tag }}
        </span>
      </div>
    </header>

    <div class="product-body">
      <h3 class="product-name">{{ product.name }}</h3>
      <p class="product-desc">{{ product.description }}</p>
      <div class="product-meta">
        <span class="product-category">{{ product.category }}</span>
        <span class="product-sales">已售 {{ product.sales.toLocaleString() }}</span>
      </div>
    </div>

    <footer class="product-footer">
      <div class="product-price">
        <span class="price-current">¥{{ product.price.toFixed(2) }}</span>
        <span class="price-original" v-if="product.originalPrice > product.price">
          ¥{{ product.originalPrice.toFixed(2) }}
        </span>
      </div>
      <button
        class="btn btn-primary purchase-btn"
        :class="{ loading: isLoading }"
        :disabled="isLoading"
        @click="handlePurchase"
        :aria-label="`购买 ${product.name}`"
      >
        <span class="btn-text">立即购买</span>
        <span v-if="isLoading" class="btn-spinner"></span>
      </button>
    </footer>
  </article>
</template>

<style scoped>
.product-card {
  background: var(--bg-card);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  padding: var(--spacing-lg);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  transition: transform var(--transition-normal), box-shadow var(--transition-normal);
  border: 1px solid var(--border-color);
}

.product-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.product-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.product-icon {
  font-size: 44px;
  line-height: 1;
}

.product-tags {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
}

.product-tag {
  padding: 3px 8px;
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-semibold);
  border-radius: 4px;
  background: rgba(59, 130, 246, 0.1);
  color: var(--primary-color);
}

.tag-hot {
  background: rgba(239, 68, 68, 0.1);
  color: var(--color-error);
}

.tag-new {
  background: rgba(14, 165, 233, 0.1);
  color: var(--accent-color);
}

.tag-sale {
  background: rgba(245, 158, 11, 0.1);
  color: var(--color-warning);
}

.tag-value {
  background: rgba(16, 185, 129, 0.1);
  color: var(--color-success);
}

.product-body {
  flex: 1;
}

.product-name {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
  color: var(--text-heading);
  margin-bottom: var(--spacing-sm);
  line-height: var(--line-height-tight);
}

.product-desc {
  font-size: var(--font-size-sm);
  color: var(--text-secondary);
  line-height: var(--line-height-relaxed);
  margin-bottom: var(--spacing-sm);
}

.product-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: var(--font-size-xs);
  color: var(--text-muted);
}

.product-category {
  padding: 2px 8px;
  background: var(--bg-section);
  border-radius: 4px;
}

.product-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: var(--spacing-md);
  border-top: 1px solid var(--border-light);
}

.product-price {
  display: flex;
  align-items: baseline;
  gap: var(--spacing-sm);
}

.price-current {
  font-size: var(--font-size-2xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-error);
}

.price-original {
  font-size: var(--font-size-sm);
  color: var(--text-muted);
  text-decoration: line-through;
}

.purchase-btn {
  min-width: 100px;
  height: 38px;
  position: relative;
}

.purchase-btn .btn-text {
  transition: opacity var(--transition-fast);
}

.purchase-btn.loading .btn-text {
  opacity: 0;
}

.btn-spinner {
  position: absolute;
  width: 16px;
  height: 16px;
  border: 2px solid transparent;
  border-top-color: white;
  border-radius: 50%;
  animation: spin 0.6s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
