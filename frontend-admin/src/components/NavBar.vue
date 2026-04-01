<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useOrderStore } from '@/stores/order'
import IconKey from '@/components/icons/IconKey.vue'

const route = useRoute()
const orderStore = useOrderStore()

const navItems = [
  { path: '/', name: '首页', icon: '🏠' },
  { path: '/purchase', name: '购买卡密', icon: '🛒' },
  { path: '/todos', name: '我的订单', icon: '📋' },
  { path: '/about', name: '关于', icon: 'ℹ️' }
]

const orderCount = computed(() => orderStore.orderCount)

function isActive(path) {
  if (path === '/') {
    return route.path === '/'
  }
  return route.path.startsWith(path)
}
</script>

<template>
  <header class="navbar">
    <nav class="navbar-container">
      <router-link to="/" class="navbar-brand" aria-label="返回首页">
        <IconKey class="brand-icon" />
        <span class="brand-text">卡密商城</span>
      </router-link>

      <ul class="navbar-menu" role="navigation" aria-label="主导航">
        <li v-for="item in navItems" :key="item.path">
          <router-link
            :to="item.path"
            class="nav-item"
            :class="{ active: isActive(item.path) }"
            :aria-current="isActive(item.path) ? 'page' : undefined"
          >
            <span class="nav-icon" aria-hidden="true">{{ item.icon }}</span>
            <span class="nav-text">{{ item.name }}</span>
            <span
              v-if="item.path === '/todos' && orderCount > 0"
              class="nav-badge"
              :aria-label="`${orderCount}个订单`"
            >
              {{ orderCount }}
            </span>
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 64px;
  background: var(--bg-card);
  box-shadow: var(--shadow-sm);
  z-index: 1000;
  border-bottom: 1px solid var(--border-color);
}

.navbar-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.navbar-brand {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-bold);
  color: var(--text-heading);
  transition: transform var(--transition-fast), opacity var(--transition-fast);
}

.navbar-brand:hover {
  transform: scale(1.02);
  opacity: 0.9;
}

.brand-icon {
  width: 32px;
  height: 32px;
}

.brand-text {
  color: var(--primary-color);
}

.navbar-menu {
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--radius-md);
  color: var(--text-secondary);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  transition: all var(--transition-fast);
  position: relative;
}

.nav-item:hover {
  color: var(--primary-color);
  background: rgba(59, 130, 246, 0.08);
}

.nav-item:focus-visible {
  outline: 2px solid var(--primary-color);
  outline-offset: 2px;
}

.nav-item.active {
  color: var(--primary-color);
  background: rgba(59, 130, 246, 0.1);
}

.nav-icon {
  font-size: var(--font-size-base);
}

.nav-badge {
  position: absolute;
  top: 2px;
  right: 2px;
  min-width: 18px;
  height: 18px;
  padding: 0 5px;
  background: var(--color-error);
  color: white;
  font-size: 11px;
  font-weight: var(--font-weight-semibold);
  border-radius: 9px;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (max-width: 768px) {
  .nav-text {
    display: none;
  }

  .nav-item {
    padding: var(--spacing-sm);
  }

  .nav-icon {
    font-size: var(--font-size-lg);
  }
}
</style>
