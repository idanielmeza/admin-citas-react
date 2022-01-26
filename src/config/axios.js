import axios from 'axios';

export const clienteAxios = axios.create({
    // baseURL: process.env.REACT_APP_BACKEND_URL || window.location.href
    baseURL: window.location.origin
    // baseURL: 'http://localhost:5000'
});

export const tokenAuth = token => {
    if(token){
        clienteAxios.defaults.headers.common['x-token'] = token
    }else{
        delete clienteAxios.defaults.headers.common['x-token'];
    }
};