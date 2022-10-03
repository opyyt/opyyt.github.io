import {
    createRouter,
    createWebHistory
} from "vue-router";
import accueil from '../views/Accueil.vue'
import home from '../views/Home.vue'
import contact from '../views/Contact.vue'

const routes = [{
    path: "/",
    name: "Accueil",
    component: accueil
}, {
    path: "/Home",
    name: "Home",
    component: home
}, {
    path: "/Contact",
    name: "Contact",
    component: contact
}];

const router = createRouter({
    history: createWebHistory(),
    routes
});


export default router;

