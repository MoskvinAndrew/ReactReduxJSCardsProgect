import {Dispatch} from "redux";
import {PacksAPI} from "../../m3-DAL/api";
import {setStatus} from "./app-Reducer";

enum PacksActionConsts {
    SET_DATA = 'PACKS/SET_DATA',
    SET_STATUS = 'APP/SET_STATUS',
    SET_IS_INITIALIZED = 'APP/SET_IS_INITIALIZED',
}

//type

export type CardPackType = {
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

export type ActionsPacksType = ReturnType<typeof setPacksDataAC> ;

export type PacksStateType = typeof initialState;

//---type---

const initialState = {
    cardPacks: [] as CardPackType[],
    cardPacksTotalCount: 0,
    maxCardsCount: 25,
    minCardsCount: 0,
    page: 1,
    pageCount: 4,
    token: "",
    tokenDeathTime: 0,
};

export const packsReducer = (state: PacksStateType = initialState, action: ActionsPacksType): PacksStateType => {
    switch (action.type) {
        case PacksActionConsts.SET_DATA:
            return {...state, ...action.setData, cardPacks: action.setData.cardPacks}
        default:
            return state
    }
};


export const setPacksDataAC = (setData: PacksStateType) => {
    return {
        type: PacksActionConsts.SET_DATA,
        setData
    } as const
};


export const setDataThunk = () => {

    return (dispatch: Dispatch<ActionsPacksType | ReturnType<typeof setStatus>>) => {
        PacksAPI.getPacks()
            .then(res => {
                dispatch(setPacksDataAC(res.data))
            })
    }

}



