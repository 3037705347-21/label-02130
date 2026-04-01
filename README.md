# 卡密商城 (Card Key Mall)

## How to Run

```bash
# 使用 Docker Compose 运行（推荐）
docker-compose up --build -d

# 查看运行状态
docker-compose ps

# 查看日志
docker-compose logs -f frontend-admin

# 停止服务
docker-compose down
```

本地开发运行：
```bash
cd frontend-admin
npm install
npm run dev
```

## Services

| 服务名称 | 端口 | 描述 |
|---------|------|------|
| frontend-admin | 8081 | 卡密商城前端服务 |

访问地址: http://localhost:8081

## 测试账号

本项目使用模拟数据，无需登录账号即可体验全部功能。

## 题目内容

帮我使用vue编写一个卡密商城页面，导航栏中有四个导航键，分别是首页，购买卡密，我的订单和关于页面，使用 嵌套路由(在 /todos 下渲染详情)，并用<router-link> 导航。
要求全部使用组合式 API(<script setup>)
用vue-router 配置页面
每个页面切换时都显示动画，动画为一个蓝色的圆球从完整到渐渐消散，
进入首页时，先是显示动画，然后就是网站的首页介绍平台优势，平台寄售功能，平台公告
切换到购买卡密页面时，展示动画完成后进入购买卡密页面，购买页面使用几个模拟数据购买后可在我的订单内查看到订单。
关于页面就是关于平台的介绍。
其中此项目内所有的数据均为模拟数据
要求ui设计美观，布局合理，且井然有序

## 项目结构

```
.
├── frontend-admin/                    # 前端项目
│   ├── src/
│   │   ├── assets/
│   │   │   └── styles/
│   │   │       └── main.css           # 全局样式
│   │   ├── components/
│   │   │   ├── icons/
│   │   │   │   └── IconKey.vue        # Logo 图标
│   │   │   ├── FooterBar.vue          # 页脚组件
│   │   │   ├── NavBar.vue             # 导航栏组件
│   │   │   ├── OrderCard.vue          # 订单卡片组件
│   │   │   ├── PageTransition.vue     # 页面过渡动画
│   │   │   ├── ProductCard.vue        # 商品卡片组件
│   │   │   └── ToastContainer.vue     # Toast 提示组件
│   │   ├── composables/
│   │   │   ├── useProducts.js         # 商品数据
│   │   │   └── useToast.js            # Toast 功能
│   │   ├── router/
│   │   │   └── index.js               # 路由配置
│   │   ├── stores/
│   │   │   └── order.js               # 订单状态管理
│   │   ├── views/
│   │   │   ├── AboutView.vue          # 关于页面
│   │   │   ├── HomeView.vue           # 首页
│   │   │   ├── OrderDetailView.vue    # 订单详情页（嵌套路由）
│   │   │   ├── OrdersView.vue         # 订单列表页
│   │   │   └── PurchaseView.vue       # 购买卡密页
│   │   ├── App.vue                    # 根组件
│   │   └── main.js                    # 入口文件
│   ├── public/
│   │   └── favicon.svg                # 网站图标
│   ├── Dockerfile                     # Docker 构建文件
│   ├── nginx.conf                     # Nginx 配置
│   ├── index.html                     # HTML 入口
│   ├── package.json                   # 项目配置
│   └── vite.config.js                 # Vite 配置
├── docker-compose.yml                 # Docker 编排配置
├── .gitignore                         # Git 忽略文件
└── README.md                          # 项目说明
```

## 技术栈

- Vue 3 (Composition API)
- Vue Router 4
- Pinia (状态管理)
- Vite (构建工具)
- CSS3 动画
- Docker + Nginx

## 功能特性

- 🏠 首页：平台介绍、数据统计、优势展示、公告信息
- 🛒 购买卡密：商品列表、分类筛选、搜索、购买功能
- 📋 我的订单：订单列表、订单详情（嵌套路由 /todos/:id）
- ℹ️ 关于：平台介绍、团队信息、联系方式
- ✨ 页面切换动画：简洁的加载动画
- 📱 响应式设计
- 🎨 统一设计系统

## Docker 镜像说明

本项目 Dockerfile 支持跨平台构建，同时兼容 ARM64 (Apple Silicon) 和 AMD64 (x86) 架构。

验证 ARM 架构支持：
```bash
docker pull --platform linux/arm64 nginx:1.25-alpine
docker pull --platform linux/arm64 node:20-alpine
```
