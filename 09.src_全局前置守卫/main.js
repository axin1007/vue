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
// 目标: 路由守卫
// 场景: 当你要对路由权限判断时
// 语法: router.beforeEach((to, from, next)=>{//路由跳转"之前"先执行这里, 决定是否跳转})
// 参数1: 要跳转到的路由 (路由对象信息)    目标
// 参数2: 从哪里跳转的路由 (路由对象信息)  来源
// 参数3: 函数体 - next()才会让路由正常的跳转切换, next(false)在原地停留, next("强制修改到另一个路由路径上")
// 注意: 如果不调用next, 页面留在原地

// 例子: 判断用户是否登录, 是否决定去"我的音乐"/my
const isLogin = false; // 登录状态(未登录)
router.beforeEach((to, from, next) => {
  console.log(to) // 去哪里
  console.log(from) // 来自哪里
  if(to.path == "/my" && !isLogin){
    alert('请登入')
    next(false)  // 阻止路由跳转
  } else {
    next()  // 正常方行
  }
})
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
