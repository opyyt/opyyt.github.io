import {
    createRouter,
    createWebHistory
} from "vue-router";
import sunflower from '../components/sunflower.vue'
import index from '../components/index.vue'

const routes = [{
    path: "/",
    name: "Index",
    component: index
}, {
    path: "/Sunflower",
    name: "Sunflower",
    component: sunflower
}];

const router = createRouter({
    history: createWebHistory(),
    routes
});


export default router;

