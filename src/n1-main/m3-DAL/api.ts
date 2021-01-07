import axios from 'axios';
import {PacksStateType} from "../m2-BLL/Redux/packs-Reducer";
import {loginParamsType} from "../m2-BLL/Redux/login-reducer";
import {CardType} from "../m2-BLL/Redux/cards-Reducer";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://neko-back.herokuapp.com/2.0',
    // baseURL: '"http://localhost:7542/2.0/"	',
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
}

type ResponseType<D = {}> = {
    status: number
    statusText: string
    data: D
}

export type CardModalWindowType = {
    // cardsPack_id: string
    question: string
    answer: string
}

export type GetDataType = {
    cards: CardType[];
    error: string;
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
    me() {
        const promise = instance.post('auth/me');
        return promise;
    },
    logOut() {
        const promise = instance.delete('auth/me');
        return promise;
    },
};

export const PacksAPI = {
    getPacks(packName?: string, minPacks?: number, maxPacks?: number, sortPacks?: string, page?: number, pageCount?: number) {
        return instance.get<PacksStateType>(`cards/pack`, {
            params: {
                packName: packName,
                min: minPacks,
                max: maxPacks,
                sortPacks: sortPacks,
                page: page,
                pageCount: pageCount,
            }
        })
    },
    setPack(data: PackDataModalWindowType) {
        return instance.post<{ newCardsPack: ResponseCardsPackType }>('cards/pack', {
            cardsPack: {
                name: data.name,
                path: '/def',
                grade: 1,
                shots: 2,
                rating: 2,
                deckCover: 'string',
                private: false,
                type: 'pack',
            }
        })
    },
    deletePack(packId: string) {
        return instance.delete<{ deletedCardsPack: ResponseCardsPackType }>(`cards/pack?id=${packId}`)
    },
    updatePack(packId: string, name: string = 'updated name') {
        return instance.put<{ updatedCardsPack: ResponseCardsPackType }>(`cards/pack`, {
            cardsPack: {
                _id: packId,
                name,
                path: '/def',
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


export const CardsAPI = {
    getCards(cardsPack_id: string) {
        return instance.get<GetDataType>(`/cards/card?cardsPack_id=${cardsPack_id}`
            + "&pageCount=1000");
    },
    addCard(data: CardModalWindowType) {
        return instance.post<any>('cards/card', {
            cards: {
                // cardsPack_id: data.cardsPack_id,
                question: data.question,
                answer: data.answer,
                grade: Math.random() * 5,
                questionImg: "some img",
            },
        })
    },
    deleteCard(id: string) {
        return instance.delete<any>(`/cards/card?&id=${id}`)
    },
    updateCard(id: string) {
        return instance.put<any>("/cards/card", {
            card: {
                _id: id,
                question: "updated question",
                answerImg: "some answer img",
                comments: "new com",
            }
        })
    },
};