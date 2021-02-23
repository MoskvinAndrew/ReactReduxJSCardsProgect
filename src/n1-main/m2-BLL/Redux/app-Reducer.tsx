import {Dispatch} from "redux";
import {AuthAPI} from "../../m3-DAL/api";
import {changeLoginStatusAC} from "./login-reducer";
import {Redirect} from "react-router-dom";
import React from "react";
import {setProfileDataAC} from "./profile-reducer";

enum AppActionConsts {
    SET_ERROR = 'APP/SET_ERROR',
    SET_STATUS = 'APP/SET_STATUS',
    SET_IS_INITIALIZED = 'APP/SET_IS_INITIALIZED',
}

//type
export type ActionsAppType = ReturnType<typeof setError> |
    ReturnType<typeof setStatus> |
    ReturnType<typeof setIsInitializedApp>;

export type AppStateType = {
    status: StatusPageType
    error: string | null
    isInitializedApp: boolean
};

export type StatusPageType = 'loading' | 'failed' | "succeed" | 'idle'
//---type---

const initialState: AppStateType = {
    status: 'idle',
    error: null,
    isInitializedApp: false
};

export const appReducer = (state: AppStateType = initialState, action: ActionsAppType): AppStateType => {
    switch (action.type) {
        case AppActionConsts.SET_ERROR:
            return {...state, error: action.error};
        case AppActionConsts.SET_STATUS:
            return {...state, status: action.status};
        case AppActionConsts.SET_IS_INITIALIZED:
            return {...state, isInitializedApp: action.isInitialized}
        default:
            return state
    }
};


export const setError = (error: string | null) => {

    return {
        type: AppActionConsts.SET_ERROR,
        error
    } as const
};
export const setStatus = (status: StatusPageType) => {
    return {
        type: AppActionConsts.SET_STATUS,
        status
    } as const
};
export const setIsInitializedApp = (isInitialized: boolean) => {
    return {
        type: AppActionConsts.SET_IS_INITIALIZED,
        isInitialized
    } as const
};


export const initializedAppThunk = () => {
    return (dispatch: Dispatch) => {
        AuthAPI.me()
            .then((response: any) => {
                dispatch(changeLoginStatusAC(true));
                dispatch(setProfileDataAC(response.data));                 ///Андрей это временная шляпа, нужно переделать!!!!
            })
            .catch((err: any) => {
                <Redirect to={"/login"}/>
            })
            .finally(() => {
                dispatch(setIsInitializedApp(true));
            })
    }
}

export const logOutMeTC = () => {

    return (dispatch: Dispatch) => {
        AuthAPI.logOut()
            .then((response: any) => {
                dispatch(changeLoginStatusAC(false));
            })
    }
}



