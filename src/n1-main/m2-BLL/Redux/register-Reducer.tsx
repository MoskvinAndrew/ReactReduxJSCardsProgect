import {Dispatch} from "redux";
import {AuthAPI, RegisterRequestType, UserType} from "../../m3-DAL/api";

enum RegisterActionConsts {
    SET_ERROR = 'REGISTER/SET_ERROR',
    SET_STATUS = 'REGISTER/SET_STATUS',
    SET_IS_SIGNED_UP = 'REGISTER/SET_IS_SIGNED_UP',
    SET_ADDED_USER_DATA = 'REGISTER/SET_ADDED_USER_DATA',
}

//type
export type ActionsType = ReturnType<typeof setAddedUserData> |
    ReturnType<typeof setError> |
    ReturnType<typeof setStatus> |
    ReturnType<typeof setIsSignedUp>;

export type RegisterStateType = {
    userData: {}
    isSignedUp: boolean
    status: StatusPageType
    error: string | null
};

export type StatusPageType = 'loading' | 'failed' | "succeed" | 'idle'
//---type---

const initialState: RegisterStateType = {
    userData: {} as UserType,
    isSignedUp: false,
    status: 'idle',
    error: null,
};

export const registerReducer = (state: RegisterStateType = initialState, action: ActionsType): RegisterStateType => {
    switch (action.type) {
        case RegisterActionConsts.SET_ADDED_USER_DATA:
            return state;
        case RegisterActionConsts.SET_ERROR:
            return state;
        case RegisterActionConsts.SET_IS_SIGNED_UP:
            return {...state, isSignedUp: action.value};
        case RegisterActionConsts.SET_STATUS:
            return state;
        default:
            return state
    }
};


const setAddedUserData = (data: UserType) => {
    return {
        type: RegisterActionConsts.SET_ADDED_USER_DATA,
        data
    } as const
};
const setError = (error: string | null) => {
    return {
        type: RegisterActionConsts.SET_ERROR,
        error
    } as const
};
const setStatus = (status: StatusPageType) => {
    return {
        type: RegisterActionConsts.SET_STATUS,
        status
    } as const
};
const setIsSignedUp = (value: boolean) => {
    return {
        type: RegisterActionConsts.SET_IS_SIGNED_UP,
        value
    } as const
};


export const registerThunk = (data: RegisterRequestType) => {

    return (dispatch: Dispatch<ActionsType>) => {
        dispatch(setStatus('loading'));
        AuthAPI.register(data)
            .then(res => {
                dispatch(setIsSignedUp(true));
                dispatch(setStatus('succeed'))
            })
            .catch(err => {
                dispatch(setError(err));
                dispatch(setStatus('failed'))
            })
    }
};






