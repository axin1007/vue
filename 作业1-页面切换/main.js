// 导入Vue
import Vue from "vue"
// 导入总组件App
import App from "./App.vue"
// 导入 vue 路由
import VueRouter from "vue-router"

// 导入要展示的子组件
// 用到的子组件已经放置在index.js文件中

// 关闭生产提醒
Vue.config.productionTip = false
// 全局注册
Vue.use(VueRouter)

// 配置路由规则，确定要显示的页面
import routes from "./routes/index"

// 创建 Vue路由实例对象
const router = new VueRouter({
  // 传入规则
  // routes: routes,
  routes,
})

// 创建 Vue实例对象
new Vue({
  /* 将VueRouter 放入 Vue 实例中与之关联  方便后续直接 $router $route 使用*/
  router,
  render: (h) => h(App)
}).$mount("#app")