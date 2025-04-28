import axios from "axios";

const newRequest = axios.create({
    baseURL: 'https://travel-web-backend-1.onrender.com',
    // withCredentials: true
})

export default newRequest