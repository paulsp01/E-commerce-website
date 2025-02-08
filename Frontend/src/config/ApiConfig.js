import axios from 'axios'

export const API_BASE_URL="https://e-commerce-website-7-lo97.onrender.com/"
const jwt=localStorage.getItem("jwt")


export const api=axios.create({
    baseURL: API_BASE_URL,
    headers:{
         "Content-type": "application/json",
        "Authorization": `Bearer ${jwt}`,
       
    }
})

