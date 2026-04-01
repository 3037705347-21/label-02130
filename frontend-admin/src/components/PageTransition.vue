<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const emit = defineEmits(['complete'])
const isAnimating = ref(true)
let timer = null

onMounted(() => {
  timer = setTimeout(() => {
    isAnimating.value = false
    emit('complete')
  }, 800)
})

// 组件销毁前清理定时器，并确保触发 complete 事件
onBeforeUnmount(() => {
  if (timer) {
    clearTimeout(timer)
    // 如果动画还在进行中，确保触发 complete 事件
    if (isAnimating.value) {
      emit('complete')
    }
  }
})
</script>

<template>
  <div class="page-transition" :class="{ animating: isAnimating }" aria-hidden="true">
    <div class="ball-container">
      <div class="blue-ball">
        <div class="particle" v-for="i in 12" :key="i"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page-transition {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-page);
  z-index: 999;
  pointer-events: none;
  opacity: 0;
  transition: opacity var(--transition-fast);
}

.page-transition.animating {
  opacity: 1;
}

.ball-container {
  position: relative;
  width: 60px;
  height: 60px;
}

.blue-ball {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 50px;
  height: 50px;
  background: var(--gradient-primary);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 4px 20px rgba(59, 130, 246, 0.4);
  animation: ballDissolve 0.8s ease-out forwards;
}

.particle {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 8px;
  height: 8px;
  background: var(--primary-color);
  border-radius: 50%;
  opacity: 0;
}

.particle:nth-child(1) { animation: particleFly1 0.8s ease-out forwards; animation-delay: 0.15s; }
.particle:nth-child(2) { animation: particleFly2 0.8s ease-out forwards; animation-delay: 0.17s; }
.particle:nth-child(3) { animation: particleFly3 0.8s ease-out forwards; animation-delay: 0.19s; }
.particle:nth-child(4) { animation: particleFly4 0.8s ease-out forwards; animation-delay: 0.21s; }
.particle:nth-child(5) { animation: particleFly5 0.8s ease-out forwards; animation-delay: 0.23s; }
.particle:nth-child(6) { animation: particleFly6 0.8s ease-out forwards; animation-delay: 0.25s; }
.particle:nth-child(7) { animation: particleFly7 0.8s ease-out forwards; animation-delay: 0.17s; }
.particle:nth-child(8) { animation: particleFly8 0.8s ease-out forwards; animation-delay: 0.19s; }
.particle:nth-child(9) { animation: particleFly9 0.8s ease-out forwards; animation-delay: 0.21s; }
.particle:nth-child(10) { animation: particleFly10 0.8s ease-out forwards; animation-delay: 0.23s; }
.particle:nth-child(11) { animation: particleFly11 0.8s ease-out forwards; animation-delay: 0.25s; }
.particle:nth-child(12) { animation: particleFly12 0.8s ease-out forwards; animation-delay: 0.27s; }

@keyframes ballDissolve {
  0% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
  }
  50% {
    transform: translate(-50%, -50%) scale(1.1);
    opacity: 0.8;
  }
  100% {
    transform: translate(-50%, -50%) scale(0);
    opacity: 0;
  }
}

@keyframes particleFly1 {
  0% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
  30% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
  100% { opacity: 0; transform: translate(calc(-50% + 35px), -50%) scale(0); }
}
@keyframes particleFly2 {
  0% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
  30% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
  100% { opacity: 0; transform: translate(calc(-50% + 30px), calc(-50% + 18px)) scale(0); }
}
@keyframes particleFly3 {
  0% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
  30% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
  100% { opacity: 0; transform: translate(calc(-50% + 18px), calc(-50% + 30px)) scale(0); }
}
@keyframes particleFly4 {
  0% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
  30% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
  100% { opacity: 0; transform: translate(-50%, calc(-50% + 35px)) scale(0); }
}
@keyframes particleFly5 {
  0% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
  30% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
  100% { opacity: 0; transform: translate(calc(-50% - 18px), calc(-50% + 30px)) scale(0); }
}
@keyframes particleFly6 {
  0% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
  30% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
  100% { opacity: 0; transform: translate(calc(-50% - 30px), calc(-50% + 18px)) scale(0); }
}
@keyframes particleFly7 {
  0% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
  30% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
  100% { opacity: 0; transform: translate(calc(-50% - 35px), -50%) scale(0); }
}
@keyframes particleFly8 {
  0% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
  30% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
  100% { opacity: 0; transform: translate(calc(-50% - 30px), calc(-50% - 18px)) scale(0); }
}
@keyframes particleFly9 {
  0% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
  30% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
  100% { opacity: 0; transform: translate(calc(-50% - 18px), calc(-50% - 30px)) scale(0); }
}
@keyframes particleFly10 {
  0% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
  30% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
  100% { opacity: 0; transform: translate(-50%, calc(-50% - 35px)) scale(0); }
}
@keyframes particleFly11 {
  0% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
  30% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
  100% { opacity: 0; transform: translate(calc(-50% + 18px), calc(-50% - 30px)) scale(0); }
}
@keyframes particleFly12 {
  0% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
  30% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
  100% { opacity: 0; transform: translate(calc(-50% + 30px), calc(-50% - 18px)) scale(0); }
}
</style>
