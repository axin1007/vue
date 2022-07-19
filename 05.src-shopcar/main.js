import Vue from 'vue'
import App from './App.vue'
import "../node_modules/bootstrap/dist/css/bootstrap.css" // 引入第三方包里的某个css文件
import axios from "axios"
axios.defaults.baseURL = "https://www.escook.cn"
Vue.prototype.$axios = axios
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
