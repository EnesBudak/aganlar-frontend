import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import Yatchs from "../views/Yatchs.vue";
import Teknelerimiz from "../views/Teknelerimiz.vue";
import Brokerage from "../views/Brokerage.vue";
import Marina from "../views/Marina.vue";
import Servisler from "../views/Servisler.vue";
import Insurance from "../views/Insurance.vue";
import Projects from "../views/Projects.vue";
import Tersanemiz from "../views/Tersanemiz.vue";
import Hakkimizda from "../views/Hakkimizda.vue";
import ErolAgan from "../views/ErolAgan.vue";
import Kalite from "../views/Kalite.vue";
import Blog from "../views/Blog.vue";
import Haberler from "../views/Haberler.vue";
import BasindaBiz from "../views/BasindaBiz.vue";
import YatLift from "../views/YatLift.vue";
import Contact from "../views/Contact.vue";
import ContinuingProjects from '../views/ContiuningProjects.vue'
import newProjects from '../views/newProjects.vue'
import Refit from '../views/Refit.vue'
import YachtsTamir from '../views/YachtsTamir.vue'
import BrokerageRent from "../views/BrokerageRent.vue";
import BrokerageSell from "../views/BrokerageSell.vue";
import Detail from '../views/Detail.vue'
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/yacht",
    name: "Yatchs",
    component: Teknelerimiz,
  },
  {
    path: "/teknelerimiz",
    name: "Teknelerimiz",
    component: Yatchs,
  },
  {
    path: "/brokerage",
    name: "Brokerage",
    component: Brokerage,
  },
  {
    path: "/marina",
    name: "Marina",
    component: Marina,
  },
  {
    path: "/insurance",
    name: "Insurance",
    component: Insurance,
  },
  {
    path: "/servisler",
    name: "Servisler",
    component: Servisler,
  },
  {
    path: "/brokerage/rent",
    name: "BrokerageRent",
    component: BrokerageRent,
  },
  {
    path: "/brokerage/sell",
    name: "BrokerageSell",
    component: BrokerageSell,
  },
  {
    path: "/yacht/:id",
    name: "Detail",
    component: Detail,
  },
  {
    path: "/projelerimiz",
    name: "Projelerimiz",
    component: Projects,
  },
  {
    path: "/continuingprojects",
    name: "ContinuingProjects",
    component: ContinuingProjects,
  },
  {
    path: "/newprojects",
    name: "NewProjects",
    component: newProjects,
  },
  {
    path: "/yachtstamir",
    name: "YachtsTamir",
    component: YachtsTamir,
  },
  {
    path: "/tersanemiz",
    name: "Tersanemiz",
    component: Tersanemiz,
  },
  {
    path: "/yatlift",
    name: "YatLift",
    component: YatLift,
  },
  {
    path: "/refit",
    name: "Refit",
    component: Refit,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/hakkimizda",
    name: "Hakkimizda",
    component: Hakkimizda,
  },
  {
    path: "/erolagan",
    name: "ErolAgan",
    component: ErolAgan,
  },
  {
    path: "/basindabiz",
    name: "BasindaBiz",
    component: BasindaBiz,
  },
  {
    path: "/kalite",
    name: "Kalite",
    component: Kalite,
  },
  {
    path: "/blog",
    name: "Blog",
    component: Blog,
  },
  {
    path: "/haberler",
    name: "Haberler",
    component: Haberler,
  },
  
  
  // {
  //   path: "/detail/:id",
  //   name: "Detail",
  //   component: Detail,
  // },
//   {
//     path: "/checkout",
//     name: "Checkout",
//     component: Checkout,
//   },
//   {
//     path: "/login",
//     name: "Login",
//     component: Login,
//   },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    window.scrollTo(0,0);
  }
});

export default router;