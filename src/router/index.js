import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Customers from "../views/Customers.vue";
import Contact from "../views/Contact.vue";
import VModal from "vue-js-modal";
import { authGuard } from "../auth/authGuard";

Vue.use(VueRouter);
Vue.use(VModal);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    beforeEnter: authGuard
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/customers",
    name: "Customers",
    component: Customers,
    beforeEnter: authGuard
  },
  {
    path: "/customers/:customerID",
    name: "Customer",
    component: Customers,
    beforeEnter: authGuard
  },
  {
    path: "/Contact",
    name: "Contact",
    component: Contact,
    beforeEnter: authGuard
  }
];

const router = new VueRouter({
  routes,
  mode: "history"
});

export default router;
