import { createRouter, createWebHistory } from 'vue-router';
import HomeView from "@/views/Home.vue"
import POSView from "@/views/POS.vue"
import Login from "@/views/Login.vue"
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
            meta: {
                authRequired: true
            }
          },
          {
            path: "/pos",
            name: "POS",
            component: POSView,
            meta: {
                authRequired: true
                }
        },
        {
            path: "/login",
            name: "login",
            component: Login,
        },
    ]
})
export default router;


router.beforeEach(async(to) => {
    const authRequired = to.meta.authRequired;
    if (!localStorage.getItem("email") && authRequired == true) {
        return '/login';
    }
});



