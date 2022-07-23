import MyGoodList from '../views/MyGoodList.vue'
import MyInfo from '../views/MyInfo.vue'
import MySearch from '../views/MySearch.vue'

let routes = []
export default routes = [
  {
    path: '/',
    redirect: '/myGoodList',
  },
  {
    path: '/myGoodList',
    component: MyGoodList,
  },
  {
    path: '/myInfo',
    component: MyInfo,
  },
  {
    path: '/mySearch',
    component: MySearch,
  },
]
