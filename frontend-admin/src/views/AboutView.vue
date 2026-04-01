<script setup>
const teamMembers = [
  { name: '张三', role: '创始人 & CEO', avatar: '👨‍💼' },
  { name: '李四', role: '技术总监', avatar: '👨‍💻' },
  { name: '王五', role: '产品经理', avatar: '👩‍💼' },
  { name: '赵六', role: '客服主管', avatar: '👩‍🔧' }
]

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

const milestones = [
  { year: '2020', event: '平台正式上线' },
  { year: '2021', event: '用户突破10万' },
  { year: '2022', event: '获得A轮融资' },
  { year: '2023', event: '用户突破50万' },
  { year: '2024', event: '推出寄售功能' },
  { year: '2025', event: '用户突破100万' }
]
</script>

<template>
  <div class="about-view">
    <div class="container">
      <!-- Hero Section -->
      <section class="about-hero">
        <h1 class="hero-title">关于卡密商城</h1>
        <p class="hero-desc">
          我们致力于打造最安全、最便捷的数字商品交易平台，
          为用户提供优质的卡密购买和寄售服务。
        </p>
      </section>

      <!-- Stats Section -->
      <section class="stats-section">
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
      </section>

      <!-- Mission Section -->
      <section class="mission-section">
        <div class="mission-card">
          <div class="mission-content">
            <h2 class="section-title">我们的使命</h2>
            <p class="mission-text">
              让数字商品交易变得简单、安全、高效。我们相信，通过技术创新和优质服务，
              可以为每一位用户创造更好的购物体验。
            </p>
          </div>
          <div class="mission-icon">🎯</div>
        </div>
      </section>

      <!-- Values Section -->
      <section class="values-section">
        <h2 class="section-title">核心价值观</h2>
        <div class="values-grid">
          <div class="value-card">
            <span class="value-icon">🛡️</span>
            <h3 class="value-title">安全第一</h3>
            <p class="value-desc">采用银行级加密技术，保障每一笔交易的安全</p>
          </div>
          <div class="value-card">
            <span class="value-icon">💎</span>
            <h3 class="value-title">品质保证</h3>
            <p class="value-desc">严格筛选供应商，确保100%正品卡密</p>
          </div>
          <div class="value-card">
            <span class="value-icon">🤝</span>
            <h3 class="value-title">诚信经营</h3>
            <p class="value-desc">诚实守信，假一赔十，让用户放心购买</p>
          </div>
          <div class="value-card">
            <span class="value-icon">🚀</span>
            <h3 class="value-title">持续创新</h3>
            <p class="value-desc">不断优化产品体验，为用户创造更多价值</p>
          </div>
        </div>
      </section>

      <!-- Timeline Section -->
      <section class="timeline-section">
        <h2 class="section-title">发展历程</h2>
        <div class="timeline">
          <div v-for="(item, index) in milestones" :key="item.year" class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
              <span class="timeline-year">{{ item.year }}</span>
              <span class="timeline-event">{{ item.event }}</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Team Section -->
      <section class="team-section">
        <h2 class="section-title">核心团队</h2>
        <p class="section-desc">专业团队，用心服务</p>
        <div class="team-grid">
          <article v-for="(member, index) in teamMembers" :key="member.name" class="team-card" :class="`team-card-${index + 1}`">
            <div class="team-avatar-wrap">
              <span class="team-avatar">{{ member.avatar }}</span>
            </div>
            <div class="team-info">
              <h4 class="team-name">{{ member.name }}</h4>
              <p class="team-role">{{ member.role }}</p>
            </div>
            <div class="team-social">
              <span class="social-dot"></span>
              <span class="social-dot"></span>
              <span class="social-dot"></span>
            </div>
          </article>
        </div>
      </section>

      <!-- Contact Section -->
      <section class="contact-section">
        <div class="contact-card">
          <div class="contact-header">
            <h2 class="contact-title">联系我们</h2>
            <p class="contact-subtitle">随时为您提供帮助与支持</p>
          </div>
          <div class="contact-grid">
            <a href="mailto:support@cardkeymall.com" class="contact-item">
              <div class="contact-icon-wrap email">
                <span class="contact-icon">📧</span>
              </div>
              <div class="contact-info">
                <span class="contact-label">邮箱</span>
                <span class="contact-value">support@cardkeymall.com</span>
              </div>
              <span class="contact-arrow">→</span>
            </a>
            <a href="tel:400-888-8888" class="contact-item">
              <div class="contact-icon-wrap phone">
                <span class="contact-icon">📞</span>
              </div>
              <div class="contact-info">
                <span class="contact-label">客服热线</span>
                <span class="contact-value">400-888-8888</span>
              </div>
              <span class="contact-arrow">→</span>
            </a>
            <div class="contact-item">
              <div class="contact-icon-wrap time">
                <span class="contact-icon">🕐</span>
              </div>
              <div class="contact-info">
                <span class="contact-label">服务时间</span>
                <span class="contact-value">7x24小时在线</span>
              </div>
            </div>
            <div class="contact-item">
              <div class="contact-icon-wrap location">
                <span class="contact-icon">📍</span>
              </div>
              <div class="contact-info">
                <span class="contact-label">公司地址</span>
                <span class="contact-value">北京市朝阳区科技园区</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.about-view {
  padding: var(--spacing-xl) 0 var(--spacing-2xl);
}

.section-title {
  font-size: var(--font-size-2xl);
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: var(--spacing-lg);
  text-align: center;
}

/* Hero Section */
.about-hero {
  text-align: center;
  padding: var(--spacing-2xl) 0;
  background: var(--gradient-primary);
  margin: calc(-1 * var(--spacing-xl)) calc(-1 * var(--spacing-md)) var(--spacing-2xl);
  padding: var(--spacing-2xl) var(--spacing-md);
  border-radius: 0 0 var(--radius-xl) var(--radius-xl);
}

.hero-title {
  font-size: var(--font-size-3xl);
  font-weight: 700;
  color: white;
  margin-bottom: var(--spacing-md);
}

.hero-desc {
  font-size: var(--font-size-lg);
  color: rgba(255, 255, 255, 0.9);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

/* Stats Section */
.stats-section {
  margin-bottom: var(--spacing-2xl);
  margin-top: calc(-1 * var(--spacing-xl));
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

/* Mission Section */
.mission-section {
  margin-bottom: var(--spacing-2xl);
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

.mission-card .section-title {
  color: var(--text-heading);
  text-align: left;
  margin-bottom: var(--spacing-md);
}

.mission-text {
  font-size: var(--font-size-lg);
  line-height: 1.8;
  color: var(--text-secondary);
}

.mission-icon {
  font-size: 100px;
  margin-left: var(--spacing-xl);
}

/* Values Section */
.values-section {
  margin-bottom: var(--spacing-2xl);
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--spacing-lg);
}

.value-card {
  background: var(--bg-card);
  border-radius: var(--radius-lg);
  padding: var(--spacing-xl);
  text-align: center;
  box-shadow: var(--shadow-md);
  border: 1px solid var(--border-color);
  transition: transform var(--transition-normal);
}

.value-card:hover {
  transform: translateY(-4px);
}

.value-icon {
  font-size: 48px;
  display: block;
  margin-bottom: var(--spacing-md);
}

.value-title {
  font-size: var(--font-size-lg);
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: var(--spacing-sm);
}

.value-desc {
  font-size: var(--font-size-sm);
  color: var(--text-secondary);
  line-height: 1.5;
}

/* Timeline Section */
.timeline-section {
  margin-bottom: var(--spacing-2xl);
}

.timeline {
  display: flex;
  justify-content: space-between;
  position: relative;
  padding: var(--spacing-lg) 0;
}

.timeline::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 4px;
  background: var(--border-color);
  transform: translateY(-50%);
}

.timeline-item {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
}

.timeline-dot {
  width: 20px;
  height: 20px;
  background: var(--gradient-primary);
  border-radius: 50%;
  margin-bottom: var(--spacing-md);
  box-shadow: 0 0 0 4px white, 0 0 0 6px var(--primary-color);
}

.timeline-content {
  text-align: center;
  background: var(--bg-card);
  padding: var(--spacing-md);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--border-color);
}

.timeline-year {
  display: block;
  font-size: var(--font-size-lg);
  font-weight: 700;
  color: var(--primary-color);
  margin-bottom: 4px;
}

.timeline-event {
  font-size: var(--font-size-sm);
  color: var(--text-secondary);
}

/* Team Section */
.team-section {
  margin-bottom: var(--spacing-2xl);
  padding: var(--spacing-2xl) 0;
  background: linear-gradient(180deg, var(--bg-section) 0%, var(--bg-page) 100%);
  margin-left: calc(-1 * var(--spacing-md));
  margin-right: calc(-1 * var(--spacing-md));
  padding-left: var(--spacing-md);
  padding-right: var(--spacing-md);
}

.team-section .section-title {
  margin-bottom: var(--spacing-xs);
}

.section-desc {
  text-align: center;
  font-size: var(--font-size-sm);
  color: var(--text-secondary);
  margin-bottom: var(--spacing-xl);
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--spacing-lg);
  max-width: 1200px;
  margin: 0 auto;
}

.team-card {
  background: var(--bg-card);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  text-align: center;
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--border-color);
  transition: all var(--transition-normal);
  position: relative;
  overflow: hidden;
}

.team-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: var(--gradient-primary);
  transform: scaleX(0);
  transition: transform var(--transition-normal);
}

.team-card:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-lg);
}

.team-card:hover::before {
  transform: scaleX(1);
}

.team-card-1::before { background: linear-gradient(90deg, #3b82f6, #60a5fa); }
.team-card-2::before { background: linear-gradient(90deg, #10b981, #34d399); }
.team-card-3::before { background: linear-gradient(90deg, #f59e0b, #fbbf24); }
.team-card-4::before { background: linear-gradient(90deg, #ef4444, #f87171); }

.team-avatar-wrap {
  width: 80px;
  height: 80px;
  margin: 0 auto var(--spacing-md);
  background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid white;
  box-shadow: var(--shadow-sm);
}

.team-avatar {
  font-size: 44px;
}

.team-info {
  margin-bottom: var(--spacing-md);
}

.team-name {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
  color: var(--text-heading);
  margin-bottom: 4px;
}

.team-role {
  font-size: var(--font-size-sm);
  color: var(--text-secondary);
}

.team-social {
  display: flex;
  justify-content: center;
  gap: 8px;
  padding-top: var(--spacing-md);
  border-top: 1px solid var(--border-light);
}

.social-dot {
  width: 8px;
  height: 8px;
  background: var(--border-color);
  border-radius: 50%;
  transition: background var(--transition-fast);
}

.team-card:hover .social-dot {
  background: var(--primary-color);
}

/* Contact Section */
.contact-section {
  margin-bottom: var(--spacing-lg);
}

.contact-card {
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
  border-radius: var(--radius-xl);
  padding: var(--spacing-2xl);
  box-shadow: var(--shadow-md);
  border: 1px solid var(--border-color);
}

.contact-header {
  text-align: center;
  margin-bottom: var(--spacing-xl);
}

.contact-title {
  font-size: var(--font-size-2xl);
  font-weight: var(--font-weight-bold);
  color: var(--text-heading);
  margin-bottom: var(--spacing-xs);
}

.contact-subtitle {
  font-size: var(--font-size-sm);
  color: var(--text-secondary);
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-md);
}

.contact-item {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  padding: var(--spacing-lg);
  background: var(--bg-card);
  border-radius: var(--radius-lg);
  border: 1px solid var(--border-color);
  transition: all var(--transition-fast);
  text-decoration: none;
}

.contact-item:hover {
  border-color: var(--primary-color);
  box-shadow: var(--shadow-md);
}

a.contact-item:hover .contact-arrow {
  transform: translateX(4px);
  color: var(--primary-color);
}

.contact-icon-wrap {
  width: 48px;
  height: 48px;
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.contact-icon-wrap.email { background: rgba(59, 130, 246, 0.1); }
.contact-icon-wrap.phone { background: rgba(16, 185, 129, 0.1); }
.contact-icon-wrap.time { background: rgba(245, 158, 11, 0.1); }
.contact-icon-wrap.location { background: rgba(239, 68, 68, 0.1); }

.contact-icon {
  font-size: 24px;
}

.contact-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.contact-label {
  font-size: var(--font-size-xs);
  color: var(--text-muted);
}

.contact-value {
  font-size: var(--font-size-base);
  color: var(--text-heading);
  font-weight: var(--font-weight-medium);
}

.contact-arrow {
  font-size: var(--font-size-lg);
  color: var(--text-muted);
  transition: all var(--transition-fast);
}

/* Responsive */
@media (max-width: 1024px) {
  .stats-grid,
  .values-grid,
  .team-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .timeline {
    flex-wrap: wrap;
    gap: var(--spacing-lg);
  }

  .timeline::before {
    display: none;
  }

  .timeline-item {
    width: calc(50% - var(--spacing-sm));
  }
}

@media (max-width: 768px) {
  .stats-grid,
  .values-grid,
  .team-grid,
  .contact-grid {
    grid-template-columns: 1fr;
  }

  .mission-card {
    flex-direction: column;
    text-align: center;
  }

  .mission-card .section-title {
    text-align: center;
    color: var(--text-heading);
  }

  .mission-icon {
    margin-left: 0;
    margin-top: var(--spacing-lg);
  }

  .timeline-item {
    width: 100%;
  }

  .hero-title {
    font-size: var(--font-size-2xl);
  }
}
</style>
