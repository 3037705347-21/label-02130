<script setup>
import { ref, watch, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import NavBar from '@/components/NavBar.vue'
import FooterBar from '@/components/FooterBar.vue'
import PageTransition from '@/components/PageTransition.vue'
import ToastContainer from '@/components/ToastContainer.vue'

const route = useRoute()
const showTransition = ref(false)
const transitionKey = ref(0)
const isFirstLoad = ref(true)

// 开始过渡动画
function startTransition() {
  showTransition.value = true
  transitionKey.value++
}

// 首次加载时显示过渡动画
onMounted(() => {
  startTransition()
})

// 路由变化时显示过渡动画（排除首次加载）
watch(
  () => route.path,
  () => {
    if (isFirstLoad.value) {
      isFirstLoad.value = false
      return
    }
    startTransition()
  }
)

function onTransitionComplete() {
  showTransition.value = false
}
</script>

<template>
  <div class="app">
    <NavBar />
    <main class="main-content">
      <PageTransition
        v-if="showTransition"
        :key="transitionKey"
        @complete="onTransitionComplete"
      />
      <router-view v-slot="{ Component }">
        <transition name="page-transition" mode="out-in">
          <component :is="Component" v-show="!showTransition" />
        </transition>
      </router-view>
    </main>
    <FooterBar />
    <ToastContainer />
  </div>
</template>

<style scoped>
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  padding-top: 64px;
  position: relative;
}
</style>
