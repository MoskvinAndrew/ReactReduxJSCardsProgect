import axios from 'axios'
import {loginParamsType} from "../../n1-main/m2-BLL/Redux/login-reduser";

const instance = axios.create({
    baseURL: "http://localhost:7542/2.0/",

})

export const loginAPI = {

    login(data: loginParamsType) {
        debugger
        const promise = instance.post('/auth/login', data);
        return promise;
    },
}