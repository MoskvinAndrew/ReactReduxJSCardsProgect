import {Dispatch} from "redux";
import {CardsDataModalWindowType, CardsAPI} from "../../m3-DAL/api";
import {setError, setStatus} from "./app-Reducer";

enum CardsActionConsts {
    SET_DATA = 'СARDS/SET_DATA',
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

    return (dispatch: Dispatch<ActionsPacksType | ReturnType<typeof setStatus> | ReturnType<typeof setError>>) => {
        // dispatch(setStatus('loading'))
        PacksAPI.getPacks()
            .then(res => {
                dispatch(setPacksDataAC(res.data))
                dispatch(setStatus("succeed"))
            })
            .catch((err) => {
                dispatch(setError(err.message))
                // dispatch(setStatus('failed'))
            })
    }
}

export const setDataPackThunk = (data: PackDataModalWindowType) => {

    return (dispatch: Dispatch<any>) => {
        // dispatch(setStatus('loading'))
        PacksAPI.setPack(data)
            .then(res => {
                dispatch(setDataThunk())
                dispatch(setStatus("succeed"))
            })
            .catch((err) => {
                dispatch(setError(err.message))
                dispatch(setStatus('failed'))
            })
    }
}

export const deletePackThunk = (packId: string) => {

    return (dispatch: Dispatch<any>) => {
        // dispatch(setStatus('loading'))
        PacksAPI.deletePack(packId)
            .then(res => {
                dispatch(setDataThunk())
                dispatch(setStatus("succeed"))
            })
            .catch((err) => {
                dispatch(setError(err.message))
                dispatch(setStatus('failed'))
            })
    }
}

export const updatePackThunk = (packId:string) => {

    return (dispatch: Dispatch<any>) => {
        // dispatch(setStatus('loading'))
        PacksAPI.updatePack(packId)
            .then(res => {
                dispatch(setDataThunk())
                dispatch(setStatus("succeed"))
            })
            .catch((err) => {
                dispatch(setError(err.message))
                dispatch(setStatus('failed'))
            })
    }
}



