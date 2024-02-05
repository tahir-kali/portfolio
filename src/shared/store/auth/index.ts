import { defineStore } from "pinia";
import { ref } from "vue";

const useAuthStore = defineStore('authStore',()=>{
    const token = ref<string|null>(null);
   const getToken = ()=>{
        if(token.value) return token.value;
        const lToken = localStorage.getItem('token');
        if(lToken) {
            token.value = lToken;
            return lToken;
        }
        return null;
    }
    const setToken = (payload:string)=>{
        localStorage.setItem('token',payload);
        token.value = payload;
    }

    return {
        token,getToken,setToken
    }
})

export default useAuthStore;