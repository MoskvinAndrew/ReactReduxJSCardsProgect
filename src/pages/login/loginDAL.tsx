import axios from 'axios'
import {loginParamsType} from "./login-reduser";

const instance = axios.create({
    baseURL: "http://localhost:7542/2.0/",

})

export const loginAPI = {
    login(data: loginParamsType) {
        const promise = instance.post('/auth/login', data);
        return promise;
    },
}