import {createRouter, createWebHistory } from "vue-router"
// import Login from "./views/Login.vue"
import Home from "./views/Home.vue"
import About from "./views/About.vue"
import Category from "./views/Category.vue"
import Contact from "./views/Contact.vue"
import HomeWork from "./views/HomeWork.vue"
import Register from "./views/Register.vue"
import News from "./views/News.vue"
import NotFound from "./views/NotFound.vue"
import Login from "./views/Login.vue"

const routes=[
    {
        path:"/",
        name:"homepage-route",
    component:Home,
    },
    {
        path:"/news",
        name:"news-route",
    component:News,
    },
    // {
    //     path:"/",
    // component:Login,
    // },
    {
        path:"/about",
    component:About,
    },
    {
        path:"/category",
    component:Category,
    },
    {
        path:"/contact",
    component:Contact,
    },
    {
        path:"/homework",
    component:HomeWork,
    },
    {
        path:"/register",
    component:Register,
    },
    {
        path:'/:pathMatch(.*)*',
        component:NotFound
    }
    ,
    {
        path:'/login',
        component:Login
    }
    
];
// const router= createRouter({    
//     history:createWebHashHistory(process.env.BASE_URL),
//     routes,
//     mode: 'history'
// })

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router;