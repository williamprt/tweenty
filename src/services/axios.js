import axios from 'axios';

const api = axios.create({
    baseURL: 'https://backend2304.herokuapp.com/'
});

export default api;