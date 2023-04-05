import { createWebHistory, createRouter } from "vue-router";

import HomePage from "@/components/view/HomePage.vue"
import LogIn from "@/components/view/LogIn.vue"

const routes = [  
    {
        path: "/",
        name: "Home",
        component: HomePage,
    },
    {
        path: "/login",
        name: "Login",
        component: LogIn,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;