import {Dispatch} from "redux";
import {CardModalWindowType, CardsAPI} from "../../m3-DAL/api";
import {setError, setStatus} from "./app-Reducer";

//type

export type CardType = {
    _id: string;
    cardsPack_id: string;
    user_id: string;

    answer: string;
    question: string;
    grade: number;
    shots: number;

    questionImg: string;
    answerImg: string;
    answerVideo: string;
    questionVideo: string;

    comments: string;

    type: string;
    rating: number;
    more_id: string;

    created: string;
    updated: string;
}

export type CardsStateType = {
    cards: CardType[];
}

export const CardsInitState: CardsStateType = {
    cards: [],
};

export type ActionsCardsType = ReturnType<typeof setCardsDataAC> ;


export const cardsReducer = (state = CardsInitState, action: ActionsCardsType): CardsStateType => {
    switch (action.type) {
        case "cards/SET_CARDS":
            return {...state,
                    cards: action.cards}
        default:
            return state
    }
};


export const setCardsDataAC = (cards: CardType[]) => {
    return {
        type: "cards/SET_CARDS",
        cards,
    } as const
};


export const getCardThunk = (id: string) => {

    return (dispatch: Dispatch<ActionsCardsType | ReturnType<typeof setStatus> | ReturnType<typeof setError>>) => {
        CardsAPI.getCards(id)
            .then(res => {
                dispatch(setCardsDataAC(res.data.cards))
                dispatch(setStatus("succeed"))
            })
            .catch((err) => {
                dispatch(setError(err.message))
            })
    }
}

export const addCardsThunk = (data: CardModalWindowType) => {

    return (dispatch: Dispatch<any>) => {
        // dispatch(setStatus('loading'))
        CardsAPI.addCard(data)
            .then(res => {
                dispatch(getCardThunk(res.data))
                dispatch(setStatus("succeed"))
            })
            .catch((err) => {
                dispatch(setError(err.message))
                dispatch(setStatus('failed'))
            })
    }
}

export const deleteCardThunk = (id: string, pack_id: string) => {

    return (dispatch: Dispatch<any>) => {
        CardsAPI.deleteCard(id)
            .then(res => {
                dispatch(getCardThunk(pack_id))
                dispatch(setStatus("succeed"))
            })
            .catch((err) => {
                dispatch(setError(err.message))
                dispatch(setStatus('failed'))
            })
    }
}

export const updateCardThunk = (id: string, pack_id: string) => {

    return (dispatch: Dispatch<any>) => {
        // dispatch(setStatus('loading'))
        CardsAPI.updateCard(id)
            .then(res => {
                dispatch(getCardThunk(pack_id))
                dispatch(setStatus("succeed"))
            })
            .catch((err) => {
                dispatch(setError(err.message))
                dispatch(setStatus('failed'))
            })
    }
};

export const updateCardGradeTC = (grade:number,card_id:string) => {
    return () => {
        CardsAPI.updateCardGrade(grade,card_id)
            .then(res =>{
                console.log(res.data)
            })
    }
}



