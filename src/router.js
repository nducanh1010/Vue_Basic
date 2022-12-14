import {createRouter, createWebHistory } from "vue-router"
import Home from "./views/Home.vue"
import About from "./views/About.vue"
import Category from "./components/CategoryList.vue"
import ContactList from "./views/Contact/ContactList.vue"
import ContactForm from"./views/Contact/ContactForm.vue"
import Register from "./views/Register.vue"
import News from "./views/News.vue"
import listNewCategory from"@/components/News/ListNewsCategory"
import NotFound from "./views/NotFound.vue"
import Login from "./views/Login.vue"
import DetailUser from"./views/User/DetailUser"
import { isLoggedIn } from '@/utils/auth';
import { useTitle } from "@vueuse/core"

const routes=[
    {
        path:"/",
        name:"homepage-route",
    component:Home,
    meta:{title:'Home'}
    },
    {
        path:"/news",
        name:"news-route",
    component:News,
    meta:{title:'News'}
    },
    {
        path:"/about",
    component:About,
    meta:{title:'About'}
    },
    {
        path:"/category",
    component:Category,
    meta:{
        title:'Category'
    }
    },
    {
        path:"/category/:id",
    component:Category,
    meta:{
        title:'Category'
    }
    },
    {
       path:"/news/list-news-category/:id",
    component:listNewCategory,
    
    },
    
    {
        path:"/contact",
    component:ContactForm,
    meta:{
        title:'ContactForm'
    }
    },
    {
        path:"/contactList",
    component:ContactList,meta:{
        title:'ContactList'
    }
    },
    {
        path:'/contactList/:id',
        name:'contact',
        component:ContactList
    },
   
    {
        path:"/register",
        name:'register',
    component:Register,meta:{
        title:'Register'
    }
    },
    {
        path:'/:pathMatch(.*)*',
        component:NotFound
    }
    ,
    {
        path:'/login',
        name:'login',
        component:Login,
        meta:{
            title:'Login'
        }
    },
 
    {
        path:'/userprofile/:id',
        name:'userprofile',
        component:DetailUser,
        meta:{
            title:'Profile'
        }
    },
    

    
];
const router = createRouter({
    history: createWebHistory(),
    routes: routes
})
router.beforeEach((to, from, next) => {

   
        const publicPages = ['/login', '/register'];
        const authRequired = !publicPages.includes(to.path);
        const loggedIn = isLoggedIn()
      
        if (authRequired && !loggedIn) {
          next('/login');
        } else {
          next();
        }
 useTitle(to.meta.title)

    next();
  });
    
export default router;