import { createRouter, createWebHashHistory } from "vue-router";

import Layout from "../views/PublicLayout.vue";

import SignIn from "../components/sign-in.vue";
import Signup from "../views/signup.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: Layout,
    },
    {
      path: "/login",
      name: "Sign-in",
      component: SignIn,
    },
    {
      path: "/register",
      name: "Sign-up",
      component: Signup,
    },
  ],
});

export default router;
