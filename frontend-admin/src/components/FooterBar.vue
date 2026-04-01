<script setup>
const currentYear = new Date().getFullYear()

const links = [
  { name: '关于我们', path: '/about' },
  { name: '购买卡密', path: '/purchase' },
  { name: '我的订单', path: '/todos' }
]
</script>

<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-main">
        <div class="footer-brand">
          <span class="brand-icon">🔑</span>
          <span class="brand-name">卡密商城</span>
        </div>
        <p class="footer-desc">安全、快捷、可靠的数字商品交易平台</p>
      </div>

      <nav class="footer-links">
        <h4 class="footer-title">快速链接</h4>
        <ul>
          <li v-for="link in links" :key="link.path">
            <router-link :to="link.path">{{ link.name }}</router-link>
          </li>
        </ul>
      </nav>

      <div class="footer-contact">
        <h4 class="footer-title">联系我们</h4>
        <p><a href="mailto:support@cardkeymall.com">support@cardkeymall.com</a></p>
        <p><a href="tel:400-888-8888">400-888-8888</a></p>
      </div>
    </div>

    <div class="footer-bottom">
      <p>© {{ currentYear }} 卡密商城 Card Key Mall. All rights reserved.</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--bg-card);
  border-top: 1px solid var(--border-color);
  margin-top: auto;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--spacing-2xl) var(--spacing-md);
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: var(--spacing-2xl);
}

.footer-main {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.footer-brand {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
}

.brand-icon {
  font-size: 24px;
}

.brand-name {
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-bold);
  color: var(--text-heading);
}

.footer-desc {
  font-size: var(--font-size-sm);
  color: var(--text-secondary);
  max-width: 300px;
}

.footer-title {
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-semibold);
  color: var(--text-heading);
  margin-bottom: var(--spacing-md);
}

.footer-links ul {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.footer-links a,
.footer-contact a,
.footer-contact p {
  font-size: var(--font-size-sm);
  color: var(--text-secondary);
  transition: color var(--transition-fast);
}

.footer-links a:hover,
.footer-contact a:hover {
  color: var(--primary-color);
}

.footer-bottom {
  border-top: 1px solid var(--border-light);
  padding: var(--spacing-md);
  text-align: center;
}

.footer-bottom p {
  font-size: var(--font-size-xs);
  color: var(--text-muted);
}

@media (max-width: 768px) {
  .footer-container {
    grid-template-columns: 1fr;
    gap: var(--spacing-lg);
    text-align: center;
  }

  .footer-main {
    align-items: center;
  }

  .footer-brand {
    justify-content: center;
  }
}
</style>
