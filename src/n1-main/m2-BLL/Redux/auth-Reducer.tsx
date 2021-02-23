export type authStateType = typeof initialState;

const initialState = {}

type ActionsType = {};


export const authReducer = (state: authStateType = initialState, action: ActionsType): authStateType => {
    // @ts-ignore
    switch (action.type) {
        case 'isAuth':
            return state
        default:
            return state
    }
}


