import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
Vue.filter('toLo',(val) => {
 return val.toLowerCase()
})
new Vue({
  render: h => h(App),
}).$mount('#app')
