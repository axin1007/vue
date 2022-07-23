import Index from "../views/Index.vue"
import Class from "../views/Class.vue"
import Order from "../views/Order.vue"
import My from "../views/My.vue"
let routes = []
export default routes = [
  {
    path:"/",
    redirect:"/index",
  },
  {
    path:"/index",
    component: Index,
  },
  {
    path:"/class",
    component: Class,
  },
  {
    path:"/order",
    component: Order,
  },
  {
    path:"/my",
    component: My,
  },  
]