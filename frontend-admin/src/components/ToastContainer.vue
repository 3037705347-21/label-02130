<script setup>
import { useToast } from '@/composables/useToast'

const { toasts, removeToast } = useToast()

function getIcon(type) {
  const icons = {
    success: '✓',
    error: '✕',
    warning: '⚠',
    info: 'ℹ'
  }
  return icons[type] || icons.info
}
</script>

<template>
  <div class="toast-container" role="alert" aria-live="polite">
    <TransitionGroup name="toast">
      <div
        v-for="toast in toasts"
        :key="toast.id"
        class="toast"
        :class="[`toast-${toast.type}`]"
        @click="removeToast(toast.id)"
        tabindex="0"
        @keydown.enter="removeToast(toast.id)"
        @keydown.escape="removeToast(toast.id)"
      >
        <span class="toast-icon" aria-hidden="true">{{ getIcon(toast.type) }}</span>
        <span class="toast-message">{{ toast.message }}</span>
        <button class="toast-close" aria-label="关闭提示">×</button>
      </div>
    </TransitionGroup>
  </div>
</template>

<style scoped>
.toast-container {
  position: fixed;
  top: 80px;
  right: 20px;
  z-index: 2000;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.toast {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  padding: var(--spacing-md) var(--spacing-lg);
  background: var(--bg-card);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-lg);
  cursor: pointer;
  min-width: 280px;
  max-width: 400px;
  border-left: 4px solid;
  transition: transform var(--transition-fast), opacity var(--transition-fast);
}

.toast:hover {
  transform: translateX(-4px);
}

.toast:focus-visible {
  outline: 2px solid var(--primary-color);
  outline-offset: 2px;
}

.toast-success {
  border-left-color: var(--color-success);
}

.toast-success .toast-icon {
  color: var(--color-success);
  background: rgba(16, 185, 129, 0.1);
}

.toast-error {
  border-left-color: var(--color-error);
}

.toast-error .toast-icon {
  color: var(--color-error);
  background: rgba(239, 68, 68, 0.1);
}

.toast-warning {
  border-left-color: var(--color-warning);
}

.toast-warning .toast-icon {
  color: var(--color-warning);
  background: rgba(245, 158, 11, 0.1);
}

.toast-info {
  border-left-color: var(--primary-color);
}

.toast-info .toast-icon {
  color: var(--primary-color);
  background: rgba(59, 130, 246, 0.1);
}

.toast-icon {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: bold;
  flex-shrink: 0;
}

.toast-message {
  flex: 1;
  font-size: var(--font-size-sm);
  color: var(--text-primary);
  line-height: var(--line-height-normal);
}

.toast-close {
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: var(--text-muted);
  border-radius: 4px;
  transition: all var(--transition-fast);
}

.toast-close:hover {
  background: var(--bg-section);
  color: var(--text-primary);
}

/* 过渡动画 */
.toast-enter-active {
  animation: toastIn 0.25s ease;
}

.toast-leave-active {
  animation: toastOut 0.25s ease;
}

@keyframes toastIn {
  from {
    opacity: 0;
    transform: translateX(100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes toastOut {
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(100%);
  }
}
</style>
