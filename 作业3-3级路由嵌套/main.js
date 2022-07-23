// 导入 Vue
import Vue from "vue";
// 导入总组件 App
import App from "./App.vue";
// 关闭生成提示
Vue.config.productionTip = false;
// 导入 VueRouter
import VueRouter from "vue-router";
// 全局注册VueRouter
Vue.use(VueRouter);
// 配置路由规则 确认显示的页面
import routes from "./routes";
// 创建router实例对象
const router = new VueRouter({
  // 引入规则
  // routes: routes
  routes,
});

// 将router与Vue实例关联，方便后续  $router $route的使用
// 创建 Vue 实例对象
new Vue({
  router,
  // render 渲染函数 要将App里面的数据渲染到页面就必须是用render这个函数
  render: (h) => h(App),
}).$mount("#app"); // 挂载实验对象 也可以在实例对象里面 el:"#app"
