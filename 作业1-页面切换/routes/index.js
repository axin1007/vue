import Index from "../views/Index.vue";
import Class from "../views/Class.vue";
import Order from "../views/Order.vue";
import My from "../views/My.vue";
import NoFound from "../views/NoFound.vue";
let routes = [];
export default routes = [
  {
    path: "/",
    redirect: "/index",
  },
  {
    name: "Index",
    path: "/index",
    component: Index,
  },
  {
    name: "Class",
    path: "/class",
    component: Class,
  },
  {
    name: "Order",
    path: "/order",
    component: Order,
  },
  {
    name: "My",
    path: "/my",
    component: My,
  },
  {
    path: "/",
    component: NoFound,
  },
];
