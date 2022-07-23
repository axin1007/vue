import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "./assets/fonts/iconfont.css"
import "../node_modules/element-ui/lib/theme-chalk/index.css"

import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import ElementUI from 'element-ui'

axios.defaults.baseURL = "https://www.escook.cn"

Vue.use(ElementUI)
Vue.prototype.$axios = axios
Vue.config.productionTip = false
Vue.directive("focus",{
  inserted(el){
    el.focus()
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')
