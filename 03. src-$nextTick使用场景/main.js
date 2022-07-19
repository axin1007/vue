import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
// 所有请求的url前置可以去掉, 请求时, axios会自动拼接baseURL的地址在前面
axios.defaults.baseURL = "http://123.57.109.30:3006"

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  beforeCreate(){
    Vue.prototype.$axios = axios;
  }
}).$mount('#app')
