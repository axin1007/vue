import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false
import Find from "./views/Find.vue"
import My from "./views/My.vue"
import Part from "./views/Part.vue"
import NotFound from "./views/NotFound.vue"

// 1.下载，引入 vue-router
import VueRouter from 'vue-router'
// 2.全局注册
Vue.use(VueRouter)
// 3.配置路由规则
// 确认要展示的页面
const routes = [
  {
    path: "/", // 默认hash值路径
    redirect: "/find", // 重定向到/find
    // 浏览器url中#后的路径被改变成/find-重新匹配数组规则
  },
  {
    path: "/find",
    component: Find
  },
  {
    path: "/my",
    component: My
  },
  {
    // 有:的路径代表要接收具体的值
    path: "/part",
    component: Part
  },
  {
    // 404在最后(规则是从前往后逐个比较path)
    path: "*",
    component: NotFound
  },
]

// 4.根据路由规则生成路由对象
const router = new VueRouter({
  routes
}); // router 路由器， 管理路由规则的

// 5.路由对象注入到vue实例中，this可以访问$route和$router
// 7.设置挂载点
new Vue({
  // 生成一个实例
  // router: router,
  router,
  render: h => h(App),
}).$mount('#app')
