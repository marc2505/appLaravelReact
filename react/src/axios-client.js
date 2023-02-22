import axios from "axios";

const axiosClient = axios.create({
    baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`
})

axiosClient.interceptors.request.use((config)=>{
    if(!config.headers.Authorization) {
        const token = localStorage.getItem('ACCESS_TOKEN')
        // const user = localStorage.getItem('USER')
        if(token) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
            config.headers.Authorization = `Bearer ${token}`
        }
    }
    return config;
})

axiosClient.interceptors.response.use((response)=>{
    return response;
}, (error)=>{
    try{
        const {response} = error;
        if (response.status === 401) {
            localStorage.removeItem('ACCESS_TOKEN')
            localStorage.removeItem('USER')
        }
    }catch(e) {
        console.error(e)
    }
    throw error;
})

export default axiosClient;