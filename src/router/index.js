import Vue from 'vue'
import VueRouter from 'vue-router'

import Auth from "@/views/auth/Auth";
import Home from "@/views/admin/Admin";

// task
import TaskNew from "@/views/task/New";
import TaskShow from "@/views/task/Show";

// class
import ClassNew from "@/views/class/New";
import ClassShow from "@/views/class/Show";

// user
import UserShow from "@/views/user/Show";

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        { name: "auth", path: "/authenticate", composnent: Auth },
        { name: "admin", path: "/", component: Home },
        { name: "user", path: "/user/:id", component: UserShow },
        { name: "NewTask", path: "/task/new", component: TaskNew },
        { name: "TaskShow", path: "/class/:class_id/task/:id", component: TaskShow },
        { name: "NewClass", path: "/class/new", component: ClassNew },
        { name: "ShowClass", path: "/class/:id", component: ClassShow }
    ]
});
