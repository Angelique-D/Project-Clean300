import { defineStore } from "pinia";

export const useFormValueStore = defineStore('notices', {
    state: () => { 
       return { 
            notices: []
        } 
    }
})
