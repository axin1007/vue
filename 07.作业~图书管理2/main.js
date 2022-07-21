import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import "../node_modules/element-ui/lib/theme-chalk/index.css"
import axios from 'axios'
// 所有请求的url前置可以去掉, 请求时, axios会自动拼接baseURL的地址在前面
axios.defaults.baseURL = "http://www.liulongbin.top:3006"

Vue.config.productionTip = false
Vue.prototype.$axios = axios;
Vue.use(ElementUI)

new Vue({
  render: h => h(App),
  beforeCreate(){
    Vue.prototype.$bus = this
  }
}).$mount('#app')
