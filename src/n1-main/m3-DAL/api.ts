import axios from 'axios';
import {loginParamsType} from "../m2-BLL/login-reduser";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:7542/2.0/',
});

export type RegisterRequestType = {
    email: string
    password: string
}

export type ForgotRequestType = {
    email: string
}

export type NewPassRequestType = {
    password: string
    resetPasswordToken: string
}

export type UserType = {
    created: string
    email: string
    isAdmin: boolean
    name: string
    publicCardPacksCount: number
    rememberMe: boolean
    updated: string
    verified: boolean
    __v: number
    _id: string
}

type ResponseType<D = {}> = {
    status: number
    statusText: string
    data: D
}

export const AuthAPI = {
    register(data: RegisterRequestType) {
        return instance.post<ResponseType<UserType>>('auth/register', data)
    },
    forgot(data: ForgotRequestType) {
        return instance.post<ResponseType<UserType>>('auth/forgot', {
            email: data.email,
            frome: "test-front-admin <ai73a@yandex.by>",
            message: `<div style="background-color: lime; padding: 15px">password recovery link: <a href='http://localhost:3000/#/newPassword/$token$'>link</a></div>`
        })
    },
    newPass(data: NewPassRequestType) {
        return instance.post<ResponseType<UserType>>('auth/set-new-password', data)
    },
    login(data: loginParamsType) {
        const promise = instance.post('auth/login', data);
        return promise;
    },
};