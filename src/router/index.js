import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from "../views/home/Home";
import Plan from "../views/plans/Plan";
import Store from "../views/store/Store";
import Subscribe from "../views/subscribe/Subscribe";

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        { name: "home", path: "/", component: Home },
        { name: "plans", path: "/plans", component: Plan },
        { name: "store", path: "/store", component: Store },
        { name: "subscribe", path: "/subscribe", component: Subscribe },
    ]
});
