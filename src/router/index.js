import Index from "@/components/index";
import Vue from "vue";
import VueRouter from "vue-router";
import BlogList from "@/components/blog-list"
import BlogDetail from "@/components/blog-detail"
import BlogArchive from "@/components/blog-archive"
import About from "@/components/about"
import Contact from "@/components/contact"

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
          path: "/",
          name: 'main',
          component: Index,
          redirect: '/index/blog-list',
        },
        {
            path: '/index',
            name: 'index',
            component: Index,
            children: [
                {
                  path: 'blog-list',
                  name: 'blog-list',
                  component: BlogList,
                },
            ]
        },
        {
            path: '/index',
            name: 'index',
            component: Index,
            children: [
                {
                    path: "blog-detail/:id",
                    name: 'blogDetail',
                    component: BlogDetail,
                    props: true,
                },
            ]
        },
        {
            path: '/index',
            name: 'index',
            component: Index,
            children: [
                {
                    path: 'blog-archive',
                    name: 'blogArchive',
                    component: BlogArchive,
                },
            ]
        },
        {
            path: '/index',
            name: 'index',
            component: Index,
            children: [
                {
                    path: 'contact',
                    name: 'contact',
                    component: Contact,
                },
            ]
        },
        {
            path: '/index',
            name: 'index',
            component: Index,
            children: [
                {
                    path: 'about',
                    name: 'about',
                    component: About,
                },
            ]
        },
    ]
})
