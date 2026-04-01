import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useOrderStore = defineStore('order', () => {
  // 订单列表
  const orders = ref([])

  // 订单计数器
  let orderIdCounter = 1000

  // 获取所有订单
  const allOrders = computed(() => orders.value)

  // 获取订单数量
  const orderCount = computed(() => orders.value.length)

  // 添加订单
  function addOrder(product, quantity = 1) {
    const orderId = `ORD${++orderIdCounter}`
    const cardKeys = generateCardKeys(quantity)

    const order = {
      id: orderId,
      productId: product.id,
      productName: product.name,
      productIcon: product.icon,
      price: product.price,
      quantity,
      totalPrice: product.price * quantity,
      cardKeys,
      status: 'completed',
      statusText: '已完成',
      createTime: new Date().toLocaleString('zh-CN'),
      timestamp: Date.now()
    }

    orders.value.unshift(order)
    return order
  }

  // 生成模拟卡密
  function generateCardKeys(count) {
    const keys = []
    for (let i = 0; i < count; i++) {
      const key = generateRandomKey()
      keys.push(key)
    }
    return keys
  }

  // 生成随机卡密
  function generateRandomKey() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    const segments = []
    for (let i = 0; i < 4; i++) {
      let segment = ''
      for (let j = 0; j < 4; j++) {
        segment += chars.charAt(Math.floor(Math.random() * chars.length))
      }
      segments.push(segment)
    }
    return segments.join('-')
  }

  // 根据ID获取订单
  function getOrderById(id) {
    return orders.value.find(order => order.id === id)
  }

  // 删除订单
  function deleteOrder(id) {
    const index = orders.value.findIndex(order => order.id === id)
    if (index > -1) {
      orders.value.splice(index, 1)
      return true
    }
    return false
  }

  return {
    orders,
    allOrders,
    orderCount,
    addOrder,
    getOrderById,
    deleteOrder
  }
})
