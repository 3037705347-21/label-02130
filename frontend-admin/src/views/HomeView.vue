<script setup>
import { ref } from 'vue'

const stats = [
  {
    icon: '👥',
    value: '100万+',
    label: '注册用户',
    desc: '累计服务用户数',
    trend: '+12%',
    trendLabel: '月增长'
  },
  {
    icon: '📦',
    value: '500万+',
    label: '成交订单',
    desc: '累计完成订单数',
    trend: '+28%',
    trendLabel: '月增长'
  },
  {
    icon: '⭐',
    value: '99.9%',
    label: '好评率',
    desc: '用户满意度评分',
    trend: '稳定',
    trendLabel: '持续保持'
  },
  {
    icon: '🕐',
    value: '7×24',
    label: '小时服务',
    desc: '全天候在线支持',
    trend: '不间断',
    trendLabel: '全年无休'
  }
]

const features = [
  {
    icon: '🔒',
    title: '安全可靠',
    desc: '采用银行级加密技术，保障您的交易安全'
  },
  {
    icon: '⚡',
    title: '即时发货',
    desc: '7x24小时自动发货，购买后秒到账'
  },
  {
    icon: '💰',
    title: '价格优惠',
    desc: '厂家直供，价格低于市场价，省钱更省心'
  },
  {
    icon: '🎯',
    title: '正品保障',
    desc: '100%正版卡密，假一赔十，放心购买'
  }
]

const consignmentFeatures = [
  {
    icon: '📤',
    title: '一键上架',
    desc: '简单几步即可上架您的卡密商品'
  },
  {
    icon: '📊',
    title: '实时统计',
    desc: '销售数据实时更新，收益一目了然'
  },
  {
    icon: '💳',
    title: '快速提现',
    desc: '支持多种提现方式，T+1到账'
  }
]

const announcements = ref([
  {
    id: 1,
    type: 'notice',
    title: '【系统公告】平台升级维护通知',
    content: '为提供更好的服务体验，平台将于2026年2月10日凌晨2:00-4:00进行系统升级维护。',
    time: '2026-02-08'
  },
  {
    id: 2,
    type: 'activity',
    title: '【限时活动】新春特惠，全场8折起',
    content: '新春佳节来临之际，平台推出限时特惠活动，全场商品低至8折！',
    time: '2026-02-06'
  },
  {
    id: 3,
    type: 'notice',
    title: '【温馨提示】谨防诈骗，保护账户安全',
    content: '请勿向任何人透露您的账户密码和验证码，平台客服不会索要此类信息。',
    time: '2026-02-05'
  }
])

function getTypeLabel(type) {
  return type === 'activity' ? '活动' : '公告'
}
</script>

<template>
  <div class="home-view">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="container">
        <div class="hero-content">
          <h1 class="hero-title">
            <span class="title-highlight">卡密商城</span>
            <br />
            您的数字商品一站式平台
          </h1>
          <p class="hero-desc">
            提供各类正版卡密、充值卡、会员服务，安全快捷，即买即用
          </p>
          <div class="hero-actions">
            <router-link to="/purchase" class="btn btn-hero-primary">
              立即选购
            </router-link>
            <router-link to="/about" class="btn btn-hero-secondary">
              了解更多
            </router-link>
          </div>
        </div>
        <div class="hero-visual" aria-hidden="true">
          <div class="visual-card card-1">🎮</div>
          <div class="visual-card card-2">🎬</div>
          <div class="visual-card card-3">🎵</div>
          <div class="visual-card card-4">🤖</div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="stats-section">
      <div class="container">
        <div class="stats-grid">
          <article v-for="stat in stats" :key="stat.label" class="stat-card">
            <div class="stat-header">
              <div class="stat-icon-wrap">
                <span class="stat-icon">{{ stat.icon }}</span>
              </div>
              <div class="stat-trend-wrap">
                <span class="stat-trend">{{ stat.trend }}</span>
                <span class="stat-trend-label">{{ stat.trendLabel }}</span>
              </div>
            </div>
            <div class="stat-body">
              <div class="stat-value">{{ stat.value }}</div>
              <div class="stat-label">{{ stat.label }}</div>
              <div class="stat-desc">{{ stat.desc }}</div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Mission Section -->
    <section class="mission-section">
      <div class="container">
        <div class="mission-card">
          <div class="mission-content">
            <h2 class="mission-title">我们的使命</h2>
            <p class="mission-text">
              让数字商品交易变得简单、安全、高效。我们相信，通过技术创新和优质服务，
              可以为每一位用户创造更好的购物体验。
            </p>
            <div class="mission-highlights">
              <div class="highlight-item">
                <span class="highlight-icon">✓</span>
                <span>正品保障</span>
              </div>
              <div class="highlight-item">
                <span class="highlight-icon">✓</span>
                <span>即时发货</span>
              </div>
              <div class="highlight-item">
                <span class="highlight-icon">✓</span>
                <span>售后无忧</span>
              </div>
            </div>
          </div>
          <div class="mission-visual">
            <span class="mission-emoji">🎯</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features-section">
      <div class="container">
        <header class="section-header">
          <h2 class="section-title">平台优势</h2>
          <p class="section-desc">为什么选择我们</p>
        </header>
        <div class="features-grid">
          <article v-for="feature in features" :key="feature.title" class="feature-card">
            <span class="feature-icon" aria-hidden="true">{{ feature.icon }}</span>
            <h3 class="feature-title">{{ feature.title }}</h3>
            <p class="feature-desc">{{ feature.desc }}</p>
          </article>
        </div>
      </div>
    </section>

    <!-- Consignment Section -->
    <section class="consignment-section">
      <div class="container">
        <header class="section-header">
          <h2 class="section-title">寄售功能</h2>
          <p class="section-desc">轻松成为卖家，开启您的副业之旅</p>
        </header>
        <div class="consignment-content">
          <div class="consignment-features">
            <article v-for="item in consignmentFeatures" :key="item.title" class="consignment-item">
              <span class="consignment-icon" aria-hidden="true">{{ item.icon }}</span>
              <div class="consignment-info">
                <h4 class="consignment-title">{{ item.title }}</h4>
                <p class="consignment-desc">{{ item.desc }}</p>
              </div>
            </article>
          </div>
          <aside class="consignment-cta">
            <div class="cta-card">
              <h3>开始寄售</h3>
              <p>零门槛入驻，轻松赚取收益</p>
              <router-link to="/about" class="btn btn-cta">立即入驻</router-link>
            </div>
          </aside>
        </div>
      </div>
    </section>

    <!-- Announcements Section -->
    <section class="announcements-section">
      <div class="container">
        <header class="section-header">
          <h2 class="section-title">平台公告</h2>
          <p class="section-desc">最新动态与通知</p>
        </header>
        <div class="announcements-list">
          <article v-for="item in announcements" :key="item.id" class="announcement-card">
            <header class="announcement-header">
              <span class="announcement-type" :class="`type-${item.type}`">
                {{ getTypeLabel(item.type) }}
              </span>
              <time class="announcement-time" :datetime="item.time">{{ item.time }}</time>
            </header>
            <h4 class="announcement-title">{{ item.title }}</h4>
            <p class="announcement-content">{{ item.content }}</p>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.home-view {
  padding-bottom: var(--spacing-3xl);
}

/* Hero Section */
.hero-section {
  background: var(--gradient-primary);
  padding: var(--spacing-3xl) 0;
  margin-top: -64px;
  padding-top: calc(64px + var(--spacing-3xl));
}

.hero-section .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--spacing-2xl);
}

.hero-content {
  flex: 1;
  max-width: 560px;
}

.hero-title {
  font-size: var(--font-size-4xl);
  font-weight: var(--font-weight-bold);
  color: var(--text-white);
  line-height: var(--line-height-tight);
  margin-bottom: var(--spacing-lg);
}

.title-highlight {
  display: inline-block;
  position: relative;
}

.title-highlight::after {
  content: '';
  position: absolute;
  bottom: 4px;
  left: 0;
  right: 0;
  height: 10px;
  background: rgba(255, 255, 255, 0.25);
  border-radius: 4px;
  z-index: -1;
}

.hero-desc {
  font-size: var(--font-size-lg);
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: var(--spacing-xl);
  line-height: var(--line-height-relaxed);
}

.hero-actions {
  display: flex;
  gap: var(--spacing-md);
}

.btn-hero-primary,
.btn-hero-secondary {
  padding: 12px var(--spacing-xl);
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-semibold);
  border-radius: var(--radius-md);
  transition: all var(--transition-fast);
}

.btn-hero-primary {
  background: white;
  color: var(--primary-color);
  box-shadow: var(--shadow-md);
}

.btn-hero-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(255, 255, 255, 0.35);
}

.btn-hero-secondary {
  background: transparent;
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.5);
}

.btn-hero-secondary:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: white;
}

.hero-visual {
  position: relative;
  width: 280px;
  height: 280px;
  flex-shrink: 0;
}

.visual-card {
  position: absolute;
  width: 72px;
  height: 72px;
  background: white;
  border-radius: var(--radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  box-shadow: var(--shadow-xl);
}

.card-1 { top: 0; left: 50%; transform: translateX(-50%); animation: float1 3s ease-in-out infinite; }
.card-2 { top: 50%; right: 0; transform: translateY(-50%); animation: float2 3s ease-in-out infinite 0.5s; }
.card-3 { bottom: 0; left: 50%; transform: translateX(-50%); animation: float3 3s ease-in-out infinite 1s; }
.card-4 { top: 50%; left: 0; transform: translateY(-50%); animation: float4 3s ease-in-out infinite 1.5s; }

@keyframes float1 { 0%, 100% { transform: translateX(-50%) translateY(0); } 50% { transform: translateX(-50%) translateY(-8px); } }
@keyframes float2 { 0%, 100% { transform: translateY(-50%); } 50% { transform: translateY(calc(-50% - 8px)); } }
@keyframes float3 { 0%, 100% { transform: translateX(-50%) translateY(0); } 50% { transform: translateX(-50%) translateY(-8px); } }
@keyframes float4 { 0%, 100% { transform: translateY(-50%); } 50% { transform: translateY(calc(-50% - 8px)); } }

/* Stats Section */
.stats-section {
  padding: var(--spacing-2xl) 0;
  background: var(--bg-section);
  margin-top: -40px;
  position: relative;
  z-index: 10;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--spacing-lg);
}

.stat-card {
  background: var(--bg-card);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  box-shadow: var(--shadow-md);
  border: 1px solid var(--border-color);
  transition: transform var(--transition-normal), box-shadow var(--transition-normal);
}

.stat-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.stat-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: var(--spacing-md);
}

.stat-icon-wrap {
  width: 48px;
  height: 48px;
  background: rgba(59, 130, 246, 0.1);
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
}

.stat-icon {
  font-size: 24px;
}

.stat-trend-wrap {
  text-align: right;
}

.stat-trend {
  display: block;
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-semibold);
  color: var(--color-success);
}

.stat-trend-label {
  font-size: var(--font-size-xs);
  color: var(--text-muted);
}

.stat-body {
  padding-top: var(--spacing-sm);
  border-top: 1px solid var(--border-light);
}

.stat-value {
  font-size: var(--font-size-2xl);
  font-weight: var(--font-weight-bold);
  color: var(--primary-color);
  line-height: 1.2;
  margin-bottom: 4px;
}

.stat-label {
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-semibold);
  color: var(--text-heading);
  margin-bottom: 4px;
}

.stat-desc {
  font-size: var(--font-size-xs);
  color: var(--text-muted);
}

/* Mission Section - 使用浅蓝色背景 */
.mission-section {
  padding: var(--spacing-2xl) 0;
  background: var(--bg-page);
}

.mission-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(135deg, #e0f2fe 0%, #dbeafe 100%);
  border-radius: var(--radius-xl);
  padding: var(--spacing-2xl);
  border: 1px solid #bae6fd;
  box-shadow: var(--shadow-sm);
}

.mission-content {
  flex: 1;
}

.mission-title {
  font-size: var(--font-size-2xl);
  font-weight: var(--font-weight-bold);
  color: var(--text-heading);
  margin-bottom: var(--spacing-md);
}

.mission-text {
  font-size: var(--font-size-base);
  color: var(--text-secondary);
  line-height: var(--line-height-relaxed);
  margin-bottom: var(--spacing-lg);
  max-width: 500px;
}

.mission-highlights {
  display: flex;
  gap: var(--spacing-lg);
}

.highlight-item {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  color: var(--text-heading);
}

.highlight-icon {
  width: 20px;
  height: 20px;
  background: var(--color-success);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
}

.mission-visual {
  flex-shrink: 0;
  margin-left: var(--spacing-xl);
}

.mission-emoji {
  font-size: 72px;
}

/* Section Common */
.section-header {
  text-align: center;
  margin-bottom: var(--spacing-xl);
}

.section-title {
  font-size: var(--font-size-3xl);
  font-weight: var(--font-weight-bold);
  color: var(--text-heading);
  margin-bottom: var(--spacing-sm);
}

.section-desc {
  font-size: var(--font-size-base);
  color: var(--text-secondary);
}

/* Features Section */
.features-section {
  padding: var(--spacing-3xl) 0;
  background: var(--bg-section);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--spacing-lg);
}

.feature-card {
  background: var(--bg-card);
  border-radius: var(--radius-lg);
  padding: var(--spacing-xl);
  text-align: center;
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--border-color);
  transition: transform var(--transition-normal), box-shadow var(--transition-normal);
}

.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
}

.feature-icon {
  font-size: 44px;
  display: block;
  margin-bottom: var(--spacing-md);
}

.feature-title {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
  color: var(--text-heading);
  margin-bottom: var(--spacing-sm);
}

.feature-desc {
  font-size: var(--font-size-sm);
  color: var(--text-secondary);
  line-height: var(--line-height-relaxed);
}

/* Consignment Section */
.consignment-section {
  padding: var(--spacing-3xl) 0;
  background: var(--bg-page);
}

.consignment-content {
  display: flex;
  gap: var(--spacing-xl);
  align-items: stretch;
}

.consignment-features {
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.consignment-item {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  background: var(--bg-card);
  padding: var(--spacing-lg);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--border-color);
  transition: transform var(--transition-fast), border-color var(--transition-fast);
}

.consignment-item:hover {
  transform: translateX(8px);
  border-color: var(--primary-color);
}

.consignment-icon { font-size: 32px; flex-shrink: 0; }
.consignment-title { font-size: var(--font-size-base); font-weight: var(--font-weight-semibold); color: var(--text-heading); margin-bottom: 4px; }
.consignment-desc { font-size: var(--font-size-sm); color: var(--text-secondary); }

.consignment-cta { flex: 1; }

.cta-card {
  background: var(--gradient-primary);
  border-radius: var(--radius-xl);
  padding: var(--spacing-xl);
  text-align: center;
  color: white;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.cta-card h3 { font-size: var(--font-size-2xl); font-weight: var(--font-weight-bold); margin-bottom: var(--spacing-sm); color: white; }
.cta-card p { font-size: var(--font-size-sm); opacity: 0.9; margin-bottom: var(--spacing-lg); }

.btn-cta {
  background: white;
  color: var(--primary-color);
  padding: 10px var(--spacing-xl);
  font-weight: var(--font-weight-semibold);
  border-radius: var(--radius-md);
  transition: all var(--transition-fast);
}

.btn-cta:hover { transform: translateY(-2px); box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15); }

/* Announcements Section */
.announcements-section {
  padding: var(--spacing-3xl) 0;
  background: var(--bg-section);
}

.announcements-list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.announcement-card {
  background: var(--bg-card);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--border-color);
  transition: box-shadow var(--transition-fast), border-color var(--transition-fast);
}

.announcement-card:hover { box-shadow: var(--shadow-md); border-color: var(--primary-light); }

.announcement-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: var(--spacing-sm); }
.announcement-type { padding: 3px 10px; font-size: var(--font-size-xs); font-weight: var(--font-weight-semibold); border-radius: 4px; }
.type-notice { background: rgba(59, 130, 246, 0.1); color: var(--primary-color); }
.type-activity { background: rgba(239, 68, 68, 0.1); color: var(--color-error); }
.announcement-time { font-size: var(--font-size-xs); color: var(--text-muted); }
.announcement-title { font-size: var(--font-size-base); font-weight: var(--font-weight-semibold); color: var(--text-heading); margin-bottom: var(--spacing-sm); }
.announcement-content { font-size: var(--font-size-sm); color: var(--text-secondary); line-height: var(--line-height-relaxed); }

/* Responsive */
@media (max-width: 1024px) {
  .features-grid, .stats-grid { grid-template-columns: repeat(2, 1fr); }
  .consignment-content { flex-direction: column; }
  .mission-card { flex-direction: column; text-align: center; }
  .mission-visual { margin-left: 0; margin-top: var(--spacing-lg); }
  .mission-highlights { justify-content: center; }
}

@media (max-width: 768px) {
  .hero-section .container { flex-direction: column; text-align: center; }
  .hero-visual { display: none; }
  .hero-actions { justify-content: center; }
  .features-grid, .stats-grid { grid-template-columns: 1fr; }
  .hero-title { font-size: var(--font-size-3xl); }
  .mission-highlights { flex-direction: column; gap: var(--spacing-sm); }
}
</style>
