import {createRouter, createWebHashHistory} from "vue-router";
import store from "../store";

const routes = [
    {
        name : "HomePage",
        path : "/",
        component : () => import("@/views/Home.vue")
    },
    {
        name : "LoginPage",
        path : "/login",
        component : () => import("@/views/Login.vue")
    },
    {
        name : "RegisterPage",
        path : "/register",
        component : () => import("@/views/Register.vue")
    },
    {
        name : "NewBookmarkPage",
        path : "/newBookmark",
        component : () => import("@/views/NewBookmark.vue")
    },
    {
        name : "Favorites",
        path : "/favorites",
        component : () => import("@/views/Account.vue")
    },
    {
        name : "Likes",
        path : "/likes",
        component : () => import("@/views/Account.vue")
    },
    {
        name : "Settings",
        path : "/settings",
        component : () => import("@/views/Account.vue")
    },
];

const router = createRouter({
    routes,
    history : createWebHashHistory()
});

router.beforeEach((to,from,next) =>{
    const authRequired = ["HomePage"];
    const authNotRequired =["LoginPage","RegisterPage"]
    const _isAuthenticated = store.getters._isAuthenticated
    if(authNotRequired.indexOf(to.name) > -1 && _isAuthenticated) next(false)
    if(authRequired.indexOf(to.name)> -1){ 
        if(_isAuthenticated) next();
        else next({name:"LoginPage"});
    }else{
        next();
    }
})

export default router;