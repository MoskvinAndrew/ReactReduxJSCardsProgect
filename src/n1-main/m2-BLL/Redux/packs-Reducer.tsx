import {Dispatch} from "redux";
import {PackDataModalWindowType, PacksAPI} from "../../m3-DAL/api";
import {setError, setStatus} from "./app-Reducer";

enum PacksActionConsts {
    SET_DATA = 'PACKS/SET_DATA',
    SET_PAGE_NAME = 'SET_PAGE_NAME',
    SET_MAX_MIN = 'SET_MAX_MIN'
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

export type ActionsPacksType = ReturnType<typeof setPacksDataAC| typeof setpackNameAC| typeof setMaxMinAC> ;

export type PacksStateType = typeof initialState;

//---type---

const initialState = {
    cardPacks: [] as CardPackType[],
    cardPacksTotalCount: 0,
    maxCardsCount: 1,
    minCardsCount: 40,
    page: 1,
    pageCount: 6,
    token: "",
    tokenDeathTime: 0,
    packName:"",
};

export const packsReducer = (state: PacksStateType = initialState, action: ActionsPacksType): PacksStateType => {
    switch (action.type) {
        case PacksActionConsts.SET_DATA:
            return {...state, ...action.setData, cardPacks: action.setData.cardPacks};
        case PacksActionConsts.SET_PAGE_NAME:
            return{...state, packName: action.packName};
        case PacksActionConsts.SET_MAX_MIN:
            return({...state, maxCardsCount: action.maxValue} &&
                  {...state, minCardsCount: action.minValue});
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
export const setpackNameAC = (packName: string) => {
    return {
        type: PacksActionConsts.SET_PAGE_NAME,
        packName
    } as const
};
export const setMaxMinAC = (maxValue:number,minValue:number) => {
    return {
        type: PacksActionConsts.SET_MAX_MIN,
        maxValue,minValue
    } as const
};


export const setDataThunk = (packName?:string,minPacks?:number,
                             maxPacks?:number,sortPacks?:string,
                             page?:number,pageCount?:number,
                             user_id?:string) => {

    return (dispatch: Dispatch<ActionsPacksType | ReturnType<typeof setStatus> | ReturnType<typeof setError>>) => {

        // dispatch(setStatus('loading'))
        PacksAPI.getPacks(packName,minPacks,maxPacks,sortPacks,page,8,user_id)
            .then(res => {
                console.log(res.data)
                packName && dispatch(setpackNameAC(packName))
                dispatch(setPacksDataAC(res.data))
                dispatch(setStatus("succeed"))
            })
            .catch((err) => {
                dispatch(setError(err.message))
                // dispatch(setStatus('failed'))
            })
    }
};

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
};

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
};

export const updatePackThunk = (packId:string, name?: string) => {

    return (dispatch: Dispatch<any>) => {
        // dispatch(setStatus('loading'))
        PacksAPI.updatePack(packId, name)
            .then(res => {
                dispatch(setDataThunk())
                dispatch(setStatus("succeed"))
            })
            .catch((err) => {
                dispatch(setError(err.message))
                dispatch(setStatus('failed'))
            })
    }
};



