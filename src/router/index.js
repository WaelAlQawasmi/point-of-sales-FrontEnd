import { createRouter, createWebHistory } from 'vue-router';
import HomeView from "@/views/Home.vue"
import POSView from "@/views/POS.vue"
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
          },
          {
            path: "/pos",
            name: "POS",
            component: POSView,
        },
        


    ]
})
export default router;






