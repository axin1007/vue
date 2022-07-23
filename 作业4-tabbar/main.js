import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './assets/fonts/iconfont.css'
import '../node_modules/element-ui/lib/theme-chalk/index.css'

import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import ElementUI from 'element-ui'
import VueRouter from 'vue-router'
// 全局注册 VueRouter
Vue.use(VueRouter)
// 配置路由规则，选好需要展示的页面
import routes from './routes'
// 创建router实例对象
const router = new VueRouter({
  // 引入规则
  routes,
})

axios.defaults.baseURL = 'https://www.escook.cn'
Vue.use(ElementUI)
Vue.prototype.$axios = axios
Vue.config.productionTip = false
Vue.directive('focus', {
  inserted(el) {
    el.focus()
  },
})
// 将router关联上Vue
new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
