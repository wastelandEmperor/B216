import Vue from 'vue';
import VueRouter from 'vue-router';
//注册路由全局组件
Vue.use(VueRouter);
//路由组件
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Home from "@/pages/Home";

export default new VueRouter({
    routes: [
        {
            path:"/",
            redirect:"/Login"
        },
        {
            path: "/Login",
            component: Login
        },
        {
            path: "/Register",
            component: Register
        },
        {
            path: "/Home",
            component: Home
        }
    ]
});
