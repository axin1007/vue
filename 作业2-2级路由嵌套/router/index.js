import Index from "../views/Index.vue"
import Class from "../views/Class.vue"
import Order from "../views/Order.vue"
import My from "../views/My.vue"
import Sindex from '../views/sport/Sindex.vue'
import Sinternal from '../views/sport/Sinternal.vue'
import Sabroad from '../views/sport/Sabroad.vue'
let routes = []
export default routes = [
  {
    path: "/",
    redirect: "/order/sindex",
  },
  {
    path: "/index",
    component: Index,
  },
  {
    path: "/class",
    component: Class,
  },
  {
    path: "/order",
    component: Order,
    children: [
      {
        path: 'sindex',
        component: Sindex
      },
      {
        path: 'sinternal',
        component: Sinternal
      },
      {
        path: 'sabroad',
        component: Sabroad
      },
      {
        path: '*',
        component: My
      },
    ]
  },
  {
    path: "*",
    component: My,
  },
]