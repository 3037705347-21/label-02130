<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useProducts } from '@/composables/useProducts'
import { useOrderStore } from '@/stores/order'
import { useToast } from '@/composables/useToast'
import ProductCard from '@/components/ProductCard.vue'

const router = useRouter()
const { getCategories, getFilteredProducts } = useProducts()
const orderStore = useOrderStore()
const toast = useToast()

const selectedCategory = ref('全部')
const searchKeyword = ref('')

const categories = getCategories()

const filteredProducts = computed(() => {
  return getFilteredProducts(selectedCategory.value, searchKeyword.value)
})

function selectCategory(category) {
  selectedCategory.value = category
}

function handlePurchase(product) {
  const order = orderStore.addOrder(product)
  toast.success(`购买成功！订单号: ${order.id}`)

  setTimeout(() => {
    router.push(`/todos/${order.id}`)
  }, 1200)
}
</script>

<template>
  <div class="purchase-view">
    <div class="container">
      <!-- Page Header -->
      <header class="page-header">
        <h1 class="page-title">购买卡密</h1>
        <p class="page-desc">选择您需要的数字商品，即买即用</p>
      </header>

      <!-- Search & Filter -->
      <section class="filter-section">
        <div class="search-box">
          <span class="search-icon" aria-hidden="true">🔍</span>
          <input
            v-model="searchKeyword"
            type="search"
            placeholder="搜索商品..."
            class="search-input"
            aria-label="搜索商品"
          />
        </div>
        <nav class="category-tabs" aria-label="商品分类">
          <button
            v-for="category in categories"
            :key="category"
            class="category-tab"
            :class="{ active: selectedCategory === category }"
            @click="selectCategory(category)"
            :aria-pressed="selectedCategory === category"
          >
            {{ category }}
          </button>
        </nav>
      </section>

      <!-- Products Grid -->
      <main class="products-section">
        <div v-if="filteredProducts.length > 0" class="products-grid">
          <ProductCard
            v-for="product in filteredProducts"
            :key="product.id"
            :product="product"
            @purchase="handlePurchase"
          />
        </div>
        <div v-else class="empty-state">
          <span class="empty-icon" aria-hidden="true">📭</span>
          <p class="empty-text">暂无相关商品</p>
          <button class="btn btn-secondary" @click="selectCategory('全部')">
            查看全部商品
          </button>
        </div>
      </main>
    </div>
  </div>
</template>

<style scoped>
.purchase-view {
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

/* Filter Section */
.filter-section {
  background: var(--bg-card);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  margin-bottom: var(--spacing-xl);
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--border-color);
}

.search-box {
  position: relative;
  margin-bottom: var(--spacing-md);
}

.search-icon {
  position: absolute;
  left: var(--spacing-md);
  top: 50%;
  transform: translateY(-50%);
  font-size: var(--font-size-base);
}

.search-input {
  width: 100%;
  padding: 12px var(--spacing-md) 12px 44px;
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  font-size: var(--font-size-base);
  transition: border-color var(--transition-fast), box-shadow var(--transition-fast);
  background: var(--bg-section);
}

.search-input:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.category-tabs {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
}

.category-tab {
  padding: var(--spacing-sm) var(--spacing-md);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  color: var(--text-secondary);
  background: var(--bg-section);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  transition: all var(--transition-fast);
}

.category-tab:hover {
  color: var(--primary-color);
  border-color: var(--primary-color);
  background: rgba(59, 130, 246, 0.05);
}

.category-tab:focus-visible {
  outline: 2px solid var(--primary-color);
  outline-offset: 2px;
}

.category-tab.active {
  color: white;
  background: var(--primary-color);
  border-color: var(--primary-color);
}

/* Products Grid */
.products-section {
  min-height: 400px;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: var(--spacing-lg);
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
  border: 2px dashed var(--border-color);
}

.empty-icon {
  font-size: 56px;
  margin-bottom: var(--spacing-md);
}

.empty-text {
  font-size: var(--font-size-base);
  color: var(--text-secondary);
  margin-bottom: var(--spacing-lg);
}

@media (max-width: 768px) {
  .products-grid {
    grid-template-columns: 1fr;
  }
}
</style>
