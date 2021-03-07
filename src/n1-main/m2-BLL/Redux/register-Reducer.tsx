import {Dispatch} from "redux";
import {AuthAPI, RegisterRequestType, UserType} from "../../m3-DAL/api";
import {ActionsAppType, setError, setStatus} from "./app-Reducer";

enum RegisterActionConsts {
    SET_IS_SIGNED_UP = 'REGISTER/SET_IS_SIGNED_UP',
}

//type
export type ActionsRegisterType = ReturnType<typeof setIsSignedUp>;

export type RegisterStateType = {
    userData: {}
    isSignedUp: boolean
};


const initialState: RegisterStateType = {
    userData: {} as UserType,
    isSignedUp: false,
};

export const registerReducer = (state: RegisterStateType = initialState, action: ActionsRegisterType): RegisterStateType => {
    switch (action.type) {
        case RegisterActionConsts.SET_IS_SIGNED_UP:
            return {...state, isSignedUp: action.value}
        default:
            return state
    }
};


// const setAddedUserData = (data: UserType) => {
//     return {
//         type: RegisterActionConsts.SET_ADDED_USER_DATA,
//         data
//     } as const
// };
const setIsSignedUp = (value: boolean) => {
    return {
        type: RegisterActionConsts.SET_IS_SIGNED_UP,
        value
    } as const
};


export const registerThunk = (data: RegisterRequestType) => {

    return (dispatch: Dispatch<ActionsRegisterType | ActionsAppType>) => {
        dispatch(setStatus('loading'));
        AuthAPI.register(data)
            .then(res => {
                dispatch(setIsSignedUp(true));
                dispatch(setStatus('succeed'))
            })
            .catch(e => {
                dispatch(setStatus('failed'))
                const error = e.response
                    ? dispatch(setError(e.response.data.error))
                    : dispatch(setError(e.message + ', more details in the console'))
            })
    }
};




