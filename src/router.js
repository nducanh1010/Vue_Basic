import {createRouter, createWebHistory } from "vue-router"
// import Login from "./views/Login.vue"
import Home from "./views/Home.vue"
import About from "./views/About.vue"
// import Category from "./views/Category.vue"
import Category from "./components/CategoryList.vue"
import ContactList from "./views/Contact/ContactList.vue"
import ContactForm from"./views/Contact/ContactForm.vue"
// import HomeWork from "./views/HomeWork.vue"
import Register from "./views/Register.vue"
import News from "./views/News.vue"
import NewsDetail from"@/components/News/NewsDetail"
import listNewCategory from"@/components/News/ListNewsCategory"
import NotFound from "./views/NotFound.vue"
import Login from "./views/Login.vue"
import DetailUser from"./views/User/DetailUser"
import { isLoggedIn } from '@/utils/auth';
 const loginRoutes = ['/login'];

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
        path:"/news/detail/:id",
        name:"news-detail",
    component:NewsDetail,
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
       path:"/news/list-news-category/:id",
    component:listNewCategory
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
router.beforeEach((to, from, next) => {
    // check user login
    if (!loginRoutes.includes(to.path) && !isLoggedIn()) {
      next('/login');
      return;
    }
  
    if (loginRoutes.includes(to.path) && isLoggedIn()) {
      next('/');
      return;
    }
  
 
  
    next();
  });

export default router;