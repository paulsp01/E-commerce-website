import axios from 'axios'

export const API_BASE_URL="https://e-commerce-website-15-fiee.onrender.com"
const jwt=localStorage.getItem("jwt")


export const api=axios.create({
    baseURL: API_BASE_URL,
    headers:{
         "Content-type": "application/json",
        "Authorization": `Bearer ${jwt}`,
       
    },
   
})

