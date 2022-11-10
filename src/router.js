import {createRouter, createWebHistory } from "vue-router"
// import Login from "./views/Login.vue"
import Home from "./views/Home.vue"
import About from "./views/About.vue"
// import Category from "./views/Category.vue"
import Category from "./views/Category/CategoryList.vue"
import ContactList from "./views/Contact/ContactList.vue"
import ContactForm from"./views/Contact/ContactForm.vue"
// import HomeWork from "./views/HomeWork.vue"
import Register from "./views/Register.vue"
import News from "./views/News.vue"
import NotFound from "./views/NotFound.vue"
import Login from "./views/Login.vue"
import DetailUser from"./views/User/DetailUser"
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
    {
        path:"/news/:id",
        name:"newss",
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
        path:"/category/:id",
    component:Category,
    },
    {
        path:"/contact",
    component:ContactForm,
    },
    {
        path:"/contactList",
    component:ContactList,
    },
    {
        path:'/contactList/:id',
        name:'contact',
        component:ContactList
    },
    // {
    //     path:"/homework",
    // component:HomeWork,
    // },
    {
        path:"/register",
        name:'register',
    component:Register,
    },
    {
        path:'/:pathMatch(.*)*',
        component:NotFound
    }
    ,
    {
        path:'/login',
        name:'login',
        component:Login
    },
    {
        path:'/login/:id',
        name:'loginid',
        component:Login
    },
    {
        path:'/userprofile/:id',
        name:'userprofile',
        component:DetailUser
    },
    

    
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