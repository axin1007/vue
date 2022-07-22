import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false
import Find from "./views/Find.vue"
import My from "./views/My.vue"
import Part from "./views/Part.vue"

// 1.下载，引入 vue-router
import VueRouter from 'vue-router'
// 2.全局注册
Vue.use(VueRouter)
// 修正重复点击报错
const VueRouterPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(to) {
  return VueRouterPush.call(this, to).catch((err) => err);
};
// 3.配置路由规则
// 确认要展示的页面
const routes = [
  {
    path: "/find",
    name: "Find",
    component: Find,
  },
  {
    path: "/my",
    name: "My",
    component: My
  },
  {
    path: "/part",
    name: "Part",
    component: Part
  },
]

// 4.根据路由规则生成路由对象
const router = new VueRouter({
  routes,
  mode: "history" // 打包上线后需要后台支持, 默认模式是hash
}); // router 路由器， 管理路由规则的

// 5.路由对象注入到vue实例中，this可以访问$route和$router
// 7.设置挂载点
new Vue({
  // 生成一个实例
  // router: router,
  router,
  render: h => h(App),
}).$mount('#app')
