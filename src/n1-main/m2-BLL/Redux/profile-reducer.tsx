const SET_PROFILE_DATA = 'profileReducer/SET_PROFILE_DATA';

export type authStateType = typeof initialState;

const initialState = {
    profileData:{
        avatar: "",
        created: "",
        email: "",
        isAdmin: false,
        name: "",
        publicCardPacksCount: 0,
        rememberMe: false,
        token: "",
        tokenDeathTime: 0,
        updated: "",
        verified: false,
        __v: 0,
        _id: ""
    }
}




export const profileReducer = (state: authStateType = initialState, action: ActionsType): authStateType => {

    switch (action.type) {

        case 'profileReducer/SET_PROFILE_DATA':
            return {...state,profileData:action.profileData}

        default:
            return state
    }
}

export const setProfileDataAC = (profileData:profileDataType) =>({type:'profileReducer/SET_PROFILE_DATA',profileData} as const);

export type setProfileDataACType = ReturnType<typeof setProfileDataAC>

type ActionsType = setProfileDataACType

 export type profileDataType = {
    avatar: string,
    created: string,
    email: string,
    isAdmin: boolean,
    name: string,
    publicCardPacksCount: number,
    rememberMe: boolean,
    token: string,
    tokenDeathTime: number,
    updated: string,
    verified: boolean,
    __v: number,
    _id: string
}