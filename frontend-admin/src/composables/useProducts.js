import { ref } from 'vue'

// 模拟商品数据
const mockProducts = [
  {
    id: 1,
    name: 'Steam 充值卡 50元',
    description: 'Steam 平台通用充值卡，可用于购买游戏、DLC等',
    price: 48.00,
    originalPrice: 50.00,
    icon: '🎮',
    category: '游戏充值',
    stock: 999,
    sales: 2580,
    tags: ['热销', '限时优惠']
  },
  {
    id: 2,
    name: 'Netflix 会员月卡',
    description: 'Netflix 高级会员一个月，支持4K超清画质',
    price: 35.00,
    originalPrice: 45.00,
    icon: '🎬',
    category: '影视会员',
    stock: 500,
    sales: 1890,
    tags: ['热销']
  },
  {
    id: 3,
    name: 'Spotify 会员季卡',
    description: 'Spotify Premium 三个月会员，无广告畅听',
    price: 68.00,
    originalPrice: 90.00,
    icon: '🎵',
    category: '音乐会员',
    stock: 300,
    sales: 1256,
    tags: ['超值']
  },
  {
    id: 4,
    name: 'ChatGPT Plus 月卡',
    description: 'ChatGPT Plus 会员一个月，GPT-4 无限使用',
    price: 145.00,
    originalPrice: 160.00,
    icon: '🤖',
    category: 'AI工具',
    stock: 200,
    sales: 3680,
    tags: ['热销', '新品']
  },
  {
    id: 5,
    name: 'Apple Store 礼品卡 100元',
    description: 'Apple Store 通用礼品卡，可购买应用、游戏等',
    price: 98.00,
    originalPrice: 100.00,
    icon: '🍎',
    category: '应用商店',
    stock: 800,
    sales: 2100,
    tags: []
  },
  {
    id: 6,
    name: 'Google Play 礼品卡 50元',
    description: 'Google Play 商店充值卡，全球通用',
    price: 49.00,
    originalPrice: 50.00,
    icon: '📱',
    category: '应用商店',
    stock: 600,
    sales: 1580,
    tags: []
  },
  {
    id: 7,
    name: 'Xbox Game Pass 月卡',
    description: 'Xbox Game Pass Ultimate 一个月，畅玩数百款游戏',
    price: 78.00,
    originalPrice: 99.00,
    icon: '🎯',
    category: '游戏充值',
    stock: 400,
    sales: 980,
    tags: ['限时优惠']
  },
  {
    id: 8,
    name: 'YouTube Premium 月卡',
    description: 'YouTube Premium 会员一个月，无广告观看',
    price: 28.00,
    originalPrice: 35.00,
    icon: '📺',
    category: '影视会员',
    stock: 700,
    sales: 2350,
    tags: ['热销']
  }
]

export function useProducts() {
  const products = ref(mockProducts)
  const loading = ref(false)

  // 获取所有商品
  function getAllProducts() {
    return products.value
  }

  // 根据ID获取商品
  function getProductById(id) {
    return products.value.find(p => p.id === id)
  }

  // 根据分类获取商品
  function getProductsByCategory(category) {
    if (!category || category === '全部') {
      return products.value
    }
    return products.value.filter(p => p.category === category)
  }

  // 获取所有分类
  function getCategories() {
    const categories = new Set(products.value.map(p => p.category))
    return ['全部', ...Array.from(categories)]
  }

  // 搜索商品
  function searchProducts(keyword) {
    if (!keyword) return products.value
    const lowerKeyword = keyword.toLowerCase()
    return products.value.filter(p =>
      p.name.toLowerCase().includes(lowerKeyword) ||
      p.description.toLowerCase().includes(lowerKeyword)
    )
  }

  // 根据分类和关键词搜索商品
  function getFilteredProducts(category, keyword) {
    let result = products.value

    // 先按分类过滤
    if (category && category !== '全部') {
      result = result.filter(p => p.category === category)
    }

    // 再按关键词搜索
    if (keyword) {
      const lowerKeyword = keyword.toLowerCase()
      result = result.filter(p =>
        p.name.toLowerCase().includes(lowerKeyword) ||
        p.description.toLowerCase().includes(lowerKeyword)
      )
    }

    return result
  }

  return {
    products,
    loading,
    getAllProducts,
    getProductById,
    getProductsByCategory,
    getCategories,
    searchProducts,
    getFilteredProducts
  }
}
