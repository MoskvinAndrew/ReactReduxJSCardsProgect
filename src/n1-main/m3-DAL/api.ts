import axios from 'axios';
import {loginParamsType} from "../m2-BLL/login-reduser";
import {CardPackType, PacksStateType} from "../m2-BLL/Redux/packs-Reducer";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://neko-back.herokuapp.com/2.0',
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

//for pack post request
export type ResponseCardsPackType = {
    cardsCount: number
    created: string
    deckCover: string
    grade: number
    more_id: string
    name: string
    path: string
    private: boolean
    rating: number
    shots: number
    type: string
    updated: string
    user_id: string
    user_name: string
    __v: number
    _id: string
}

//type for pack data
export type PackDataModalWindowType = {
    name: string
    path: string
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

export const PacksAPI = {
    getPacks() {
        return instance.get<PacksStateType>('/cards/pack')
    },
    setPack(data: PackDataModalWindowType) {
        return instance.post<{ newCardsPack: ResponseCardsPackType }>('/cards/pack', {
            cardsPack: {
                name: data.name,
                path: data.path,
                grade: 1,
                shots: 2,
                rating: 2,
                deckCover: 'string',
                private: false,
                type: 'pack',
            }
        })
    },

};