import React from 'react';
import {Dispatch} from "redux";
import {setProfileDataAC, setProfileDataACType} from './profile-reducer';
import {AuthAPI} from "../../m3-DAL/api";
import {ActionsAppType, setError} from "./app-Reducer";


const CHANGE_LOGIN_STATUS = 'loginReducer/CHANGE_LOGIN_STATUS';
const LOGIN_PROCESS_IN_PROGRESS = 'loginReducer/LOGIN_PROCESS_IN_PROGRESS';

export type loginParamsType = {
    email: string,
    password: string,
    rememberMe: boolean,
    captcha?: boolean
}

export type changeLoginStatusACType = {
    type: typeof CHANGE_LOGIN_STATUS,
    isLoggedIn: boolean
};
export type loginProcessInProgressACType = {
    type: typeof LOGIN_PROCESS_IN_PROGRESS,
    loginProcessInProgress: boolean
}


export type loginStateType = typeof initialState;

const initialState = {
    isLoggedIn: false,
    loginProcessInProgress: false
};
type ActionsType = changeLoginStatusACType | loginProcessInProgressACType

export const loginReducer = (state: loginStateType = initialState, action: ActionsType): loginStateType => {
    switch (action.type) {
        case 'loginReducer/CHANGE_LOGIN_STATUS':
            return {...state, isLoggedIn: action.isLoggedIn}
        case 'loginReducer/LOGIN_PROCESS_IN_PROGRESS':
            return {...state, loginProcessInProgress: action.loginProcessInProgress}
        default:
            return state
    }
}
export const changeLoginStatusAC = (isLoggedIn: boolean): changeLoginStatusACType => ({
        type: 'loginReducer/CHANGE_LOGIN_STATUS', isLoggedIn
    } as const
);
export const loginProcessInProgressAC = (loginProcessInProgress: boolean): loginProcessInProgressACType => ({
    type: 'loginReducer/LOGIN_PROCESS_IN_PROGRESS',
    loginProcessInProgress
} as const);


export let loginTC = (data: loginParamsType) => (dispatch: Dispatch<ActionsType | setProfileDataACType | ActionsAppType>) => {
    dispatch(loginProcessInProgressAC(true));
    AuthAPI.login(data)
        .then(res => {
            dispatch(setProfileDataAC(res.data));
            dispatch(changeLoginStatusAC(true));

        })
        .catch(e => {
            dispatch(loginProcessInProgressAC(false))
            const error = e.response
                ? dispatch(setError(e.response.data.error))
                : dispatch(setError(e.message + ', more details in the console'))
        })
        .finally(() => {
            dispatch(loginProcessInProgressAC(false));
        })

}