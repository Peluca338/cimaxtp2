import { createRouter, createWebHistory } from 'vue-router'
import HomeCimax from '../componentsHomeCimax.vue'
import peliCard from '@/components/peliCard.vue'
import pelisGuardadas from '@/components/pelisGuardadas.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
        path: '/',
        name: 'home',
        component: HomeCimax
        },
        {
        path: '/products',
        name: 'products',
        component: ProductViewVue
        },
        {
        path: '/detail/:id',
        name: 'product-detail',
        component: DetailsView
        },
        {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../views/AboutView.vue')
        }
    ]
})

export default router
