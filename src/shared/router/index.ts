import { createRouter, createWebHistory } from "vue-router"
import privatePaths from "./private";
import publicPaths from "./public";
import useAuthStore from "../store/auth";
const routes = [
    ...privatePaths,
    ...publicPaths
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
router.beforeEach(async (to,from,next)=>{
    const authStore = useAuthStore();
    const token = authStore.getToken();
    if(typeof to.meta.auth !== 'undefined' && to.meta.auth && [null,undefined,'',0,false].includes(token)){
        router.replace("/auth")
    }else{
        next()
    }
})
export default router;