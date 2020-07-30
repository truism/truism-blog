import Index from "@/components/index";
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
          path: "/",
          name: 'main',
          redirect: '/index',
        },
        {
            path: '/index',
            name: 'index',
            component: Index,
        }
    ]
})
