// 引入需要显示的组件
import UiRouter from "../components/UiRouter.vue";
import Contacts from "../components/Contacts.vue";
import About from "../components/About.vue";
import Nofound from "../components/Nofound.vue";
import Acontacts from "../components/one/Acontacts.vue";
import Alice from "../components/one/Alice.vue";
import Bob from "../components/one/Bob.vue";
import Blog from "../components/one/two/Blog.vue";
import Fax from "../components/one/two/Fax.vue";

let routes = [];
export default routes = [
  {
    path: "/",
    redirect: "/contacts/bob/fax",
  },
  {
    path: "/uiRouter",
    component: UiRouter,
  },
  {
    path: "/contacts",
    component: Contacts,
    children: [
      {
        name: "Acontacts",
        path: "acontacts",
        component: Acontacts,
      },
      {
        name: "Alice",
        path: "alice",
        component: Alice,
      },
      {
        name: "Bob",
        path: "bob",
        component: Bob,
        children: [
          {
            path: "blog",
            component: Blog,
          },
          {
            path: "fax",
            component: Fax,
          },
        ],
      },
    ],
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "*",
    component: Nofound,
  },
];
