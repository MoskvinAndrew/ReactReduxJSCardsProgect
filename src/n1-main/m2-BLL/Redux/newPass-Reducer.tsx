import {Dispatch} from "redux";
import {AuthAPI, NewPassRequestType} from "../../m3-DAL/api";
import {ActionsAppType, setError, setStatus} from "./app-Reducer";

export type NewPassStateType = {
    success: boolean;
}

const NewPassInitState:NewPassStateType = {
    success: false,
};

export type PropertiesType<T> = T extends {[key: string]: infer U} ? U : never;
export type InferActionsType<T extends {[key: string]: (...arg: any[]) => any}> = ReturnType<PropertiesType<T>>
export type NewPassActionsType = InferActionsType<typeof NewPassActions>;

export const NewPassActions = {
setSuccess: (success: boolean) => ({
    type: "newPass/SET_SUCCESS",
    success,
} as const)
};

export const newPassReducer = (state = NewPassInitState, action:NewPassActionsType): NewPassStateType => {
    switch (action.type) {

        case "newPass/SET_SUCCESS": {
            return {
                ...state,

                success: action.success,
            }
        }

        default: {
            return state
        }
    }
};

export const newPassThunk = (data: NewPassRequestType) => {
    debugger

    return (dispatch: Dispatch<NewPassActionsType | ActionsAppType>) => {

        dispatch(setStatus('loading'));
        AuthAPI.newPass(data)
            .then(res => {

                dispatch(NewPassActions.setSuccess(true));
            })
            .catch(err => {

                dispatch(setError(err));
            })
    }
};

