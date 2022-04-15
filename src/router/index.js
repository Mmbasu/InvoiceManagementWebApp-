import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import InvoiceView from "@/views/InvoiceView";
import Welcome from "../welcome";
import Login from "../login";
import Signup from "../signup";

const routes = [
    {
        path: "/",
        redirect: {
            name:"Welcome",
        }
    },
    {
        path: "/welcome",
        name: "Welcome",
        component: Welcome,
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
    },
    {
        path: "/signup",
        name: "SignUp",
        component: Signup,
    },
    {
        path: "/Home",
        name: "Home",
        component: Home,
    },
    {
        path: "/invoice/:invoiceId",
        name: "Invoice",
        component: InvoiceView,
    },

];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
