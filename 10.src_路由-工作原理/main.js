import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false
import Find from "./views/Find.vue"
import My from "./views/My.vue"
import Part from "./views/Part.vue"
import Recommend from "./views/Second/Recommend.vue"
import Ranking from "./views/Second/Ranking.vue"
import SongList from "./views/Second/SongList.vue"

import VueRouter from 'vue-router'
Vue.use(VueRouter)
const VueRouterPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(to) {
  return VueRouterPush.call(this, to).catch((err) => err);
};
const routes = [
  {
    path: "/", 
    redirect: "/find/recommend", 
  },
  {
    path: "/find",
    name: "Find",
    component: Find,
    children:[
      {
      path: "recommend",
      component: Recommend
      },
      {
        path: "ranking",
        component: Ranking
      },
      {
        path: "songList",
        component: SongList
      },
    ]
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
const router = new VueRouter({
  routes,
  mode: "history"
});
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
