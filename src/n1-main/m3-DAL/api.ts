import axios from 'axios';


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
        return instance.post<ResponseType<UserType>>('auth/forgot', data)
    },
};